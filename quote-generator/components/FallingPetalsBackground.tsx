'use client';
import React, { useMemo } from 'react';
import Image from 'next/image';
import './FallingPetals.css';

export default function FallingPetalsBackground() {
  const petals = useMemo(() => {
    return Array.from({ length: 15 }).map(() => ({
      left: `${Math.random() * 100}%`,
      animationDuration: `${5 + Math.random() * 10}s`,
      animationDelay: `${Math.random() * 5}s`,
    }));
  }, []);

  return (
    <div className="falling-words-container pointer-events-none">
      {petals.map((style, i) => (
        <Image
          key={i}
          src="/petal.png"
          alt="Petal"
          width={30}
          height={30}
          className="falling-word"
          style={style}
        />
      ))}
    </div>
  );
}
