"use client";
import { useState } from 'react';
import Confetti from 'react-confetti';


export default function Home() {
    const [confettiList, setConfettiList] = useState([]);
    const [confettiCount, setConfettiCount] = useState(0);
  
    const handleConfetti = () => {
      const newConfetti = {
        id: confettiCount,
        x: Math.random() * 100,
        y: Math.random() * 100,
      };
      setConfettiList(prevList => [...prevList, newConfetti]);
      setConfettiCount(prevCount => prevCount + 1);
  
      // Remove confetti after 5 seconds
      setTimeout(() => {
        setConfettiList(prevList => prevList.filter(item => item.id !== newConfetti.id));
      }, 5000);
    };
  
    return (
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
          <h1 className="text-6xl font-bold mb-8">
            Welcome to the Multi-Confetti Party!
          </h1>
          <button
            onClick={handleConfetti}
            className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
          >
            Launch Confetti!
          </button>
          {confettiList.map((confetti) => (
            <Confetti
              key={confetti.id}
              width={window.innerWidth}
              height={window.innerHeight}
              recycle={false}
              numberOfPieces={200}
              confettiSource={{
                x: confetti.x * window.innerWidth / 100,
                y: confetti.y * window.innerHeight / 100,
                w: 0,
                h: 0
              }}
            />
          ))}
        </main>
      </div>
    );
  }