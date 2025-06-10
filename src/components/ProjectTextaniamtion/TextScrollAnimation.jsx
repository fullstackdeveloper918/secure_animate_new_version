"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function TextScrollAnimation() {
  const containerRef = useRef(null);
  const wordsRef = useRef([]);

  const words = [
    "Speed",
    "Retention",
    "Conversion",
    "Satisfaction",
    "Engagement",
  ];

  useEffect(() => {
    const container = containerRef.current;
    const wordElements = wordsRef.current;

    if (!container || wordElements.length === 0) return;

    // Set initial state - all words invisible
    gsap.set(wordElements, {
      opacity: 0,
      y: 100,
      scale: 0.8,
    });

    // Create the main timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "+=400%", // Extend the scroll distance
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });

    // Animate each word in sequence
    wordElements.forEach((word, index) => {
      tl.to(
        word,
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          ease: "power2.out",
        },
        index * 0.8
      ); // Stagger the animations

      // Keep the word visible for a bit, then fade out (except the last one)
      if (index < wordElements.length - 1) {
        tl.to(
          word,
          {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            ease: "power2.inOut",
          },
          index * 0.8 + 1.2
        );
      }
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="bg-black text-white">
      {/* Hero Section - Full Screen */}

      {/* Pinned Animation Section */}
      <section
        ref={containerRef}
        className="h-screen flex flex-col items-center justify-center bg-black relative overflow-hidden"
      >
        <h1 className="text-white text-2xl font-medium">RESULT THAT MATTER</h1>
        <div className="text-center">
          {words.map((word, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) wordsRef.current[index] = el;
              }}
              className=" flex gap-1 justify-center"
            >
              <h2 className="list-none w-auto table text-[calc(1rem+4vw)] leading-[calc(1rem+4vw)] tracking-[-0.15vw] font-medium text-white">
                {word}
              </h2>
            </div>
          ))}
        </div>

        {/* Background decoration */}
        {/* <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-cyan-500 rounded-full blur-3xl"></div>
        </div> */}
      </section>

      {/* Content Sections Below */}
    </div>
  );
}
