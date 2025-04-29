'use client';

import type { Cart, CartItem, Product, ProductVariant } from 'lib/shopify/types';
import React, {
  createContext,
  startTransition,
  use,
  useContext,
  useMemo,
  useOptimistic
} from 'react';
import { updateCartAttributesAction } from './actions'; // <-- Import your server action

type UpdateType = 'plus' | 'minus' | 'delete';

type CartAction =
  | { type: 'UPDATE_ITEM'; payload: { merchandiseId: string; updateType: UpdateType } }
  | { type: 'ADD_ITEM'; payload: { variant: ProductVariant; product: Product } }
  | { type: 'UPDATE_ATTRIBUTES'; payload: { key: string; value: string } }
  | { type: 'REPLACE_CART'; payload: Cart };

type CartContextType = {
  cart: Cart | undefined;
  updateCartItem: (merchandiseId: string, updateType: UpdateType) => void;
  addCartItem: (variant: ProductVariant, product: Product) => void;
  pickupDate?: string;
  pickupTime?: string;
  setPickupDate: (date: string) => Promise<void>;
  setPickupTime: (time: string) => Promise<void>;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

function calculateItemCost(quantity: number, price: string): string {
  return (Number(price) * quantity).toString();
}

function updateCartItem(item: CartItem, updateType: UpdateType): CartItem | null {
  if (updateType === 'delete') return null;

  const newQuantity = updateType === 'plus' ? item.quantity + 1 : item.quantity - 1;
  if (newQuantity === 0) return null;

  const singleItemAmount = Number(item.cost.totalAmount.amount) / item.quantity;
  const newTotalAmount = calculateItemCost(newQuantity, singleItemAmount.toString());

  return {
    ...item,
    quantity: newQuantity,
    cost: {
      ...item.cost,
      totalAmount: {
        ...item.cost.totalAmount,
        amount: newTotalAmount
      }
    }
  };
}

function createOrUpdateCartItem(
  existingItem: CartItem | undefined,
  variant: ProductVariant,
  product: Product
): CartItem {
  const quantity = existingItem ? existingItem.quantity + 1 : 1;
  const totalAmount = calculateItemCost(quantity, variant.price.amount);

  return {
    id: existingItem?.id,
    quantity,
    cost: {
      totalAmount: {
        amount: totalAmount,
        currencyCode: variant.price.currencyCode
      }
    },
    merchandise: {
      id: variant.id,
      title: variant.title,
      selectedOptions: variant.selectedOptions,
      product: {
        id: product.id,
        handle: product.handle,
        title: product.title,
        featuredImage: product.featuredImage
      }
    }
  };
}

function updateCartTotals(lines: CartItem[]): Pick<Cart, 'totalQuantity' | 'cost'> {
  const totalQuantity = lines.reduce((sum, item) => sum + item.quantity, 0);
  const totalAmount = lines.reduce((sum, item) => sum + Number(item.cost.totalAmount.amount), 0);
  const currencyCode = lines[0]?.cost.totalAmount.currencyCode ?? 'USD';

  return {
    totalQuantity,
    cost: {
      subtotalAmount: { amount: totalAmount.toString(), currencyCode },
      totalAmount: { amount: totalAmount.toString(), currencyCode },
      totalTaxAmount: { amount: '0', currencyCode }
    }
  };
}

function createEmptyCart(): Cart {
  return {
    id: undefined,
    checkoutUrl: '',
    totalQuantity: 0,
    lines: [],
    attributes: [],
    cost: {
      subtotalAmount: { amount: '0', currencyCode: 'USD' },
      totalAmount: { amount: '0', currencyCode: 'USD' },
      totalTaxAmount: { amount: '0', currencyCode: 'USD' }
    }
  };
}

function cartReducer(state: Cart | undefined, action: CartAction): Cart {
  const currentCart = state || createEmptyCart();

  switch (action.type) {
    case 'UPDATE_ITEM': {
      const { merchandiseId, updateType } = action.payload;
      const updatedLines = currentCart.lines
        .map((item) =>
          item.merchandise.id === merchandiseId ? updateCartItem(item, updateType) : item
        )
        .filter(Boolean) as CartItem[];

      if (updatedLines.length === 0) {
        return {
          ...currentCart,
          lines: [],
          totalQuantity: 0,
          cost: {
            ...currentCart.cost,
            totalAmount: { ...currentCart.cost.totalAmount, amount: '0' }
          }
        };
      }

      return { ...currentCart, ...updateCartTotals(updatedLines), lines: updatedLines };
    }
    case 'ADD_ITEM': {
      const { variant, product } = action.payload;
      const existingItem = currentCart.lines.find((item) => item.merchandise.id === variant.id);
      const updatedItem = createOrUpdateCartItem(existingItem, variant, product);

      const updatedLines = existingItem
        ? currentCart.lines.map((item) => (item.merchandise.id === variant.id ? updatedItem : item))
        : [...currentCart.lines, updatedItem];

      return { ...currentCart, ...updateCartTotals(updatedLines), lines: updatedLines };
    }
    case 'UPDATE_ATTRIBUTES': {
      const { key, value } = action.payload;
      const filtered = currentCart.attributes.filter((attr) => attr.key !== key);
      return {
        ...currentCart,
        attributes: [...filtered, { key, value }]
      };
    }
    case 'REPLACE_CART':
      return action.payload;
    default:
      return currentCart;
  }
}

export function CartProvider({
  children,
  cartPromise
}: {
  children: React.ReactNode;
  cartPromise: Promise<Cart | undefined>;
}) {
  const initialCart = use(cartPromise);
  const [optimisticCart, updateOptimisticCart] = useOptimistic(initialCart, cartReducer);

  // Get pickup date/time from cart attributes
  const pickupDate = optimisticCart?.attributes.find((attr) => attr.key === 'Pickup_Date')?.value;
  const pickupTime = optimisticCart?.attributes.find((attr) => attr.key === 'Pickup_Time')?.value;
  const setPickupDate = async (date: string) => {
    if (!optimisticCart?.id) return;

    // 1. Get current attributes, filter out Pickup_Date, and add the new one
    const otherAttributes = optimisticCart.attributes.filter((attr) => attr.key !== 'Pickup_Date');
    const newAttributes = [...otherAttributes, { key: 'Pickup_Date', value: date }];

    // 2. Optimistic update
    startTransition(() => {
      updateOptimisticCart({
        type: 'UPDATE_ATTRIBUTES',
        payload: { key: 'Pickup_Date', value: date }
      });
    });

    // 3. Send the full array to Shopify
    await updateCartAttributesAction(optimisticCart.id, newAttributes);
  };

  const setPickupTime = async (time: string) => {
    if (!optimisticCart?.id) return;

    // 1. Get current attributes, filter out Pickup_Time, and add the new one
    const otherAttributes = optimisticCart.attributes.filter((attr) => attr.key !== 'Pickup_Time');
    const newAttributes = [...otherAttributes, { key: 'Pickup_Time', value: time }];

    // 2. Optimistic update
    startTransition(() => {
      updateOptimisticCart({
        type: 'UPDATE_ATTRIBUTES',
        payload: { key: 'Pickup_Time', value: time }
      });
    });

    // 3. Send the full array to Shopify
    await updateCartAttributesAction(optimisticCart.id, newAttributes);
  };

  const updateCartItem = (merchandiseId: string, updateType: UpdateType) => {
    updateOptimisticCart({ type: 'UPDATE_ITEM', payload: { merchandiseId, updateType } });
  };

  const addCartItem = (variant: ProductVariant, product: Product) => {
    updateOptimisticCart({ type: 'ADD_ITEM', payload: { variant, product } });
  };

  const value = useMemo(
    () => ({
      cart: optimisticCart,
      updateCartItem,
      addCartItem,
      pickupDate,
      pickupTime,
      setPickupDate,
      setPickupTime
    }),
    [optimisticCart, pickupDate, pickupTime]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
