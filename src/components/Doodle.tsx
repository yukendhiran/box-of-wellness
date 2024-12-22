"use client";
import { useEffect, useRef } from "react";

const doodles = [
  "/1.svg",
  "/2.svg",
  "/3.svg",
  "./4.svg",
  "./5.svg",
  "./6.svg",
  "./7.svg",
  "./8.svg",
];

export function Doodle() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (container) {
      for (let i = 0; i < 50; i++) {
        const doodle = document.createElement("img");
        doodle.src = doodles[Math.floor(Math.random() * doodles.length)];
        doodle.className = "doodle absolute float-animation";

        // Randomize the position on the screen
        doodle.style.top = `${Math.random() * 100}%`;
        doodle.style.left = `${Math.random() * 100}%`;

        // Randomize size between 20px and 70px
        const size = 100;
        doodle.style.width = `${size}px`;
        doodle.style.height = `${size}px`;

        // Randomize opacity between 0.5 and 1
        //doodle.style.opacity = `${Math.random() * 0.5 + 0.5}`;

        // Randomize rotation
        const rotation = Math.random() * 360; // Random rotation between 0 and 360 degrees
        doodle.style.transform = `rotate(${rotation}deg)`;

        // Random scale for more variation
        const scale = Math.random() * 0.5 + 0.5; // Scale between 0.5 and 1.5
        doodle.style.transform += ` scale(${scale})`;

        // Optional: Random background-color for added randomness
        //doodle.style.backgroundColor = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.2)`;

        container.appendChild(doodle);
      }
    }

    // Clean up on component unmount
    return () => {
      if (container) {
        container.innerHTML = "";
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-1 overflow-hidden"
    ></div>
  );
}
