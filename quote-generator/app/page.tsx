'use client';
import QuoteCard from "@/components/QuoteCard";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center min-h-screen bg-gradient-to-br from-pink-100 to-purple-100">
      <div className="text-center mt-10 mb-6 px-4">
        <h1 className="text-4xl font-extrabold text-white drop-shadow-md stroke-text">Motivational Quote Generator</h1>
        <p className="italic text-lg text-white drop-shadow-md stroke-text">Pour In A Word, Watch Inspiration Overflow</p>
      </div>
      <QuoteCard />
    </div>
  );
}
