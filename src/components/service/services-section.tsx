"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import ScrambleText from "@/components/ScrambleTexts";
import Link from "next/link";

type Service = {
  id: string;
  title: string;
  backgroundImage: string;
};

export default function ServicesSection({ data }: any) {
  const [activeService, setActiveService] = useState<number>(0);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const boxRefs = useRef<(HTMLDivElement | null)[]>([]);

  // const services: Service[] = [
  //   {
  //     id: "aiservices",
  //     title: "AI‑Powered Services",
  //     backgroundImage: "/images/astronaut-video.mp4",
  //   },
  //   {
  //     id: "appDevelopment",
  //     title: "App Development",
  //     backgroundImage: "/images/012hero.jpg",
  //   },
  //   {
  //     id: "sitedesign",
  //     title: "Site Design & UX",
  //     backgroundImage: "/images/013hero.jpg",
  //   },
  //   {
  //     id: "cybersecurity",
  //     title: "Cybersecurity & Compliance",
  //     backgroundImage: "/images/016hero.jpg",
  //   },
  //   {
  //     id: "marketing",
  //     title: "Growth Marketing",
  //     backgroundImage: "/images/015hero.jpg",
  //   },
  // ];

  useEffect(() => {
    boxRefs.current.forEach((box) => {
      if (!box) return;
      const imageDiv = box.querySelector(".hover-image");

      box.addEventListener("mouseenter", () => {
        gsap.to(imageDiv, {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          ease: "power3.out",
        });
      });

      box.addEventListener("mouseleave", () => {
        gsap.to(imageDiv, {
          scale: 1.2,
          opacity: 0,
          duration: 0.5,
          ease: "power3.inOut",
        });
      });
    });
  }, []);

  const isVideo = (src: string) => src.endsWith(".mp4");

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black text-white animated_videosec">
      {/* Backgrounds */}
      {data?.home_page_projects_list_captions_images?.map(
        (service: any, index: any) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 serv-full-hgt ${
              activeService === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="absolute inset-0 bg-black/50 z-10" />

            {/* Conditional: Video or Image */}
            {isVideo(service.projects_list_captions_image) ? (
              <video
                autoPlay
                loop
                muted
                playsInline
                className={`absolute inset-0 object-cover w-full h-full transition-transform duration-1500 ${
                  activeService === index ? "scale-100" : "scale-110"
                }`}
              >
                <source
                  // src={service.projects_list_captions_image}
                  src='/whatmakevideoOne.mp4'
                  // src='/Project-video.mp4'
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            ) : (
              <Image
                src={service.projects_list_captions_image}
                alt=""
                fill
                className={`object-cover transition-transform duration-1500 ${
                  activeService === index ? "scale-100" : "scale-110"
                }`}
                priority
              />
            )}

            <div className="absolute inset-0 z-20 pointer-events-none">
              {/* Grid Overlay */}
              {/* <div className="absolute inset-0 grid grid-cols-6 grid-rows-8">
                {Array.from({ length: 50 }).map((_, index) => (
                  <div key={index} className="border-setting" />
                ))}
              </div> */}
              {/* Floating particles */}
              <div className="absolute inset-0 opacity-30">
                {Array.from({ length: 20 }).map((_, index) => (
                  <div
                    key={index}
                    className="absolute rounded-full bg-cyan-400"
                    style={{
                      width: `${Math.random() * 10 + 2}px`,
                      height: `${Math.random() * 10 + 2}px`,
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      opacity: Math.random() * 0.8 + 0.2,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        )
      )}

      {/* Foreground Service Titles */}
      <div className="relative z-40 container mx-auto px-4 h-full flex flex-col justify-center items-center service-card-full">
        <div className="relative z-50 flex flex-col items-center gap-4">
          {data?.home_page_service_section_loop_data?.map(
            (service: any, index: any) => (
              <div
                key={index}
                onMouseEnter={() => {
                  setHoveredId(index);
                  setActiveService(index);
                }}
                onMouseLeave={() => setHoveredId(null)}
                className="cursor-pointer"
              >
              <Link
                  key={index}
                  href={`/service/${service.home_page_service_section_loop.substring(
                    service.home_page_service_section_loop.lastIndexOf("/") + 1
                  )}`}
                >
                  <ScrambleText
                    text={service.home_page_service_section_loop.substring(
                      0,
                      service.home_page_service_section_loop.lastIndexOf("/")
                    )}
                    isHovering={hoveredId === index}
                    className={` text-3xl sm:text-6xl 2xl:text-[clamp(48px,8.5vw,94px)] font-semibold transition-colors whitespace-nowrap duration-300 h-service-name ${
                      activeService === index ? "text-white" : "text-white/50"
                    }`}
                  />
                </Link>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
