'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import HeroSectionMain from '../hero-banner/HeroSectionMain';

export default function BannerSection({ data }: any) {
    console.log(data, "BannerSection")

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from("header .logo, header .nav-links a, header .contact-button", {
      y: 50,
      opacity: 0,
      duration: 1,
      delay: 0.5,
      stagger: 0.1,
      ease: "power3.out"
    });

    gsap.timeline({
      scrollTrigger: {
        trigger: ".wrapper",
        start: "top top",
        end: "+=150%",
        pin: true,
        scrub: true,
        markers: false
      }
    })
    .to("img", {
      scale: 2,
      z: 350,
      transformOrigin: "center center",
      ease: "power1.inOut"
    })
    .to(".section.hero", {
      scale: 1.1,
      transformOrigin: "center center",
      ease: "power1.inOut"
    }, "<")
    .to(".star-container", {
      opacity: 0,
      duration: 0.5,
      ease: "power1.inOut"
    }, "<");

    // Create stars
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
          {/* <video
            src="/banner-video.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="video-bg"
          /> */}
           <HeroSectionMain data={data} /> 
        </section>
        {/* <section className="section gradient-purple"></section>
        <section className="section gradient-blue"></section> */}
      </div>
      <div className="image-container">
        <img src="/newBannerImage.webp" alt="Banner" />
        <div className="star-container"></div>
      </div>

      <style jsx>{`
        .wrapper, .content {
          position: relative;
          width: 100%;
          z-index: 1;
        }
        .content {
          overflow-x: hidden;
        }
        .section {
          width: 100%;
          height: 100vh;
        }
        .hero {
          position: relative;
        }
        .video-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .image-container {
          width: 100%;
          height: 100vh;
          position: absolute;
          top: 0;
          left: 0;
          z-index: 2;
          perspective: 200px;
          overflow: hidden;
        }
        .image-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
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
