'use client';
import { useState } from 'react';
import quotes from '../data/quotes';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import QuoteNavigator from './QuoteNavigator';
import { motion, AnimatePresence } from 'framer-motion';

export default function QuoteCard() {
  const [topic, setTopic] = useState('');
  const [filteredQuotes, setFilteredQuotes] = useState<{ text: string; author: string }[]>([]);
  const [current, setCurrent] = useState(0);
  const [filling, setFilling] = useState(false);
  const [showNoQuotes, setShowNoQuotes] = useState(false);

  const FILL_DURATION = 1200;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = quotes.filter(q => q.topic.toLowerCase().includes(topic.toLowerCase()));
    if (result.length > 0) {
      setFilteredQuotes(result.map(r => ({ text: r.text, author: r.author })));
      setShowNoQuotes(false);
      setFilling(true);
      setTimeout(() => setFilling(false), FILL_DURATION);
    } else {
      setShowNoQuotes(true);
      setTimeout(() => setShowNoQuotes(false), 2500);
    }
  };

  const handleNext = () => {
    setFilling(true);
    setTimeout(() => {
      setCurrent((current + 1) % filteredQuotes.length);
      setFilling(false);
    }, FILL_DURATION);
  };

  const handlePrev = () => {
    setFilling(true);
    setTimeout(() => {
      setCurrent((current - 1 + filteredQuotes.length) % filteredQuotes.length);
      setFilling(false);
    }, FILL_DURATION);
  };

  return (
    <div className="flex flex-col mt-8 md:mt-0 md:flex-row items-center justify-center gap-4 md:h-[calc(100vh-150px)] md:overflow-hidden px-4">
      {/* Quote Box */}
      <motion.div
        className="w-full max-w-xs md:max-w-sm rounded-2xl overflow-hidden shadow-2xl border border-red-600 relative"
        style={{ background: 'linear-gradient(to right, #2b0000, #6b0000)' }}
      >
        {/* Filling animation */}
        <motion.div
          className="absolute inset-0 z-0 rounded-2xl"
          initial={false}
          animate={{ scaleY: filling ? 1 : 0 }}
          transition={{ duration: FILL_DURATION / 1000, ease: "easeInOut" }}
          style={{
            background: 'rgba(255, 255, 255, 0.2)',
            originY: 1,
            transformOrigin: 'bottom'
          }}
        />

        <div className="p-4 text-white relative z-10">
          {filteredQuotes.length === 0 ? (
            <form onSubmit={handleSubmit} className="space-y-3">
              <Input
                className="text-black bg-white placeholder-gray-600 focus:ring-2 focus:ring-red-500 h-10 text-base md:text-lg"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="Enter topic e.g. success"
              />
              <Button
                type="submit"
                className={`w-full h-10 text-base md:text-lg ${filling ? 'bg-black text-white' : 'bg-white text-black'} hover:bg-red-500`}
              >
                Generate
              </Button>

              {showNoQuotes && (
                <p className="text-center text-xs text-white opacity-80">
                  No quotes found.
                </p>
              )}
            </form>
          ) : (
            <div className="space-y-3">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  <p className="text-base md:text-lg font-semibold mb-1">
                    “{filteredQuotes[current].text}”
                  </p>
                  <p className="text-xs md:text-sm italic text-red-300">
                    - {filteredQuotes[current].author}
                  </p>
                </motion.div>
              </AnimatePresence>

              <QuoteNavigator
                current={current}
                total={filteredQuotes.length}
                onNext={handleNext}
                onPrev={handlePrev}
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

      {/* Video */}
      <div className="w-full md:w-[450px] md:max-h-[720px] -mt-25 md:mt-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-auto object-contain rounded-2xl"
        >
          <source src="/background.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}
