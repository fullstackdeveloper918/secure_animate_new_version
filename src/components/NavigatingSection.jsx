"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { Button } from "./ui/button";

gsap.registerPlugin(ScrollTrigger);

const NavigatingSection = ({ serviceList }) => {
    const sectionRef = useRef(null);
    const rocketRef = useRef(null);
    const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });

    // Function to get screen and viewport size
    const getScreenSize = () => {
        const screenWidth = window.screen.width;
        const screenHeight = window.screen.height;
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        console.log("Screen size:", screenWidth + "x" + screenHeight);
        console.log("Viewport size:", viewportWidth + "x" + viewportHeight);

        setScreenSize({ width: viewportWidth, height: viewportHeight });
    };

    useEffect(() => {
        // Get screen size on mount
        getScreenSize();

        // Update on resize
        window.addEventListener("resize", getScreenSize);
        return () => window.removeEventListener("resize", getScreenSize);
    }, []);

    useEffect(() => {
        const section = sectionRef.current;
        const rocket = rocketRef.current;

        if (!section || !rocket) return;

        // Adjust animation based on screen width
        const xStart = screenSize.width > 1024 ? 250 : 150;
        const xEnd = screenSize.width > 1024 ? -200 : -150;
        const yEnd = screenSize.height > 800 ? -100 : -50;

        // Set initial rocket position offscreen
        gsap.set(rocket, { xPercent: xStart, yPercent: 0 });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: "top top",
                end: "bottom top",
                scrub: true,
                pin: true,
                anticipatePin: 1,
                // markers: true,
            },
        });

        // Animate rocket moving across screen
        tl.to(rocket, {
            xPercent: xEnd,
            yPercent: yEnd,
            ease: "none",
        });

        return () => {
            if (tl.scrollTrigger) tl.scrollTrigger.kill();
            tl.kill();
        };
    }, [screenSize]);

    return (
        <section
            ref={sectionRef}
            className="relative py-32 overflow-hidden h-[100vh] navigate-second-sec"
            style={{ backgroundColor: "#000" }}
        >
            {/* Background */}
            <div className="absolute inset-0">
                <div
                    className="w-full h-full bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url('/images/space-bg-1.png')` }}
                />
                <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-end relative">
                    <div>
                        <h2 className="text-white font-semibold navigate-heading">
                            {/* Navigating
                            <br />
                            Your Business
                            <br />
                            Through
                            <br />
                            the Stars... and
                            <br />
                            <span className="">Safeguarding</span> */}
                            {serviceList.home_page_challenge_section_challenge}
                        </h2>
                    </div>

                    <div>
                        {/* Rocket image */}
                        <div className="relative h-52 w-full overflow-visible">
                            <Image
                                ref={rocketRef}
                                src="/images/rocket/R3.png"
                                alt="Rocket"
                                width={700}
                                height={700}
                                className="absolute top-20 -translate-y-1/2"
                                style={{ right: 0 }}
                            />
                        </div>

                        {/* Text paragraph */}
                        <div className="space-y-8 relative">
                            <p
                                className="text-lg lg:text-xl text-gray-300 leading-relaxed mb-0"
                                id="content-responsive"
                            >
                                {serviceList.home_page_challenge_section_paragraph}
                                {/* Think of Secure365 as your interstellar co-pilot, guiding you
                                safely through the ever-expanding cosmos of modern technology.
                                We blend visionary web development with rock-solid IT services,
                                cloud solutions, and cybersecurity—ensuring that no matter which
                                galaxy (or market) you're aiming for, you'll arrive unscathed.
                                <br />
                                <br />
                                Our mission? Simple: to help your brand thrive and remain
                                secure, from initial launch to the far reaches of tomorrow. */}
                            </p>
                            <Button className="bg-[#00AEEF] hover:bg-[#0099d4] text-white navigate-contact-btn">
                                Contact Us
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NavigatingSection;
