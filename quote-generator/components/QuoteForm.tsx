'use client';

import { useState } from 'react';
import quotes from '../data/quotes';

export default function QuoteForm() {
  const [topic, setTopic] = useState('');
  const [results, setResults] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const filtered = quotes
      .filter((q) => q.topic.toLowerCase() === topic.toLowerCase())
      .slice(0, 3)
      .map((q) => q.text);
    setResults(filtered);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-white rounded shadow">
      <form onSubmit={handleSubmit}>
        <input
          className="w-full p-2 border rounded mb-4"
          placeholder="Enter topic (e.g. success)"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />
        <button className="w-full bg-blue-500 text-white p-2 rounded" type="submit">
          Show Quotes
        </button>
      </form>
      <ul className="mt-4">
        {results.map((quote, idx) => (
          <li key={idx} className="mb-2 text-gray-700">
            “{quote}”
          </li>
        ))}
      </ul>
    </div>
  );
}
