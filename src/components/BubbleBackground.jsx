import { useEffect, useState } from 'react';

export const BubbleBackground = () => {
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    generateBubbles();
    window.addEventListener("resize", generateBubbles);
    return () => window.removeEventListener("resize", generateBubbles);
  }, []);

  const generateBubbles = () => {
    const numberOfBubbles = Math.floor(window.innerWidth / 15);
    const newBubbles = [];
    for (let i = 0; i < numberOfBubbles; i++) {
      newBubbles.push({
        id: i,
        size: Math.random() * 40 + 10,
        x: Math.random() * 100,
        delay: Math.random() * 10,
        duration: Math.random() * 15 + 10,
        opacity: Math.random() * 0.3 + 0.2,
      });
    }
    setBubbles(newBubbles);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-700">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="absolute rounded-full bg-white/30 animate-bubble"
          style={{
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            left: `${bubble.x}%`,
            bottom: `-50px`,
            opacity: bubble.opacity,
            animationDelay: `${bubble.delay}s`,
            animationDuration: `${bubble.duration}s`,
          }}
        />
      ))}
    </div>
  );
};

