'use client';
import QuoteCard from "@/components/QuoteCard";

export default function Home() {
  return (
    <div className="relative flex flex-col items-center min-h-screen bg-gradient-to-br from-pink-100 to-purple-100">
      {/* Heading */}
      <div className="text-center mt-10 mb-6 px-4">
        <h1 className="text-4xl font-extrabold text-white drop-shadow-md stroke-text">
          Motivational Quote Generator
        </h1>
       <p className="italic text-base md:text-lg text-black font-small leading-relaxed px-4 md:px-0 drop-shadow-sm md:drop-shadow-md ">
            Feeling Low? Here&apos;s a bit of motivation you need
        </p>
      </div>

      {/* Quote Card */}
      <QuoteCard />
    </div>
  );
}
