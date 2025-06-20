"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import HeroSectionMain from "../hero-banner/HeroSectionMain";

export default function BannerSection({ data }: any) {
  const textRef = useRef(null);
  const wrapperRef = useRef(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initially hide hero-text container
    gsap.set(textRef.current, {
      opacity: 0,
      y: 100,
      zIndex: 10,
    });

    // Select h1 and other text elements (e.g., p) inside HeroSectionMain
    // Adjust selectors based on the actual structure of HeroSectionMain
    const textElements = contentRef.current?.querySelectorAll(
      "h1, p" // Target h1 and p elements; update if HeroSectionMain uses different tags or classes
    );

    // Initially hide text elements
    if (textElements) {
      gsap.set(textElements, { opacity: 0, y: 50 });
    }

    // Create GSAP timeline for automatic sequential animation
    const tl = gsap.timeline({
      defaults: { ease: "power2.out" }, // Default easing for all animations
    });

    // Optional: Animate video slightly (e.g., subtle scale or fade)
    tl.to("video", {
      scale: 1.1, // Subtle zoom effect
      opacity: 0.9,
      duration: 1,
    });

    // Animate hero-text container (fades and slides up)
    tl.to(textRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.5,
    });

    // Animate h1 and text elements one by one
    if (textElements) {
      textElements.forEach((element, index) => {
        tl.to(
          element,
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
          },
          `>-0.3` // Stagger each element by 0.3s for overlap
        );
      });
    }

    // No ScrollTrigger cleanup needed
  }, []);

  return (
    <div className="wrapper" ref={wrapperRef}>
      <div className="content" ref={contentRef}>
        <section className="section hero">
          <video
            src="/banner-videonew.mp4"
            autoPlay
            muted
            loop
            playsInline
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />

          {/* Hero text container */}
          <div className="hero-text" ref={textRef}>
            <HeroSectionMain data={data} />
          </div>
        </section>
      </div>

      <style jsx>{`
        .wrapper,
        .content {
          position: relative;
          width: 100%;
          z-index: 1;
        }
        .section.hero {
          width: 100%;
          height: 100vh;
          position: relative;
          z-index: 3;
        }
        section#hero {
          background-color: #00000000 !important;
        }
        section#hero::before {
          background: transparent;
        }
        .main_banner {
          opacity: 1 !important;
        }
        video {
          position: absolute;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          z-index: 1;
        }
        .hero-text {
          position: absolute;
          z-index: 10;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
          opacity: 0;
          text-align: left;
          color: white;
          width: 100%;
          max-width: 1200px;
          // padding-left: 5%;
          pointer-events: auto;
        }
      `}</style>
    </div>
  );
}