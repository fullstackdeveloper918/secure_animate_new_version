"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

export default function TextScrollAnimation() {
  const containerRef = useRef(null)
  const wordsRef = useRef([])

  const words = ["Technology",
    "Innovation",
    "Software",
    "Startups",
    "Growth",]


  useEffect(() => {
    const container = containerRef.current
    const wordElements = wordsRef.current

    if (!container || wordElements.length === 0) return

    gsap.set(wordElements, {
      opacity: 0,
      y: 100,
      scale: 0.8,
    })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "+=400%",
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    })

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
        index * 0.8,
      )

      if (index < wordElements.length - 1) {
        tl.to(
          word,
          {
            opacity: 1,
            scale: 1,
            duration: 1.5,
            ease: "power2.inOut",
          },
          index * 0.8 + 1.2,
        )
      }
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <section
      ref={containerRef}
      className="h-screen flex items-center justify-center bg-white relative overflow-hidden"
    >
      <div className="text-center">
        {words.map((word, index) => (
          <div
            key={index}
            ref={(el) => {
              if (el) wordsRef.current[index] = el
            }}
            className="flex gap-5 m-5 justify-center"
          >
            <h2 className="text-5xl md:text-8xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-black">
              {word}
            </h2>
          </div>
        ))}
      </div>

      {/* <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-cyan-500 rounded-full blur-3xl"></div>
      </div> */}
    </section>
  )
}