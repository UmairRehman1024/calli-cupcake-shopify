'use client';

import { format } from 'date-fns';
import { CalendarIcon, Clock, Loader2 } from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Label } from '@/components/ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/shadcn-utils';
import { useCart } from './cart-context';

const timeSlots = [
  '10:00 AM - 11:00 AM',
  '11:00 AM - 12:00 PM',
  '12:00 PM - 1:00 PM',
  '1:00 PM - 2:00 PM',
  '2:00 PM - 3:00 PM',
  '3:00 PM - 4:00 PM',
  '4:00 PM - 5:00 PM'
];

export default function PickupSelector() {
  const { cart, pickupDate, pickupTime, setPickupDate, setPickupTime } = useCart();

  // UI state only
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isTimeOpen, setIsTimeOpen] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [error, setError] = useState('');

  // For display
  const date = pickupDate ? new Date(pickupDate) : undefined;
  const timeSlot = pickupTime || '';

  const handleDateSelect = async (newDate: Date | undefined) => {
    setIsCalendarOpen(false);
    if (newDate && cart?.id) {
      setIsUpdating(true);
      setError('');
      try {
        const formattedDate = format(newDate, 'yyyy-MM-dd');
        await setPickupDate(formattedDate);
        console.log('-------------DONE-Date---------------');
      } catch (e) {
        setError('Failed to update pickup date');
      } finally {
        setIsUpdating(false);
      }
    }
  };

  const handleTimeSelect = async (value: string) => {
    setIsTimeOpen(false);
    if (value && cart?.id) {
      setIsUpdating(true);
      setError('');
      try {
        await setPickupTime(value);
        console.log('-------------DONE-Time---------------');
      } catch (e) {
        setError('Failed to update pickup time');
      } finally {
        setIsUpdating(false);
      }
    }
  };

  return (
    <div className="mb-6 space-y-4 rounded border p-4">
      <div>
        <h3 className="mb-2 text-base font-medium text-gray-700">Select Pickup Date</h3>
        <Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                'w-full justify-start border-gray-300 bg-white text-left font-normal hover:bg-gray-50',
                !date && 'text-gray-500'
              )}
              disabled={isUpdating}
            >
              <CalendarIcon className="mr-2 h-4 w-4 text-gray-500" />
              {date ? format(date, 'PPP') : <span>dd / mm / yyyy</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={date}
              onSelect={handleDateSelect}
              initialFocus
              disabled={(date) => {
                // Disable dates in the past
                const today = new Date();
                today.setHours(0, 0, 0, 0);
                return date < today;
              }}
              className="rounded-md border"
            />
          </PopoverContent>
        </Popover>
      </div>

      <div>
        <h3 className="mb-2 text-base font-medium text-gray-700">Select Pickup Time</h3>
        <Popover open={isTimeOpen} onOpenChange={setIsTimeOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                'w-full justify-start border-gray-300 bg-white text-left font-normal hover:bg-gray-50',
                !timeSlot && 'text-gray-500'
              )}
              disabled={!date || isUpdating}
            >
              <Clock className="mr-2 h-4 w-4 text-gray-500" />
              {timeSlot ? timeSlot : <span>Select a time slot</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[300px] p-3" align="start">
            <RadioGroup value={timeSlot} onValueChange={handleTimeSelect}>
              <div className="max-h-[200px] space-y-2 overflow-auto pr-2">
                {timeSlots.map((slot) => (
                  <div key={slot} className="flex items-center space-x-2">
                    <RadioGroupItem
                      value={slot}
                      id={slot}
                      className="border-gray-300 text-rose-700"
                    />
                    <Label htmlFor={slot} className="w-full cursor-pointer py-1.5">
                      {slot}
                    </Label>
                  </div>
                ))}
              </div>
            </RadioGroup>
          </PopoverContent>
        </Popover>
      </div>

      {isUpdating && (
        <div className="flex items-center justify-center p-3">
          <Loader2 className="h-5 w-5 animate-spin text-rose-700" />
          <span className="ml-2 text-sm text-gray-600">Updating...</span>
        </div>
      )}

      {error && (
        <div className="rounded-md bg-red-50 p-3 text-sm text-red-700">
          <p>{error}</p>
        </div>
      )}

      {date && timeSlot && !isUpdating && !error && (
        <div className="rounded-md bg-rose-50 p-3 text-sm">
          <p className="font-medium text-rose-800">Pickup Details:</p>
          <p className="text-rose-700">{format(date, 'EEEE, MMMM d, yyyy')}</p>
          <p className="text-rose-700">{timeSlot}</p>
        </div>
      )}

      <Separator className="bg-gray-200" />
    </div>
  );
}
