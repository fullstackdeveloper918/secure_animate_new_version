"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import HeroSectionMain from "../hero-banner/HeroSectionMain"

export default function BannerSection({ data }: any) {
  const textRef = useRef(null)
  const wrapperRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Set initial state - hero text hidden initially
    gsap.set(textRef.current, {
      opacity: 0, // Start with text hidden
      y: 100, // Position below its final position
      zIndex: 10,
    })

    // Timeline for scaling image and managing text
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: "top top",
        end: "+=150%",
        scrub: true,
        pin: true,
        markers: false,
      },
    })

    // Image scale animation
    tl.to(".banner-image", {
      scale: 15,
      opacity: 0,
      ease: "power2.inOut",
      transformOrigin: "center center",
      duration: 0.5, // Shorter duration to reach full screen faster
    })

    // Only after image scales up, animate the text from bottom to top
    tl.to(
      textRef.current,
      {
        opacity: 1, // Fade in
        y: 0, // Move up to final position
        duration: 0.3,
        ease: "power2.out",
      },
      ">-0.1", // Start slightly before the previous animation ends
    )

    // Hide image near end of scroll
    tl.to(
      ".banner-image",
      {
        display: "none",
        duration: 0.01,
      },
      ">0.8", // After text is fully visible
    )

    // Stars effect
    const starContainer = document.querySelector(".star-container")
    if (starContainer) {
      const numberOfStars = 50
      for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement("div")
        star.classList.add("star")
        gsap.set(star, {
          x: gsap.utils.random(0, window.innerWidth),
          y: gsap.utils.random(0, window.innerHeight),
        })
        starContainer.appendChild(star)
        gsap.to(star, {
          x: "+=random(-100, 100)",
          y: "+=random(-100, 100)",
          duration: gsap.utils.random(5, 15),
          repeat: -1,
          yoyo: true,
          ease: "none",
          delay: gsap.utils.random(0, 5),
        })
      }
    }

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <div className="wrapper" ref={wrapperRef}>
      <div className="content">
        <section className="section hero">
          <video
            src="/banner-videonew.mp4"
            autoPlay
            muted
            loop
            playsInline
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />

          {/* Hero text container - now positioned at bottom initially */}
          <div className="hero-text" ref={textRef}>
            <HeroSectionMain data={data} />
          </div>
        </section>
      </div>
      <div className="image-container">
        <img src="/newBannerImage-smm.webp" alt="Banner" className="banner-image" />
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
          left: 0; /* Left aligned */
          transform: translateY(-50%); /* Only center vertically */
          opacity: 0; /* Start hidden */
          text-align: left; /* Left aligned text */
          color: white;
          width: 100%;
          max-width: 1200px;
          padding-left: 5%; /* Add some padding from the left edge */
          pointer-events: auto;
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
          z-index: 5;
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
  )
}
