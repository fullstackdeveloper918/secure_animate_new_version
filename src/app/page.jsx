"use client";

import { motion, useScroll, useMotionValue, AnimatePresence } from "framer-motion";
import {
    Shield,
    Lock,
    Eye,
    Users,
    ArrowRight,
    CheckCircle,
    AlertTriangle,
    HelpCircle,
    Globe,
    Headphones,
    Zap,
    Menu,
    Mouse,
    ChevronLeft,
    ChevronRight,
    Mail,
    Phone,
    MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import FooterFour from "@/layouts/footers/footer-four";
import { useState, useRef, useEffect } from "react";
import NavigatingSection from "@/components/NavigatingSection"; // Adjust the import path as needed
import AchievementsSection from "@/components/OurServiceSection"; // Adjust the import path as needed
// import rocketImage from "../../public/images/new--1.png"; // Update with the correct path

export default function HomePage() {
    const [heroAnimationComplete, setHeroAnimationComplete] = useState(false);
    const [currentServiceSlide, setCurrentServiceSlide] = useState(0);
    const [servicesSlide, setServicesSlide] = useState(0);
    const containerRef = useRef(null);
    const rocketRef = useRef(null); // Ref for the rocket
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const pathRef = useRef(null);
    const dotX1 = useMotionValue(0);
    const dotY1 = useMotionValue(0);
    const dotX2 = useMotionValue(0);
    const dotY2 = useMotionValue(0);
    const dotX3 = useMotionValue(0);
    const dotY3 = useMotionValue(0);
    const dotX4 = useMotionValue(0);
    const dotY4 = useMotionValue(0);

    const [totalLen, setTotalLen] = useState(1);
    const dashOffset = useMotionValue(1);

    const servicesOpacity = useMotionValue(1);
    const destinationOpacity = useMotionValue(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setHeroAnimationComplete(true);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (pathRef.current) {
            const len = pathRef.current.getTotalLength();
            setTotalLen(len);
            dashOffset.set(len);
        }
    }, []);

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

    // Services data
    const services = [
        [
            { icon: <Shield className="w-8 h-8" />, title: "Cyber Security", desc: "Advanced threat protection and monitoring" },
            { icon: <Lock className="w-8 h-8" />, title: "Data Protection", desc: "Secure data management and encryption" },
            { icon: <Eye className="w-8 h-8" />, title: "24/7 Monitoring", desc: "Round-the-clock system surveillance" },
            { icon: <Users className="w-8 h-8" />, title: "Expert Consulting", desc: "Professional security guidance" },
        ],
        [
            { icon: <Globe className="w-8 h-8" />, title: "Network Security", desc: "Infrastructure protection solutions" },
            { icon: <Zap className="w-8 h-8" />, title: "Incident Response", desc: "Rapid threat mitigation services" },
            { icon: <CheckCircle className="w-8 h-8" />, title: "Compliance", desc: "Regulatory compliance management" },
            { icon: <AlertTriangle className="w-8 h-8" />, title: "Risk Assessment", desc: "Comprehensive security auditing" },
        ],
    ];

    const serviceCards = [
        { icon: <Shield className="w-6 h-6 text-[#00AEEF]" />, title: "Cyber Security", desc: "Advanced threat protection and monitoring" },
        { icon: <Lock className="w-6 h-6 text-[#00AEEF]" />, title: "Data Protection", desc: "Secure data management and encryption" },
        { icon: <Eye className="w-6 h-6 text-[#00AEEF]" />, title: "24/7 Monitoring", desc: "Round-the-clock surveillance and alerts" },
        { icon: <Users className="w-6 h-6 text-[#00AEEF]" />, title: "Expert Consulting", desc: "Professional security guidance" },
        { icon: <Globe className="w-6 h-6 text-[#00AEEF]" />, title: "Network Security", desc: "Infrastructure protection solutions" },
        { icon: <Zap className="w-6 h-6 text-[#00AEEF]" />, title: "Incident Response", desc: "Rapid threat mitigation" },
        { icon: <CheckCircle className="w-6 h-6 text-[#00AEEF]" />, title: "Compliance", desc: "Regulatory compliance management" },
        { icon: <AlertTriangle className="w-6 h-6 text-[#00AEEF]" />, title: "Risk Assessment", desc: "Comprehensive security auditing" },
        { icon: <Headphones className="w-6 h-6 text-[#00AEEF]" />, title: "24/7 Support", desc: "Always-on assistance" },
        { icon: <HelpCircle className="w-6 h-6 text-[#00AEEF]" />, title: "Security Training", desc: "Employee awareness programs" },
    ];

    // Rocket scroll effect
    useEffect(() => {
        const handleScroll = () => {
            if (rocketRef.current) {
                const scrollPosition = window.scrollY;
                const windowHeight = window.innerHeight;
                const maxScroll = document.documentElement.scrollHeight - windowHeight;
                const moveDistance = (scrollPosition / maxScroll) * -200; // Adjust multiplier for speed
                rocketRef.current.style.transform = `translateX(${moveDistance}vw) translateY(-50%)`;
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="min-h-screen bg-black text-white overflow-x-hidden" style={{ fontFamily: "Arial, sans-serif" }}>
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center main-secure-banner">
                <div className="absolute inset-[-82px]">
                    {/* Background video */}
                    <video
                        className="w-full h-full object-cover"
                        src="/hero.mp4"   // replace with your video path
                        autoPlay
                        loop
                        muted
                        playsInline
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/50" />
                </div>

                <div className="relative z-10 w-full">
                    <div className="container mx-auto px-6">
                        <div className="grid lg:grid-cols-2 gap-12 items-end min-h-screen">
                            <div className="main-head-banner-box">
                                <AnimatePresence>
                                    {heroAnimationComplete && (
                                         <motion.h1
                                                              initial={{ y: 100, opacity: 0 }}
                                                              animate={{ y: 0, opacity: 1 }}
                                                              transition={{ duration: 1, ease: "easeOut" }}
                                                              className="main-banner-heading text-white font-semibold mb-0"
                                                            >
                                                              Mission<br />
                                                              Control For Your<br />
                                                              <span className="">Digital Galaxy</span>
                                                            </motion.h1>
                                    )}
                                </AnimatePresence>
                            </div>

                            <div className="space-y-8">
                                <AnimatePresence>
                                    {heroAnimationComplete && (
                                        <motion.div
                                            initial={{ y: 300, opacity: 0 }}
                                            animate={{ y: 200, opacity: 1 }}
                                            transition={{ duration: 0.5, ease: "easeOut" }}
                                            className="space-y-6 main-banner-para-box"
                                        >
                                            <p className="main-banner-paraTxt text-white mb-0">
                                                AI innovation, full-stack development, SEO propulsion, cyber-defense shields, and friction-free payment protection—seamlessly orbiting under one command center: Secure365
                                            </p>
                                            <Button className="bg-[#00AEEF] hover:bg-[#0099d4] text-white start-mission-btn">
                                                Start Your Mission
                                            </Button>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                        <div className="absolute z-10 scroll-down-button">
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="flex items-center text-white/70"
                    >
                        {/* <Mouse className="w-6 h-6 mb-2" /> */}
                        <img src="/Scroll-down-icon.svg" alt="scroll-down-icon" className="me-2" />
                        <div className="text-sm text-white font-normal">Scroll Down</div>
                    </motion.div>
                </div>
                    </div>
                </div>
            </section>

            <NavigatingSection rocketRef={rocketRef} />
            {/* Navigating Section - Exact Figma Layout */}
            {/* <section className="relative py-32 overflow-hidden">
                <div className="absolute inset-0">
                    <div
                        className="w-full h-full bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: `url('/images/space-bg-1.png')` }}
                    />
                    <div className="absolute inset-0 bg-black/40" />
                </div>

                <div className="relative z-10">
                    <div className="container mx-auto px-6">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-4xl lg:text-6xl xl:text-7xl text-white font-bold leading-tight">
                                    Navigating<br />
                                    Your Business<br />
                                    Through<br />
                                    the Stars... and<br />
                                    <span className="text-[#00AEEF]">Safeguarding</span>
                                </h2>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                viewport={{ once: true }}
                                className="space-y-8"
                            >
                                <p className="text-lg lg:text-xl text-gray-300 leading-relaxed">
                                    In the infinite digital cosmos, your business deserves more than basic protection.
                                    Our comprehensive cybersecurity solutions act as your digital navigation system,
                                    guiding you safely through cyber threats while maintaining optimal performance
                                    and reliability across all your operations.
                                </p>
                                <Button className="bg-[#00AEEF] hover:bg-[#0099d4] text-white px-10 py-4 text-lg font-semibold">
                                    Learn More
                                </Button>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* But Why Secure365 Section */}
            <section className="relative py-32 overflow-hidden" ref={containerRef}>
                <div className="absolute inset-0">
                    <div
                        className="w-full h-full bg-cover bg-center bg-no-repeat opacity-30"
                        style={{ backgroundImage: `url('/images/space-bg-1.png')` }}
                    />
                </div>

                <div className="relative z-10 container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-20"
                    >
                        <h2 className="text-5xl lg:text-8xl text-white font-bold">But, Why Secure365?</h2>
                    </motion.div>

                    <div className="relative min-h-[1300px]">
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
                            <motion.g style={{ x: dotX1, y: dotY1 }}>
                                <image href="/images/Star 5.png" width="40" height="40" x={-20} y={-20} filter="url(#glow)" />
                            </motion.g>
                            <motion.g style={{ x: dotX2, y: dotY2 }}>
                                <image href="/images/Star 5.png" width="40" height="40" x={-20} y={-20} filter="url(#glow)" />
                            </motion.g>
                            <motion.g style={{ x: dotX3, y: dotY3 }}>
                                <image href="/images/Star 5.png" width="40" height="40" x={-20} y={-20} filter="url(#glow)" />
                            </motion.g>
                            <motion.g style={{ x: dotX4, y: dotY4 }}>
                                <image href="/images/Star 5.png" width="40" height="40" x={-20} y={-20} filter="url(#glow)" />
                            </motion.g>
                        </svg>

                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            viewport={{ once: true }}
                            className="absolute flex gap-20 top-10 right-20 max-w-full"
                        >
                            <div className="relative">
                                <div className="absolute -top-4 -right-8 text-[#00AEEF] text-2xl">✦</div>
                                <div className="absolute -bottom-4 -left-4 text-[#00AEEF] text-lg">✦</div>
                                <div className="text-6xl lg:text-8xl font-bold text-[#00AEEF] mb-4">3200+</div>
                                <div className="text-2xl lg:text-3xl text-white mb-6">Projects Delivered</div>
                            </div>
                            <div>
                                <p className="text-gray-400 leading-relaxed text-lg mb-6 max-w-md">
                                    Successfully completed over 3200 cybersecurity projects across various industries,
                                    establishing ourselves as a trusted partner in digital protection and innovation.
                                </p>
                                <Button className="bg-[#00AEEF] hover:bg-[#0099d4] text-white px-8 py-3">Get Started</Button>
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
                                <div className="text-6xl lg:text-8xl font-bold text-[#00AEEF] mb-4">100+</div>
                                <div className="text-xl lg:text-2xl text-white">Experts</div>
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
                                <div className="text-6xl lg:text-8xl font-bold text-[#00AEEF] mb-4">13+</div>
                                <div className="text-xl lg:text-2xl text-white">Years & Counting</div>
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
                                <div className="text-6xl lg:text-8xl font-bold text-[#00AEEF] mb-4">32+</div>
                                <div className="text-xl lg:text-2xl text-white">Countries Served</div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* What Make Us Different Section */}
            <section className="relative py-32 overflow-hidden">
                <div className="absolute inset-0">
                    <div
                        className="w-full h-full bg-cover bg-center bg-no-repeat opacity-20"
                        style={{ backgroundImage: `url('/images/space-bg-1.png')` }}
                    />
                </div>

                <div className="relative z-10 container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-5xl lg:text-6xl font-bold mb-8 text-white leading-tight">
                                What Make<br />
                                Us Different?
                            </h2>
                            <Button className="bg-[#00AEEF] hover:bg-[#0099d4] text-white px-8 py-3 text-base">About Us</Button>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <div className="flex items-start space-x-4 p-6 bg-gray-900/30 rounded-lg border border-gray-800 hover:border-[#00AEEF] transition-colors">
                                <div className="w-12 h-12 bg-[#00AEEF]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Shield className="w-6 h-6 text-[#00AEEF]" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Community Security</h3>
                                    <p className="text-gray-400 leading-relaxed">
                                        Building secure digital communities through collaborative threat intelligence
                                        and shared security protocols that protect entire ecosystems.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4 p-6 bg-gray-900/30 rounded-lg border border-gray-800 hover:border-[#00AEEF] transition-colors">
                                <div className="w-12 h-12 bg-[#00AEEF]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Lock className="w-6 h-6 text-[#00AEEF]" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Comprehensive Protection</h3>
                                    <p className="text-gray-400 leading-relaxed">
                                        End-to-end security solutions covering all aspects of your digital infrastructure
                                        and business operations with advanced monitoring capabilities.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4 p-6 bg-gray-900/30 rounded-lg border border-gray-800 hover:border-[#00AEEF] transition-colors">
                                <div className="w-12 h-12 bg-[#00AEEF]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Headphones className="w-6 h-6 text-[#00AEEF]" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">24/7 Support</h3>
                                    <p className="text-gray-400 leading-relaxed">
                                        Round-the-clock monitoring and support from our expert team, ensuring
                                        continuous protection and rapid response to any security incidents.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4 p-6 bg-gray-900/30 rounded-lg border border-gray-800 hover:border-[#00AEEF] transition-colors">
                                <div className="w-12 h-12 bg-[#00AEEF]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Zap className="w-6 h-6 text-[#00AEEF]" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">Advanced Technology</h3>
                                    <p className="text-gray-400 leading-relaxed">
                                        Cutting-edge AI and machine learning technologies for proactive threat
                                        detection and automated response systems that stay ahead of cyber threats.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Our Services Section */}
            {/* <section className="relative min-h-screen flex items-center overflow-hidden">
                <div className="absolute inset-0">
                    <div
                        className="w-full h-full bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: `url('/images/earth-night.png')` }}
                    />
                    <div className="absolute inset-0 bg-black/50" />
                </div>

                <motion.div
                    className="relative z-10 w-full py-20"
                    style={{ opacity: servicesOpacity }}
                    initial={{ y: 120, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <div className="container mx-auto px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="mb-10"
                        >
                            <h2 className="text-5xl lg:text-6xl text-white font-bold">Our<br />Services</h2>
                        </motion.div>

                        <div className="">
                            <motion.div
                                className="flex will-change-transform"
                                animate={{ x: `-${servicesSlide * 25}%` }}
                                transition={{ duration: 0.6, ease: "easeInOut" }}
                            >
                                {serviceCards.map((card, idx) => (
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

                            <button
                                onClick={() => setServicesSlide((s) => Math.max(0, s - 1))}
                                disabled={servicesSlide === 0}
                                className="absolute right-20 bottom-0 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 disabled:opacity-40"
                            >
                                <ChevronLeft className="w-5 h-5 mx-auto" />
                            </button>
                            <button
                                onClick={() => setServicesSlide((s) => Math.min(6, s + 1))}
                                disabled={servicesSlide === 6}
                                className="absolute right-5 bottom-0 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 disabled:opacity-40"
                            >
                                <ChevronRight className="w-5 h-5 mx-auto" />
                            </button>
                        </div>
                    </div>
                </motion.div>
            </section>

            <section className="relative min-h-screen flex items-center overflow-hidden">
                <div className="absolute inset-0">
                    <div
                        className="w-full h-full bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: `url('/images/earth-night.png')` }}
                    />
                    <div className="absolute inset-0 bg-black/50" />
                </div>
                <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                >
                    <div className="text-center px-6">
                        <h2 className="text-5xl lg:text-7xl text-white font-bold mb-8">
                            You Arrived Your Destination
                        </h2>
                    </div>
                </motion.div>
            </section> */}

            <AchievementsSection achievementCards={serviceCards} />

            {/* Contact Us Section */}
            <section className="relative py-32 bg-gray-900" style={{ float: "left", width: "100%" }}>
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-5xl lg:text-6xl font-bold mb-6 text-white">
                            Want A Free <span className="text-[#00AEEF]">Consultation?</span>
                        </h2>
                        <p className="text-xl text-gray-400 mb-8">Get in touch with our team of experts</p>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-[#00AEEF]/20 rounded-lg flex items-center justify-center">
                                    <Mail className="w-6 h-6 text-[#00AEEF]" />
                                </div>
                                <div>
                                    <h3 className="text-xl text-white font-bold">Email Us</h3>
                                    <p className="text-gray-400">contact@secure365.com</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-[#00AEEF]/20 rounded-lg flex items-center justify-center">
                                    <Phone className="w-6 h-6 text-[#00AEEF]" />
                                </div>
                                <div>
                                    <h3 className="text-xl text-white font-bold">Call Us</h3>
                                    <p className="text-gray-400">+1 (555) 123-4567</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-[#00AEEF]/20 rounded-lg flex items-center justify-center">
                                    <MapPin className="w-6 h-6 text-[#00AEEF]" />
                                </div>
                                <div>
                                    <h3 className="text-xl text-white font-bold">Visit Us</h3>
                                    <p className="text-gray-400">123 Security Street, Cyber City</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <form className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <input
                                        type="text"
                                        placeholder="First Name"
                                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-[#00AEEF] focus:outline-none"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Last Name"
                                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-[#00AEEF] focus:outline-none"
                                    />
                                </div>
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-[#00AEEF] focus:outline-none"
                                />
                                <textarea
                                    placeholder="Your Message"
                                    rows={4}
                                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-[#00AEEF] focus:outline-none"
                                ></textarea>
                                <Button className="w-full bg-[#00AEEF] hover:bg-[#0099d4] text-white py-3">Send Message</Button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>

            <FooterFour />
        </div>
    );
}