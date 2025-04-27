// app/api/cart/update-attributes/route.ts
import { updateCartAttributes } from 'lib/shopify';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { cartId, attributes } = await request.json();
    const cart = await updateCartAttributes(cartId, attributes);
    return NextResponse.json({ success: true, cart });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update cart' }, { status: 500 });
  }
}
