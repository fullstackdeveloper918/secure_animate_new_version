"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Link from "next/link"

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const HorizontalScrollSection = () => {
  const sectionRef = useRef(null)
  const horizontalRef = useRef(null)

  useEffect(() => {
    if (!sectionRef.current || !horizontalRef.current) return

    const section = sectionRef.current
    const horizontalContent = horizontalRef.current

    // Create multiple star layers for parallax effect - INSIDE SECTION ONLY
    const createStarLayers = () => {
      const container = section
      const layers = 3

      for (let layer = 0; layer < layers; layer++) {
        const starLayer = document.createElement("div")
        starLayer.className = "star-layer"
        starLayer.style.cssText = `
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        `
        container.appendChild(starLayer)

        const starCount = layer === 0 ? 30 : layer === 1 ? 20 : 15
        const sizeMultiplier = layer === 0 ? 1 : layer === 1 ? 1.5 : 2
        const speedMultiplier = layer === 0 ? 1 : layer === 1 ? 0.7 : 0.4

        for (let i = 0; i < starCount; i++) {
          const star = document.createElement("div")
          star.className = "star"
          const size = Math.random() * 2 * sizeMultiplier + 1
          star.style.cssText = `
            position: absolute;
            background: white;
            border-radius: 50%;
            width: ${size}px;
            height: ${size}px;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: twinkle ${(Math.random() * 3 + 2) * speedMultiplier}s infinite;
            box-shadow: 0 0 4px rgba(255, 255, 255, 0.8);
          `
          starLayer.appendChild(star)
        }
      }
    }

    // Create nebula effect - INSIDE SECTION ONLY
    const createNebula = () => {
      const container = section
      const nebula = document.createElement("div")
      nebula.className = "nebula"
      nebula.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: radial-gradient(circle at 50% 50%, 
          rgba(110, 76, 225, 0.1) 0%,
          rgba(25, 25, 112, 0.1) 25%,
          rgba(0, 0, 0, 0) 70%);
        pointer-events: none;
        z-index: 0;
        animation: nebulaPulse 20s infinite alternate;
      `
      container.appendChild(nebula)
    }

    // Create shooting stars with random intervals - INSIDE SECTION ONLY
    const createShootingStars = () => {
      const container = section
      const interval = setInterval(
        () => {
          const shootingStar = document.createElement("div")
          shootingStar.className = "shooting-star"
          const duration = Math.random() * 2 + 1
          shootingStar.style.cssText = `
          position: absolute;
          width: 150px;
          height: 2px;
          top: ${Math.random() * 50}%;
          left: -150px;
          background: linear-gradient(90deg, 
            rgba(255,255,255,0) 0%, 
            rgba(255,255,255,1) 50%, 
            rgba(255,255,255,0) 100%);
          animation: shoot ${duration}s linear infinite;
          filter: blur(1px);
          z-index: 1;
        `
          container.appendChild(shootingStar)

          setTimeout(() => {
            if (shootingStar.parentNode) {
              shootingStar.remove()
            }
          }, 3000)
        },
        Math.random() * 5000 + 3000,
      )

      return interval
    }

    createStarLayers()
    createNebula()
    const shootingStarInterval = createShootingStars()

    // Add parallax effect to stars on mouse move - ONLY WITHIN SECTION
    const handleMouseMove = (e) => {
      const rect = section.getBoundingClientRect()
      const mouseX = (e.clientX - rect.left) / rect.width
      const mouseY = (e.clientY - rect.top) / rect.height

      if (mouseX >= 0 && mouseX <= 1 && mouseY >= 0 && mouseY <= 1) {
        section.querySelectorAll(".star-layer").forEach((layer, index) => {
          const speed = (index + 1) * 0.3
          const x = (mouseX - 0.5) * speed * 50
          const y = (mouseY - 0.5) * speed * 50
          layer.style.transform = `translate(${x}px, ${y}px)`
        })
      }
    }

    // Video parallax effect - ONLY WITHIN SECTION
    const handleVideoMouseMove = (e) => {
      const video = section.querySelector(".space-background")
      const video2 = section.querySelector(".space-background2")
      if (!video) return

      const rect = section.getBoundingClientRect()
      const mouseX = (e.clientX - rect.left) / rect.width
      const mouseY = (e.clientY - rect.top) / rect.height

      if (mouseX >= 0 && mouseX <= 1 && mouseY >= 0 && mouseY <= 1) {
        const moveX = (mouseX - 0.5) * 20
        const moveY = (mouseY - 0.5) * 20
        video.style.transform = `translate(${moveX}px, ${moveY}px)`
        if (video2) {
          video2.style.transform = `translate(${moveX * 0.7}px, ${moveY * 0.7}px)`
        }
      }
    }

    section.addEventListener("mousemove", handleMouseMove)
    section.addEventListener("mousemove", handleVideoMouseMove)

    // GSAP horizontal scroll animation
    const scrollAnimation = gsap.to(horizontalContent, {
      x: () => -(horizontalContent.scrollWidth - window.innerWidth),
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "+=3000px", // Increased to accommodate the outro section
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
        anticipatePin: 1,
      },
    })

    // Initialize videos
    const video = section.querySelector(".space-background")
    const video2 = section.querySelector(".space-background2")

    if (video) {
      video.play().catch((error) => {
        console.log("Video autoplay failed:", error)
      })
    }

    if (video2) {
      video2.play().catch((error) => {
        console.log("Video2 autoplay failed:", error)
      })
    }

    // Cleanup function
    return () => {
      section.removeEventListener("mousemove", handleMouseMove)
      section.removeEventListener("mousemove", handleVideoMouseMove)
      clearInterval(shootingStarInterval)
      scrollAnimation.kill()
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())

      section.querySelectorAll(".star-layer, .nebula, .shooting-star").forEach((el) => {
        el.remove()
      })
    }
  }, [])

  const projects = [
    { title: "Techable", image: "ipad-pro-mockup.png" },
    { title: "Sellmac", image: "Sellmac.png" },
    { title: "Apple Tech", image: "ipad-pro-mockup (2).png" },
    { title: "Techable", image: "ipad-pro-mockup.png" },
    { title: "Sellmac", image: "Sellmac.png" },
    { title: "Apple Tech", image: "ipad-pro-mockup (2).png" },
  ]

  return (
    <>
      <section ref={sectionRef} className="horizontal-scroll-section">
        <video className="space-background" autoPlay muted loop playsInline>
          <source src="/Dark-blue-sky.mp4" type="video/mp4" />
        </video>
        <video className="space-background2" autoPlay muted loop playsInline>
          <source src="/Dark-blue-sky.mp4" type="video/mp4" />
        </video>
        <div className="space-overlay"></div>

        <div className="horizontal-scroll-wrapper">
          <div ref={horizontalRef} className="horizontal">
            {/* Intro Section */}
            <div className="intro-section">
              <div className="intro intro2">
                <h1>Recent Work That Speaks for Itself</h1>
                <p>
                  Take a closer look at some of our recent work—each project reflects our commitment to purposeful
                  design and precise execution. These creations are a testament to our capabilities, vision, and passion
                  for building solutions that matter.
                </p>
              </div>
            </div>

            {/* Cards Section */}
            {projects.map((project, index) => (
              <div key={index} className="card-wrapper">
               <Link href="/project" >
                <div className="card">
                  <div className="card-content">
                    <div className="card-icon">
                      <img src={project.image || "/placeholder.svg?height=300&width=400"} alt={project.title} />
                    </div>
                    <h2>{project.title}</h2>
                  </div>
                </div>
               </Link>
              </div>
            ))}

            {/* Outro Section */}
            <div className="outro-section">
              <div className="intro intro3">
                <h1>Ready to Start Your Project?</h1>
                <p>
                  Let's collaborate to bring your vision to life. Our team is ready to tackle your next challenge with
                  innovative solutions and exceptional craftsmanship. Get in touch and let's create something amazing
                  together.
                </p>
                <Link className="proj-btn" href="/contact-us" ><p>Contact Us</p></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes twinkle {
          0%, 100% { 
            opacity: 0.3;
            transform: scale(1);
          }
          50% { 
            opacity: 1;
            transform: scale(1.2);
          }
        }

        @keyframes nebulaPulse {
          0% { transform: scale(1); opacity: 0.5; }
          100% { transform: scale(1.2); opacity: 0.8; }
        }

        @keyframes shoot {
          0% { 
            transform: translateX(0) translateY(0) rotate(45deg);
            opacity: 1;
          }
          100% { 
            transform: translateX(calc(100vw + 150px)) translateY(50px) rotate(45deg);
            opacity: 0;
          }
        }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes lineReveal {
          to {
            opacity: 1;
            width: 200px;
          }
        }
               a.proj-btn {
                  border:2px solid #fff;
                  background: transparent;
                  padding: 12px 38px;
                  border-radius: 30px;
                  margin-top: 20px;
                  font-weight: 800 !important;
                  transition:.5s all ease
              }
                  a.proj-btn:hover{
                  border:1px solid #fff;
                  background: #fff;
                 
              }
                   a.proj-btn:hover p{
                    color:#000 !important;
                   }
        .horizontal-scroll-section {
          padding: 200px 0;
          background: linear-gradient(135deg, 
            rgba(22, 33, 62, 0.95) 0%,
            rgba(15, 52, 96, 0.95) 50%,
            rgba(10, 25, 47, 0.95) 100%);
          position: relative;
          overflow: hidden;
          height: 100vh;
          display: flex;
          align-items: center;
        }

        .space-background,
        .space-background2 {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 0;
        }

        .space-background {
          opacity: 0.3;
          filter: brightness(0.7) contrast(1.2) saturate(1.2);
        }

        // .space-background2 {
        //   opacity: 0.4;
        //   filter: brightness(0.8) contrast(1.1) saturate(1.1);
        //   z-index: 0;
        // }

        .horizontal-scroll-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 20%, rgba(110, 76, 225, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(25, 25, 112, 0.15) 0%, transparent 50%);
          pointer-events: none;
          z-index: 1;
        }

        // .space-overlay {
        //   position: absolute;
        //   top: 0;
        //   left: 0;
        //   width: 100%;
        //   height: 100%;
        //   background: linear-gradient(
        //     180deg,
        //     rgba(22, 33, 62, 0.7) 0%,
        //     rgba(15, 52, 96, 0.8) 50%,
        //     rgba(10, 25, 47, 0.7) 100%
        //   );
        //   z-index: 1;
        // }



        .horizontal-scroll-wrapper {
          overflow: hidden;
          height: 100%;
          width: 100%;
          position: relative;
          display: flex;
          align-items: center;
          z-index: 2;
        }

        .horizontal {
          display: flex;
          height: 100%;
          position: relative;
          gap: 20px;
          align-items: center;
          padding: 20px 0;
        }

        .intro-section,
        .outro-section {
          flex-shrink: 0;
          width: 100vw;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 50px;
        }

        .intro {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          color: #f6f2e8;
          overflow: hidden;
          padding: 0 20px;
          text-align: center;
          flex-direction: column;
          gap: 30px;
          max-width: 800px;
          margin: 0 auto;
        }

        .intro2,
        .intro3 {
          background: unset;
        }

        .intro2 h1,
        .intro3 h1 {
          text-align: center;
          font-size: 4rem;
          font-weight: 600;
          text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
          z-index: 2;
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 1s ease-out forwards;
          line-height: 1.2;
          margin-bottom: 0px;
          background: linear-gradient(45deg, #fff, #dfdfdf);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          position: relative;
        }

        .intro2 p,
        .intro3 p {
          text-align: center;
          color: #ffffffb5;
          opacity: 0.8;
          z-index: 2;
          font-size: 1.2rem;
          line-height: 1.8;
          max-width: 800px;
          margin: 0 auto;
          transform: translateY(20px);
          animation: fadeInUp 1s ease-out 0.3s forwards;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
          position: relative;
        }

        .intro2 p::after,
        .intro3 p::after {
          content: '';
          position: absolute;
          bottom: -20px;
          left: 50%;
          transform: translateX(-50%);
          width: 100px;
          height: 3px;
          background: linear-gradient(90deg, transparent, #03afef, transparent);
          opacity: 0;
          animation: lineReveal 1s ease-out 0.6s forwards;
        }

        .card-wrapper {
          display: flex;
          flex-shrink: 0;
          padding: 0 5px;
          // height: auto;
          height: 100%;
          align-items: center;
        }

        .card-wrapper:first-of-type {
          padding: 0 5px 0 15px;
        }

        .card-wrapper:last-of-type {
          padding: 0 15px 0 5px;
        }

        /* Card styles with proper border-radius */
        .card {
          align-items: center;
          justify-content: center;
          width: 540px;
          // min-height: 400px;
          // height: 540px;
          padding: 0px;
          background: rgba(110, 76, 225, 0.25);
          backdrop-filter: blur(10px);
          border-radius: 24px;
          color: #f6f2e8;
          border: 2px solid transparent;
          position: relative;
          display: flex;
          flex-direction: column;
          text-align: center;
          z-index: 3;
          background: rgba( 255, 255, 255, 0.20 );
          box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
          backdrop-filter: blur( 4px );
          -webkit-backdrop-filter: blur( 4px );
          border-radius: 10px;
          border: 1px solid rgba( 255, 255, 255, 0.18 );
          transition: border-color 0.3s ease;
        }

        /* Simple border hover effect */
        .card:hover {
          border-color: #03afef;
          box-shadow: 
            0 0 20px rgba(110, 76, 225, 0.3),
            inset 0 0 20px rgba(110, 76, 225, 0.1);
        }

        .card-content {
          position: relative;
          z-index: 2;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
          padding: 20px;
        }

        .card-icon {
          width: 100%;
          height: auto;
          margin-bottom: 10px;
          filter: drop-shadow(0 0 10px rgba(110, 76, 225, 0.3));
          position: relative;
          overflow: hidden;
          border-radius: 16px;
        }

        .card-icon img {
          width: 100%;
          height: auto;
          object-fit: cover;
          border-radius: 16px;
          display: block;
          transform: unset !important;
        }

        .card h2 {
          font-size: 2rem;
          text-shadow: 0 0 8px rgba(255, 255, 255, 0.3);
          color: #fff;
        }

        /* Responsive Design */
        @media (max-width: 1200px) {
          .card {
            width: 480px;
            min-height: 360px;
          }
        }

        @media (max-width: 992px) {
          .card {
            width: 420px;
            min-height: 320px;
            padding: 25px;
            border-radius: 20px;
          }

          .card-content {
            gap: 15px;
            padding: 15px;
          }

          .card-icon {
            margin-bottom: 8px;
            border-radius: 14px;
          }

          .card-icon img {
            border-radius: 14px;
          }

          .horizontal {
            gap: 15px;
          }
        }

        @media (max-width: 768px) {
          .intro2 h1,
          .intro3 h1 {
            font-size: 2.5rem;
            padding: 0 20px;
          }
          
          .intro2 p,
          .intro3 p {
            font-size: 1rem;
            padding: 0 20px;
          }

          .card {
            width: 360px;
            min-height: 280px;
            padding: 20px;
            border-radius: 18px;
          }

          .card h2 {
            font-size: 1.5rem;
          }

          .card-icon {
            border-radius: 12px;
          }

          .card-icon img {
            border-radius: 12px;
          }

          .horizontal {
            gap: 12px;
          }

          .horizontal-scroll-section {
            padding: 150px 0;
          }

          .intro-section,
          .outro-section {
            padding: 0 30px;
          }
        }

        @media (max-width: 576px) {
          .intro2 h1,
          .intro3 h1 {
            font-size: 2rem;
          }

          .card {
            width: 300px;
            min-height: 240px;
            padding: 15px;
            border-radius: 16px;
          }

          .card-content {
            gap: 10px;
            padding: 10px;
          }

          .card h2 {
            font-size: 1.3rem;
          }

          .card-icon {
            border-radius: 10px;
          }

          .card-icon img {
            border-radius: 10px;
          }

          .horizontal {
            gap: 10px;
          }

          .horizontal-scroll-section {
            padding: 120px 0;
          }

          .space-background,
          .space-background2 {
            opacity: 0.2;
          }

          .intro-section,
          .outro-section {
            padding: 0 20px;
          }
        }

        @media (max-width: 400px) {
          .card {
            width: 260px;
            min-height: 220px;
            border-radius: 14px;
          }

          .card h2 {
            font-size: 1.2rem;
          }

          .card-icon {
            border-radius: 8px;
          }

          .card-icon img {
            border-radius: 8px;
          }
        }

        @media (max-height: 600px) {
          .horizontal-scroll-section {
            height: auto;
            min-height: 100vh;
          }

          .horizontal {
            padding: 40px 0;
          }
        }

        @media (hover: none) {
          .horizontal {
            -webkit-overflow-scrolling: touch;
          }
        }
      `}</style>
    </>
  )
}

export default HorizontalScrollSection
