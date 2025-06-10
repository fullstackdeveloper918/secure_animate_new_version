"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import ProjectSlider from "@/components/projectSlider/projectSlider";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TechableProject from "@/components/projectSlider/TechableProject";
import AppleTech from "@/components/projectSlider/AppleTech";
import TextScrollAnimation from "@/components/ProjectTextaniamtion/TextScrollAnimation";
import Component from "@/components/ProjectTextaniamtion/TextScrollAnimation";
gsap.registerPlugin(ScrollTrigger);
const Page = () => {
  const heroRef = useRef(null);
  const mainContentRef = useRef(null);
  const sectionRef = useRef(null);
  // useEffect(() => {
  //   const ctx = gsap.context(() => {
  //     const tl = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: sectionRef.current,
  //         start: "top center",
  //         end: "+=180", // Increase for more scroll length
  //         scrub: true,
  //         pin: true,
  //         markers: false,
  //       },
  //     });
  //     const stepsEls = gsap.utils.toArray(".step");
  //     stepsEls.forEach((step, i) => {
  //       tl.fromTo(
  //         step,
  //         { opacity: 0, y: 100 },
  //         {
  //           opacity: 1,
  //           y: 0,
  //           duration: 0.8,
  //           ease: "power2.out",
  //         },
  //         i * 0.5 // stagger each step in scroll timeline
  //       );
  //     });
  //   }, sectionRef);
  //   return () => ctx.revert();
  // }, []);
  useEffect(() => {
    // Hero Section Animations
    gsap.set("#hero-background-layer", {
      y: "-100%",
      scale: 0.8,
      width: "60%",
      transformOrigin: "center top",
      opacity: 0,
    });
    const heroTl = gsap.timeline({ delay: 0.2 });
    heroTl
      .to("#hero-background-layer", {
        y: "0%",
        scale: 1,
        width: "100%",
        opacity: 1,
        duration: 1.8,
        ease: "power3.out",
      })
      .fromTo(
        ".hero-title span",
        {
          y: 120,
          opacity: 0,
          skewY: 5,
        },
        {
          y: 0,
          opacity: 1,
          skewY: 0,
          duration: 1.2,
          ease: "power3.out",
          stagger: 0.3,
        },
        "-=1.2"
      )
      .fromTo(
        ".hero-subtitle span",
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
        },
        "-=0.8"
      )
      .fromTo(
        ".hero-footer-left, .hero-footer-right",
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.2,
        },
        "-=0.5"
      );
    // Parallax for hero image
    gsap.to("#hero-bg-image", {
      yPercent: 20,
      ease: "none",
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });
    // Parallax for all images in main content
    gsap.utils.toArray(".parallax-image").forEach((image) => {
      gsap.fromTo(
        image,
        {
          y: -60,
        },
        {
          y: 60,
          ease: "none",
          scrollTrigger: {
            trigger: image,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    });
    gsap.utils.toArray(".pinned-item").forEach((item, index) => {
      gsap.fromTo(
        item,
        {
          y: 100,
          opacity: 0,
          scale: 0.9,
          // transformOrigin: "center top",
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            end: "top 20%",
            scrub: 0.5,
            toggleActions: "play none none reverse",
          },
        }
      );
    });
    // Content section animations
    gsap.utils.toArray(".content-row").forEach((section) => {
      gsap.fromTo(
        section,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            end: "top 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
    // Smooth scroll for entire page
    ScrollTrigger.create({
      trigger: mainContentRef.current,
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        gsap.to(mainContentRef.current, {
          y: -self.progress * 50,
          ease: "power2.out",
          overwrite: "auto",
        });
      },
    });
    // Refresh ScrollTrigger after setup
    ScrollTrigger.refresh();
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  return (
    <>
      <main>
        <div className="cd-index cd-main-content">
          <div
            id="clapat-page-content"
            className="dark-content"
            data-bgcolor="#ffffff"
          >
            <div id="content-scroll">
              <div id="main" className="" ref={mainContentRef}>
                <div id="hero" className="has-image autoscroll" ref={heroRef}>
                  <div id="hero-styles">
                    <div
                      id="hero-caption"
                      className="content-full-width parallax-scroll-caption"
                    >
                      <div className="inner">
                        <h1 className="hero-title caption-timeline">
                          <span>Shop Smart.</span> <span>Save the Planet.</span>
                          
                        </h1>
                        <div className="hero-subtitle caption-timeline onload-shuffle">
                          <span>Branding</span>
                        </div>
                      </div>
                      <div id="hero-footer">
                        <div className="hero-footer-left">
                          <div className="button-wrap left scroll-down">
                            <div className="icon-wrap parallax-wrap">
                              <div className="button-icon parallax-element">
                                <i className="fa-solid fa-arrow-down"></i>
                              </div>
                            </div>
                            <div className="button-text sticky left">
                              <span data-hover="SCROLL TO EXPLORE">
                                SCROLL TO EXPLORE
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="hero-footer-right">
                          <div
                            id="share"
                            className="page-action-content"
                            data-text="SHARE:"
                          >
                            <div className="jssocials-shares">
                              <div className="parallax-wrap">
                                <FaFacebookF />
                              </div>
                              <div className="parallax-wrap">
                                <BsTwitterX />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  id="hero-image-wrapper"
                  className="change-header-color hero-pixels-cover parallax-scroll-image flex flex-col justify-center items-center"
                >
                  <div
                    id="hero-background-layer"
                    className="parallax-scroll-image"
                    style={{ backgroundColor: "#032251" }}
                  >
                    <div
                      id="hero-bg-image"
                      style={{
                        backgroundImage:
                          "url('../images/projects/techableslide2.jpeg')",
                      }}
                    ></div>
                  </div>
                </div>
                <div id="main-content">
                  <div id="main-page-content">
                    <div className="marginTBo width90">
                      <div className="content-row small row_padding_top light-section">
                        <figure
                          className="parallax-image-wrapper"
                          id="techable-image-parallax"
                        >
                          <Link
                            href="/images/projects/techableP1.png"
                            className="image-link"
                          >
                            <img
                              src="/images/projects/techableP1.png"
                              alt="Image Title"
                              className="parallax-image"
                              width={1000}
                              height={1000}
                            />
                          </Link>
                          <figcaption>Caption</figcaption>
                        </figure>
                      </div>
                      <div className="content-row small row_padding_bottom light-section text-align-center">
                        <hr />
                        <hr className="destroy" />
                        <p className="bigger has-opacity">
                          Web PROJECT eskale GWear up for victory with our
                          exclusive range of Brazil-inspired apparel.
                        </p>
                      </div>
                    </div>
                    <div
                      className="content-row full light-section disable-header-gradient change-header-color"
                      data-bgcolor="#032251"
                    >
                      <figure className="has-parallax">
                        <Image
                          src="/images/projects/techableP2.png"
                          alt="Image Title"
                          width={3000}
                          height={3000}
                          className="parallax-image"
                        />
                      </figure>
                    </div>
                    {/* <div
                      className="content-row small row_padding_top row_padding_bottom light-section text-align-center"
                      data-bgcolor="#EBEBEB"
                      ref={sectionRef}
                    >
                      <div className="pin-spacer ">
                        <div
                          className="pinned-lists-wrapper scale-mode step"
                          data-duration="3x"
                        >
                          <p className="smaller">Characteristics</p>
                          <ul className="pinned-lists">
                            {[
                              "Technology",
                              "Innovation",
                              "Software",
                              "Startups",
                              "Growth",
                            ].map((item, index) => (
                              <li key={index} className="pinned-item">
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div> */}
                    {/* <TextScrollAnimation />service-details__area service-details__space bann-p-block */}
                  </div>
                </div>
              </div>
            </div>
            <TextScrollAnimation />
            <ProjectSlider />
            <TechableProject />
            <AppleTech />
          </div>
        </div>
      </main>
    </>
  );
};
export default Page;
