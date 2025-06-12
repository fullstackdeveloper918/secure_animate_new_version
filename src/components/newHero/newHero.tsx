'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import HeroSectionMain from '../hero-banner/HeroSectionMain';

export default function BannerSection({ data }: any) {
  const textRef = useRef(null);

useEffect(() => {
  gsap.registerPlugin(ScrollTrigger);

  // Timeline for scaling image and fading in text
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".wrapper",
      start: "top top",
      end: "+=150%", // You can adjust this for how long to pin
      scrub: true,
      pin: true,
      markers: false,
      onUpdate: (self) => {
        if (self.progress >= 0.95) {
          // Hide image near end
          gsap.set(".banner-image", { display: "none" });
        }
      }
    }
  });

  // Image scale and fade out
  tl.to(".banner-image", {
    scale: 15,
    opacity: 0,
    ease: "power2.inOut",
    transformOrigin: "center center",
    duration: 1
  });

  // Fade in hero text right after image fades
  tl.to(textRef.current, {
    opacity: 1,
    duration: 1,
    ease: "power2.out"
  }, "-=0.5"); // overlap timing so text starts appearing before image is completely gone

  // Stars effect (unchanged)
  const starContainer = document.querySelector('.star-container');
  const numberOfStars = 50;
  for (let i = 0; i < numberOfStars; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    gsap.set(star, {
      x: gsap.utils.random(0, window.innerWidth),
      y: gsap.utils.random(0, window.innerHeight),
    });
    starContainer?.appendChild(star);
    gsap.to(star, {
      x: "+=random(-100, 100)",
      y: "+=random(-100, 100)",
      duration: gsap.utils.random(5, 15),
      repeat: -1,
      yoyo: true,
      ease: "none",
      delay: gsap.utils.random(0, 5)
    });
  }
}, []);


  return (
    <div className="wrapper">
      <div className="content">
        <section className="section hero">
          <video src="/banner-videonew.mp4" autoPlay loop playsInline />
          <div className="hero-text" ref={textRef}>
            <HeroSectionMain data={data} />
          </div>
        </section>
      </div>
      <div className="image-container">
        <img src="/newBannerImage.webp" alt="Banner" className="banner-image" />
        {/* <div className="star-container"></div> */}
      </div>

      <style jsx>{`
        .wrapper, .content {
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
  z-index: 3;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  text-align: center;
  color: white;
  transition: opacity 1s ease;
        }
        .image-container {
          width: 100%;
          height: 100vh;
          position: absolute;
          top: 0;
          left: 0;
          z-index: 2;
          overflow: hidden;
          perspective: 200px;
        }
        .banner-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center center;
          will-change: transform, opacity;
        }
        .star-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }
        .star {
          position: absolute;
          width: 4px;
          height: 4px;
          background-color: white;
          border-radius: 50%;
        }
      `}</style>
    </div>
  );
}
