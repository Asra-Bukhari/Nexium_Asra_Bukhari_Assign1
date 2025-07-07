'use client';
import { Button } from "@/components/ui/button";

export default function QuoteNavigator({
  current,
  total,
  onNext,
  onPrev,
  onReset,
}: {
  current: number;
  total: number;
  onNext: () => void;
  onPrev: () => void;
  onReset: () => void;
}) {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <Button onClick={onPrev}>⬅️</Button>
        <span>{current + 1} / {total}</span>
        <Button onClick={onNext}>➡️</Button>
      </div>
      <Button
        onClick={onReset}
        className="w-full bg-red-600 text-white hover:bg-red-700"
      >
        Search Another Topic
      </Button>
    </div>
  );
}
