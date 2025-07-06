'use client';

import { Button } from "@/components/ui/button";

export default function QuoteNavigator({
  current,
  total,
  onNext,
  onPrev,
  onReset,  // ✅ New prop
}: {
  current: number;
  total: number;
  onNext: () => void;
  onPrev: () => void;
  onReset: () => void;  // ✅ New prop type
}) {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <Button onClick={onPrev}>⬅️</Button>
        <span>{current + 1} / {total}</span>
        <Button onClick={onNext}>➡️</Button>
      </div>

      {/* ✅ New Button */}
      <Button  
        onClick={onReset}
        className="w-full bg-pink-500 text-white hover:bg-pink-600"
      >
        Search Another Topic
      </Button>
    </div>
  );
}
