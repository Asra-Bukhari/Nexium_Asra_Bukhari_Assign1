'use client';
import React from 'react';
import './FallingWords.css';

const words = ['Success', 'Failure', 'Goals', 'Life', 'Hardwork', 'Dream', 'Motivation'];

export default function FallingWordsBackground() {
  return (
    <div className="falling-words-container pointer-events-none">
      {Array.from({ length: 20 }).map((_, i) => (
        <span key={i} className="falling-word" style={{
          left: `${Math.random() * 100}%`,
          animationDuration: `${5 + Math.random() * 10}s`,
          animationDelay: `${Math.random() * 5}s`
        }}>
          {words[Math.floor(Math.random() * words.length)]}
        </span>
      ))}
    </div>
  );
}
