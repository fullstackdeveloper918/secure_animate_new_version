"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AchievementsSection({ achievementCards }) {
    const [achievementsSlide, setAchievementsSlide] = useState(0);
    const containerRef = useRef(null);
    const videoPinRef = useRef(null);
    const sectionsRef = useRef(null);
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 2.0; // 2x speed, change as needed
        }
    }, []);

    useEffect(() => {
        if (!containerRef.current || !videoPinRef.current || !sectionsRef.current) return;

        const ctx = gsap.context(() => {
            // Pin the video container during scroll through the sections container
            ScrollTrigger.create({
                trigger: containerRef.current, // container wrapping video + sections
                start: "top top",
                end: () => "+=" + containerRef.current.offsetHeight,
                pin: videoPinRef.current, // pin the video div only
                pinSpacing: false, // keep spacing for pin element false, so no jump
                scrub: true, // smooth scrubbing, true for animation sync to scroll
            });

            // Optional: Animate sections sliding vertically as user scrolls (smooth)
            gsap.to(sectionsRef.current, {
                yPercent: -20, // move sections up by 20% of their height
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: () => "+=" + containerRef.current.offsetHeight,
                    scrub: true,
                },
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="relative overflow-hidden">
            {/* Video container pinned */}
            <div
                ref={videoPinRef}
                className="absolute top-0 left-0 w-full h-screen "
            >
                <video
                    className="w-full h-full object-cover"
                    ref={videoRef}
                    autoPlay
                    muted
                    loop
                    playsInline
                    src={"/space-earth.mp4"}
                    type="video/mp4"
                />
                <div className="absolute inset-0 bg-black/50" />
            </div>


            {/* Sections container */}
            <div ref={sectionsRef} className="relative z-10">
                {/* Achievements Section */}
                <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
                    <motion.div
                        className="container mx-auto px-6 py-20"
                        initial={{ y: 120, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <motion.h2
                            className="our-service-heading text-white font-semibold"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            Our
                            <br />
                            Services
                        </motion.h2>

                        <div className="relative overflow-hidden">
                            <motion.div
                                className="flex will-change-transform"
                                animate={{ x: `-${achievementsSlide * 25}%` }}
                                transition={{ duration: 0.6, ease: "easeInOut" }}
                            >
                                {achievementCards.map((card, idx) => (
                                    <div key={idx} className="w-1/4 flex-shrink-0 p-3">
                                        <div className="h-full bg-transparent backdrop-blur-sm border border-gray-700 rounded-lg p-6 hover:border-[#00AEEF] transition-all duration-300">
                                            <div className="w-12 h-12 bg-[#00AEEF]/20 rounded-lg flex items-center justify-center mb-4">
                                                {card.icon}
                                            </div>
                                            <h3 className="text-lg font-bold text-white mb-2">{card.title}</h3>
                                            <p className="text-gray-400 text-sm">{card.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </motion.div>

                            {/* Navigation Buttons */}
                            <div className="mt-20">
                                <button
                                    onClick={() => setAchievementsSlide((s) => Math.max(0, s - 1))}
                                    disabled={achievementsSlide === 0}
                                    className="absolute right-20 bottom-0 mt-10 w-10 h-10 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 disabled:opacity-40"
                                    aria-label="Previous achievements slide"
                                >
                                    <ChevronLeft className="w-5 h-5 mx-auto" />
                                </button>
                            </div>
                            <button
                                onClick={() =>
                                    setAchievementsSlide((s) => Math.min(achievementCards.length - 4, s + 1))
                                }
                                disabled={achievementsSlide >= achievementCards.length - 4}
                                className="absolute right-5 bottom-0 mt-10 w-10 h-10 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 disabled:opacity-40"
                                aria-label="Next achievements slide"
                            >
                                <ChevronRight className="w-5 h-5 mx-auto" />
                            </button>
                        </div>
                    </motion.div>
                </section>

                {/* Milestones Reached Section */}
                <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
                    <motion.div
                        className="relative z-10 text-center px-6"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-5xl lg:text-7xl text-white font-bold mb-8">You Arrived Your Destination</h2>
                    </motion.div>
                </section>
            </div>
        </div>
    );
}
