"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Card data
const cards = [
  {
    id: 1,
    title: "1. Enhanced Security",
    description:
      "We create and tell stories that connect with people and convey your brand's message in a clear, authentic way. Our creative, artistic thinkers immerse into the DNA of your brand to conceptualize and shape visual content that achieves your objectives and resonates within your target audience.",
    listItems: [
      "Data Encryption",
      "Multi-Factor Authentication (MFA)",
      "Real-Time Threat Detection",
      "Regular Security Audits",
    ],
    bgImage: "/Astro1.jpg?height=450&width=1300",
  },
  {
    id: 2,
    title: "2. Scalability & Flexibility",
    description:
      "We create and tell stories that connect with people and convey your brand's message in a clear, authentic way. Our creative, artistic thinkers immerse into the DNA of your brand to conceptualize and shape visual content that achieves your objectives and resonates within your target audience.",
    listItems: [
      "Data Encryption",
      "Multi-Factor Authentication (MFA)",
      "Real-Time Threat Detection",
      "Regular Security Audits",
    ],
    bgImage: "/Astro2.jpg?height=450&width=1300",
  },
  {
    id: 3,
    title: "3. Improved Performance",
    description:
      "We create and tell stories that connect with people and convey your brand's message in a clear, authentic way. Our creative, artistic thinkers immerse into the DNA of your brand to conceptualize and shape visual content that achieves your objectives and resonates within your target audience.",
    listItems: [
      "Data Encryption",
      "Multi-Factor Authentication (MFA)",
      "Real-Time Threat Detection",
      "Regular Security Audits",
    ],
    bgImage: "/Astro3.jpg?height=450&width=1300",
  },
];

export default function CardStackingSection() {
  const cardsRef = useRef([]);
  const headerRef = useRef(null);

  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Clear any existing ScrollTriggers to prevent duplicates on hot reload
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    const stickDistance = 0;

    // Create ScrollTrigger for pinning the header
    ScrollTrigger.create({
      trigger: headerRef.current,
      start: "top top+=100", // Matches Tailwind's top-5 (1.25rem)
      endTrigger: cardsRef.current[cardsRef.current.length - 1],
      end: "bottom+=300",
      pin: true,
      pinSpacing: false,
    });

    // Create ScrollTrigger for first and last card
    const firstCardST = ScrollTrigger.create({
      trigger: cardsRef.current[0],
      start: "center center",
    });

    const lastCardST = ScrollTrigger.create({
      trigger: cardsRef.current[cardsRef.current.length - 1],
      start: "top top",
    });

    // Create animations for each card
    // const delayPerCard = 1.1; // Adjust this to control the delay gap between each card

    cardsRef.current.forEach((card, index) => {
      if (!card) return;

      const scale = 1 - (cardsRef.current.length - index) * 0.025;

      const scaleDown = gsap.to(card, {
        scale: scale,
        // delay: index * delayPerCard, // delay added based on index
        transformOrigin: `50% ${lastCardST.start + stickDistance}`,
      });

      ScrollTrigger.create({
        trigger: card,
        start: "top top+=280", // for card and header space.
        end: () => `${lastCardST.start} ${stickDistance}`,
        pin: true,
        pinSpacing: false,
        animation: scaleDown,
        toggleActions: "restart none none reverse",
      });
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="py-[60px] mb-20 overflow-hidden">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className="w-full">
            <h2
              ref={headerRef}
              className="text-center text-[48px] font-extrabold mb-[120px] sticky top-5"
            >
              Benefits of Choosing{" "}
              <span className="text-[#009dd6]">Secure365</span>
              <p className="text-lg w-full mt-3 mb-8 mx-auto">
                Secure365 offers robust, 24/7 protection with advanced threat
                detection to keep your data safe. Enjoy peace of mind with
                reliable security solutions tailored for businesses of all
                sizes.
              </p>
            </h2>
            <div className="max-w-[1300px] mx-auto mb-20 mt-10 gap-[30px]">
              {cards.map((card, index) => (
                <div
                  key={card.id}
                  ref={(el) => (cardsRef.current[index] = el)}
                  className="w-full min-h-[450px] rounded-[30px] p-[60px_35px] relative hover:rotate-2 transition-transform duration-300"
                  style={{
                    backgroundImage: `url(${card.bgImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    transformOrigin: "50% -160%",
                  }}
                >
                  <div className="flex items-center justify-between w-full">
                    <div>
                      <h4 className="text-white text-[34px] mb-[15px] mt-0">
                        {card.title}
                      </h4>
                      <p className="text-white text-[18px] leading-[26px] max-w-[80%]">
                        {card.description}
                      </p>
                      <ul className="mt-[50px]">
                        {card.listItems.map((item, i) => (
                          <li
                            key={i}
                            className="list-none text-white text-[20px] mt-[25px]"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
