'use client';
import dynamic from "next/dynamic";
const FallingWordsBackground = dynamic(() => import("@/components/FallingWordsBackground"), { ssr: false });

import { useState } from 'react';
import quotes from '../data/quotes';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import QuoteNavigator from './QuoteNavigator';
import { motion, AnimatePresence } from 'framer-motion';

export default function QuoteCard() {
  const [topic, setTopic] = useState('');
  const [filteredQuotes, setFilteredQuotes] = useState<string[]>([]);
  const [current, setCurrent] = useState(0);
  const [filling, setFilling] = useState(false);
  const [showNoQuotes, setShowNoQuotes] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = quotes.filter(q => q.topic.toLowerCase().includes(topic.toLowerCase()));
    if (result.length > 0) {
      setFilteredQuotes(result.map(r => r.text));
      setShowNoQuotes(false);
      setFilling(true);
      setTimeout(() => {
        setFilling(false);
      }, 1500);
    } else {
      setShowNoQuotes(true);
      setTimeout(() => setShowNoQuotes(false), 2500);
    }
  };

  return (
    <div className="relative flex justify-center items-start min-h-screen bg-gradient-to-br from-pink-100 to-purple-100 pt-16">
      <FallingWordsBackground />

      {/* Main Layout (now responsive with flex-col on mobile) */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 w-full max-w-7xl px-4 md:px-8">
        
        {/* Quote Box (full width on mobile) */}
        <motion.div
          className="w-full md:w-[65%] rounded-2xl overflow-hidden shadow-2xl border relative z-10"
          style={{ background: 'linear-gradient(to right, #f9a8d4, #c084fc)' }}
        >
          {/* Filling Animation */}
          <motion.div
            className="absolute inset-0 z-0 rounded-2xl"
            initial={false}
            animate={{ scaleY: filling ? 1 : 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            style={{
              background: 'rgba(255, 255, 255, 0.3)',
              originY: 1,
              transformOrigin: 'bottom'
            }}
          />
          <div className="p-6 md:p-12 text-white relative z-10">

            {filteredQuotes.length === 0 ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <Input 
                  className="text-black bg-white placeholder-gray-600 focus:ring-2 focus:ring-pink-400 h-12 md:h-14 text-base md:text-lg"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  placeholder="Enter a topic e.g. success"
                />
                <Button 
                  type="submit" 
                  className={`w-full h-12 md:h-14 text-base md:text-lg ${filling ? 'bg-black text-white' : 'bg-white text-black'} hover:bg-pink-300`}
                >
                  Generate Quotes
                </Button>

                {/* No quotes found message */}
                {showNoQuotes && (
                  <p className="text-center text-sm text-white opacity-80">
                    No available quotes for this topic.
                  </p>
                )}
              </form>
            ) : (
              <div className="space-y-6">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={current}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ duration: 0.5 }}
                    className="text-xl md:text-2xl font-semibold text-center"
                  >
                    {filteredQuotes[current]}
                  </motion.p>
                </AnimatePresence>
                <QuoteNavigator
                  current={current}
                  total={filteredQuotes.length}
                  onNext={() => {
                    setFilling(true);
                    setTimeout(() => {
                      setCurrent((current + 1) % filteredQuotes.length);
                      setFilling(false);
                    }, 800);
                  }}
                  onPrev={() => {
                    setFilling(true);
                    setTimeout(() => {
                      setCurrent((current - 1 + filteredQuotes.length) % filteredQuotes.length);
                      setFilling(false);
                    }, 800);
                  }}
                  onReset={() => {
                    setTopic('');
                    setFilteredQuotes([]);
                    setCurrent(0);
                  }}
                />
              </div>
            )}
          </div>
        </motion.div>

        {/* Side Video (full width on mobile) */}
        <div className="w-full md:w-[50%] rounded-2xl overflow-hidden shadow-lg border-4 border-pink-300">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-auto object-cover"
          >
            <source src="/background.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}
