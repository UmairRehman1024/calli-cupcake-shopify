// components/PickupDateSelector.tsx
'use client';

import { useState } from 'react';

export default function PickupDateSelector({ cartId }: { cartId: string | undefined }) {
  const [selectedDate, setSelectedDate] = useState('');
  const [isUpdating, setIsUpdating] = useState(false);
  const [message, setMessage] = useState('');

  const handleDateChange = async (e: { target: { value: any } }) => {
    const date = e.target.value;
    setSelectedDate(date);
    setIsUpdating(true);
    setMessage('Updating...');

    try {
      const response = await fetch('/api/cart/update-attributes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          cartId,
          attributes: [{ key: 'Pickup_Date', value: date }]
        })
      });

      if (response.ok) {
        setMessage('Pickup date updated!');
      } else {
        setMessage('Failed to update pickup date');
      }
    } catch (error) {
      setMessage('Error updating pickup date');
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <div className="my-4 rounded border p-4">
      <h3 className="font-medium">Select Pickup Date</h3>
      <input
        type="date"
        value={selectedDate}
        onChange={handleDateChange}
        min={new Date().toISOString().split('T')[0]}
        className="mt-2 w-full rounded border p-2"
        disabled={isUpdating}
      />
      {message && <p className="mt-2 text-sm">{message}</p>}
    </div>
  );
}
