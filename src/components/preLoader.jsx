import React, { useState, useEffect } from "react";
import ScrambleSequence from "./ScrambleTextLoad";

const TEXTS = [
  "Brewing some cool things",
  "Hang tight, magic is happening",
  "Loading your adventure",
  "Loading... ",
];

const PreLoader = () => {
  const [hide, setHide] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < TEXTS.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      // All texts shown, hide loader
      setTimeout(() => {
        setHide(true);
      }, 1500);
    }
  };

  return (
    <div
      className={`bg-black min-h-screen transition-opacity duration-500 ${
        hide ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <ScrambleSequence
        text={TEXTS[currentIndex]}
        onComplete={handleNext}
        className="text-white code-block font-semibold text-5xl text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      />
    </div>
  );
};

export default PreLoader;
