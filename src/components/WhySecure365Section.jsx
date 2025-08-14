"use client";

import { motion, useScroll, useMotionValue } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function WhySecure365Section({ containerRef }) {
    const pathRef = useRef(null);
    const rocketRef = useRef(null);
    const [totalLen, setTotalLen] = useState(1);
    const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });
    const dashOffset = useMotionValue(1);
    const dotX1 = useMotionValue(0);
    const dotY1 = useMotionValue(0);
    const dotX2 = useMotionValue(0);
    const dotY2 = useMotionValue(0);
    const dotX3 = useMotionValue(0);
    const dotY3 = useMotionValue(0);
    const dotX4 = useMotionValue(0);
    const dotY4 = useMotionValue(0);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    // Get screen size for responsive rocket animation
    const getScreenSize = () => {
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        setScreenSize({ width: viewportWidth, height: viewportHeight });
    };

    useEffect(() => {
        getScreenSize();
        window.addEventListener("resize", getScreenSize);
        return () => window.removeEventListener("resize", getScreenSize);
    }, []);

    // Star animation path length setup
    useEffect(() => {
        if (pathRef.current) {
            const len = pathRef.current.getTotalLength();
            setTotalLen(len);
            dashOffset.set(len);
        }
    }, []);

    // Star animation logic
    useEffect(() => {
        const unsub = scrollYProgress.on("change", (v) => {
            if (!pathRef.current) return;
            const total = pathRef.current.getTotalLength();
            const base = v * (total + 700) - 400;
            const clampLen = (len) => Math.max(0, Math.min(total, len));

            const stop1 = total * 0;
            const stop2 = total * 0.35;
            const stop3 = total * 0.65;
            const stop4 = total * 1;

            const revealLen1 = clampLen(Math.min(base, stop1));
            const p1 = pathRef.current.getPointAtLength(revealLen1);
            dotX1.set(p1.x);
            dotY1.set(p1.y);

            const revealLen2 = clampLen(Math.min(base, stop2));
            const p2 = pathRef.current.getPointAtLength(revealLen2);
            dotX2.set(p2.x);
            dotY2.set(p2.y);

            const revealLen3 = clampLen(Math.min(base, stop3));
            const p3 = pathRef.current.getPointAtLength(revealLen3);
            dotX3.set(p3.x);
            dotY3.set(p3.y);

            const revealLen4 = clampLen(Math.min(base, stop4));
            const p4 = pathRef.current.getPointAtLength(revealLen4);
            dotX4.set(p4.x);
            dotY4.set(p4.y);

            const maxReveal = Math.max(revealLen1, revealLen2, revealLen3, revealLen4);
            dashOffset.set(Math.max(0, total - maxReveal));
        });
        return () => unsub();
    }, [
        scrollYProgress,
        dotX1,
        dotY1,
        dotX2,
        dotY2,
        dotX3,
        dotY3,
        dotX4,
        dotY4,
        dashOffset,
    ]);

    // Rocket animation logic
    useEffect(() => {
        const rocket = rocketRef.current;
        if (!rocket || !containerRef.current) return;

        // Define start and end coordinates for 500px diagonal movement
        const startX = -500; // Top-left x
        const startY = 410; // Top-left y
        const endX = 4000; // 400px right
        const endY = 3000; // 300px down (√(400² + 300²) ≈ 500px)

        // Set initial rocket position
        gsap.set(rocket, {
            x: startX,
            y: startY,
            scale: screenSize.width > 1024 ? 1 : 0.7, // Responsive scale
            autoAlpha: 0, // Initially hidden
        });

        // GSAP animation for rocket
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "bottom top",
                scrub: true,
                onUpdate: (self) => {
                    const progress = self.progress;
                    if (progress < 0.5) {
                        // Star animation phase (first half of scroll)
                        gsap.set(rocket, { autoAlpha: 0 }); // Hide rocket
                    } else {
                        // Rocket animation phase (second half of scroll)
                        const rocketProgress = (progress - 0.5) * 2; // Normalize to 0-1
                        gsap.set(rocket, {
                            x: startX + (endX - startX) * rocketProgress,
                            y: startY + (endY - startY) * rocketProgress,
                            autoAlpha: 1, // Show rocket
                            rotation: 45 * rocketProgress, // Optional rotation for effect
                        });
                    }
                },
            },
        });

        return () => {
            if (tl.scrollTrigger) tl.scrollTrigger.kill();
            tl.kill();
        };
    }, [screenSize]);

    return (
        <section className="relative overflow-hidden rotation-timeline-sec" ref={containerRef}>
            <div className="absolute inset-0">
                <div
                    className="w-full h-full bg-cover bg-center bg-no-repeat opacity-30"
                    style={{ backgroundImage: `url('/images/space-bg-1.png')` }}
                />
            </div>

            <div className="relative z-10 px-6">
                {/* <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className=" w-full border"
                    style={{ whiteSpace: 'nowrap' }}
                > */}
                {/* <h2 className="animate-marquee inline-block text-6xl lg:text-9xl text-white font-bold " id="but-why-responsive" style={{ whiteSpace: 'nowrap' }} >But, Why Secure365?</h2> */}
                {/* </motion.div> */}

                <div className="overflow-hidden whitespace-nowrap">
                    <div className="inline-block text-6xl lg:text-9xl  animate-marquee">
                        But, Why Secure365? But, Why Secure365?&nbsp;&nbsp;&nbsp;&nbsp;But, Why Secure365?&nbsp;&nbsp;&nbsp;&nbsp;But, Why Secure365?&nbsp;&nbsp;&nbsp;&nbsp;But, Why Secure365? But, Why Secure365?&nbsp;&nbsp;&nbsp;&nbsp;But, Why Secure365?&nbsp;&nbsp;&nbsp;&nbsp;But, Why Secure365?&nbsp;&nbsp;&nbsp;&nbsp;But, Why Secure365? But, Why Secure365?&nbsp;&nbsp;&nbsp;&nbsp;But, Why Secure365?&nbsp;&nbsp;&nbsp;&nbsp;But, Why Secure365?&nbsp;&nbsp;&nbsp;&nbsp;But, Why Secure365? But, Why Secure365?&nbsp;&nbsp;&nbsp;&nbsp;But, Why Secure365?&nbsp;&nbsp;&nbsp;&nbsp;But, Why Secure365?&nbsp;&nbsp;&nbsp;&nbsp;But, Why Secure365? But, Why Secure365?&nbsp;&nbsp;&nbsp;&nbsp;But, Why Secure365?&nbsp;&nbsp;&nbsp;&nbsp;But, Why Secure365?&nbsp;&nbsp;&nbsp;&nbsp;But, Why Secure365? But, Why Secure365?&nbsp;&nbsp;&nbsp;&nbsp;But, Why Secure365?&nbsp;&nbsp;&nbsp;&nbsp;But, Why Secure365?&nbsp;&nbsp;&nbsp;&nbsp;But, Why Secure365? But, Why Secure365?&nbsp;&nbsp;&nbsp;&nbsp;But, Why Secure365?&nbsp;&nbsp;&nbsp;&nbsp;But, Why Secure365?&nbsp;&nbsp;&nbsp;&nbsp;But, Why Secure365? But, Why Secure365?&nbsp;&nbsp;&nbsp;&nbsp;But, Why Secure365?&nbsp;&nbsp;&nbsp;&nbsp;But, Why Secure365?&nbsp;&nbsp;&nbsp;&nbsp;But, Why Secure365? But, Why Secure365?&nbsp;&nbsp;&nbsp;&nbsp;But, Why Secure365?&nbsp;&nbsp;&nbsp;&nbsp;But, Why Secure365?&nbsp;&nbsp;&nbsp;&nbsp;But, Why Secure365?
                    </div>


                </div>

                <div className="relative min-h-[1300px] timeline-inner-box">
                    <svg
                        className="absolute inset-0 w-full h-full pointer-events-none"
                        viewBox="0 0 1200 1300"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <defs>
                            <mask id="revealMask">
                                <motion.path
                                    ref={pathRef}
                                    d="M150 50 C 150 500, 520 530, 540 600 C 800 800, 1000 1000, 300 1200"
                                    stroke="white"
                                    strokeWidth="6"
                                    strokeDasharray={totalLen}
                                    strokeDashoffset={dashOffset}
                                    strokeLinecap="round"
                                />
                            </mask>
                            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                                <feGaussianBlur stdDeviation="6" result="blur" />
                                <feMerge>
                                    <feMergeNode in="blur" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                        </defs>
                        <path
                            d="M150 50 C 150 500, 520 530, 540 600 C 800 800, 1000 1000, 300 1200"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeDasharray="10 12"
                            mask="url(#revealMask)"
                            opacity="0.9"
                        />
                        <motion.g
                            style={{ x: dotX1, y: dotY1 }}
                            animate={{ rotate: 360 }}  // Apply 360 degree rotation
                            transition={{ duration: 5, repeat: Infinity, ease: "linear" }} // 5s for one full rotation
                        >
                            <image
                                href="/images/Star 5.png"
                                width="40"
                                height="40"
                                x={-20}
                                y={-20}
                                filter="url(#glow)"
                            />
                        </motion.g>

                        <motion.g
                            style={{ x: dotX2, y: dotY2 }}
                            animate={{ rotate: 360 }}  // Apply 360 degree rotation
                            transition={{ duration: 5, repeat: Infinity, ease: "linear" }} // 5s for one full rotation
                        >
                            <image
                                href="/images/Star 5.png"
                                width="40"
                                height="40"
                                x={-20}
                                y={-20}
                                filter="url(#glow)"
                            />
                        </motion.g>

                        <motion.g
                            style={{ x: dotX3, y: dotY3 }}
                            animate={{ rotate: 360 }}  // Apply 360 degree rotation
                            transition={{ duration: 5, repeat: Infinity, ease: "linear" }} // 5s for one full rotation
                        >
                            <image
                                href="/images/Star 5.png"
                                width="40"
                                height="40"
                                x={-20}
                                y={-20}
                                filter="url(#glow)"
                            />
                        </motion.g>

                        <motion.g
                            style={{ x: dotX4, y: dotY4 }}
                            animate={{ rotate: 360 }}  // Apply 360 degree rotation
                            transition={{ duration: 5, repeat: Infinity, ease: "linear" }} // 5s for one full rotation
                        >
                            <image
                                href="/images/Star 5.png"
                                width="40"
                                height="40"
                                x={-20}
                                y={-20}
                                filter="url(#glow)"
                            />
                        </motion.g>

                    </svg>

                    {/* Rocket image */}
                    <Image
                        ref={rocketRef}
                        src="/images/rocket/R1.png"
                        alt="Rocket"
                        width={900}
                        height={900}
                        className="absolute z-9999"
                        style={{ visibility: "hidden" }} // Initially hidden, controlled by GSAP
                    />

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="absolute flex top-0 max-w-full first-project-del-box"
                    >
                        <div className="relative h-100">
                            <div className="absolute -top-4 -right-8 text-[#00AEEF] text-2xl">✦</div>
                            <div className="absolute -bottom-4 -left-4 text-[#00AEEF] text-lg">✦</div>
                            <div className="num-rotate-head font-semibold text-[#00AEEF]">3200+</div>
                            <div className="num-rotate-para text-white mb-0">Projects Delivered</div>
                        </div>
                        <div className="project-del-contBox">
                            <p className="text-white">
                                At Secure 365, we understand that navigating the digital world can be overwhelming. That's why we've designed our services to be a one-stop solution, covering everything from cloud management and IT support to marketing and cybersecurity.
                                <br /><br />
                                Our approach combines expertise, proactive management, and industry-leading technology to deliver seamless experiences, minimize risk, and maximize efficiency.
                            </p>
                            <Button className="bg-[#00AEEF] hover:bg-[#0099d4] text-white primary-btn-style">Discuss Your Requirement</Button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="absolute top-[500px] left-32"
                    >
                        <div className="relative text-left">
                            <div className="absolute -top-6 -left-8 text-[#00AEEF] text-xl">✦</div>
                            <div className="absolute -bottom-2 right-4 text-[#00AEEF] text-lg">✦</div>
                            <div className="num-rotate-head font-semibold text-[#00AEEF]">100+</div>
                            <div className="num-rotate-para text-white mb-0">Experts</div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="absolute top-[800px] right-40 transform -translate-x-1/2"
                    >
                        <div className="relative text-left">
                            <div className="absolute -top-4 -right-12 text-[#00AEEF] text-2xl">✦</div>
                            <div className="absolute -bottom-6 -left-8 text-[#00AEEF] text-lg">✦</div>
                            <div className="num-rotate-head font-semibold text-[#00AEEF]">13+</div>
                            <div className="num-rotate-para text-white mb-0">Years & Counting</div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="absolute bottom-0 left-32 transform -translate-x-1/2"
                    >
                        <div className="relative text-left">
                            <div className="absolute -top-2 right-8 text-[#00AEEF] text-xl">✦</div>
                            <div className="absolute -bottom-4 -right-4 text-[#00AEEF] text-lg">✦</div>
                            <div className="num-rotate-head font-semibold text-[#00AEEF]">32+</div>
                            <div className="num-rotate-para text-white mb-0">Countries Served</div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}