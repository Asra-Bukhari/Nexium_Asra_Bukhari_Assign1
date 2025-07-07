'use client';
import QuoteCard from "@/components/QuoteCard";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">

      {/* Header */}
      <header className="w-full text-center py-6 border-b border-red-300 bg-white/60 backdrop-blur-sm relative z-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-red-400 tracking-widest drop-shadow-[0_2px_2px_rgba(0,0,0,1)]">
          Élevé
        </h1>
        <p className="flashy-text mt-2 text-md md:text-lg italic text-red-200">
          Elevating Minds with Inspiring Quotes
        </p>
      </header>

      {/* Quote Card */}
      <QuoteCard />
    </div>
  );
}
