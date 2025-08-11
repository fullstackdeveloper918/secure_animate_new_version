import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { Button } from './ui/button';

gsap.registerPlugin(ScrollTrigger);

const NavigatingSection = () => {
    const sectionRef = useRef(null);
    const rocketRef = useRef(null);

    useEffect(() => {
        const section = sectionRef.current;
        const rocket = rocketRef.current;

        if (!section || !rocket) return;

        // Set initial rocket position offscreen right and bottom (for example)
        gsap.set(rocket, { xPercent: 100, yPercent: 0 });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: 'top top',
                end: 'bottom top',
                scrub: true,
                pin: true,
                anticipatePin: 1,
                // markers: true,
            },
        });

        // Animate rocket moving from right to left and bottom to top
        tl.to(rocket, {
            xPercent: -200,  // from right offscreen to left offscreen
            yPercent: -100,   // move up by 50% of its height — adjust as needed
            ease: 'none',
        });

        return () => {
            if (tl.scrollTrigger) tl.scrollTrigger.kill();
            tl.kill();
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative py-32 overflow-hidden h-[100vh]" // height for scrolling
            style={{ backgroundColor: '#000' }} // fallback background color
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
                <div className="grid lg:grid-cols-2 gap-12 items-center relative">
                    <div>
                        <h2 className="text-4xl lg:text-6xl xl:text-7xl text-white font-bold leading-tight">
                            Navigating
                            <br />
                            Your Business
                            <br />
                            Through
                            <br />
                            the Stars... and
                            <br />
                            <span className="text-[#00AEEF]">Safeguarding</span>
                        </h2>
                    </div>

                    <div className="">

                        {/* Rocket image, positioned absolute inside grid */}
                        <div className="relative h-52 w-full overflow-visible">
                            <Image
                                ref={rocketRef}
                                src="/images/rocket/R3.png"
                                alt="Rocket"
                                width={700}
                                height={600}
                                className="absolute top-20 -translate-y-1/2"
                                style={{ right: 0 }}
                            />
                        </div>

                        {/* Text paragraph below */}
                        <div className="space-y-8 relative mb-20">
                            <p className="text-lg lg:text-xl text-gray-300 leading-relaxed">
                                In the infinite digital cosmos, your business deserves more than basic protection.
                                Our comprehensive cybersecurity solutions act as your digital navigation system,
                                guiding you safely through cyber threats while maintaining optimal performance
                                and reliability across all your operations.
                            </p>
                            <Button className="bg-[#00AEEF] hover:bg-[#0099d4] text-white px-10 py-4 text-lg font-semibold">
                                Learn More
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NavigatingSection;
