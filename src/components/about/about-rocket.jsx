import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Rocket } from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const RocketAnimation = () => {
  const sectionRef = useRef(null);
  const imgRef = useRef(null);
  const img2Ref = useRef(null);
  const canvasRef = useRef(null);
  const animatedTextRef = useRef(null);
  const contentContainerRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w, h;
    let stars;

    const resize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      stars = Array.from({ length: 250 }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.5 + 0.2,
        a: Math.random() * 360,
        v: Math.random() * 0.2 + 0.05,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = "#FFFFFF";
      stars.forEach((s) => {
        s.x += Math.cos(s.a) * s.v;
        s.y += Math.sin(s.a) * s.v;
        if (s.x < 0 || s.x > w || s.y < 0 || s.y > h) {
          s.x = Math.random() * w;
          s.y = Math.random() * h;
        }
        ctx.globalAlpha = Math.random() * 0.8 + 0.2;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      });
      requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);
  //   // gsap.to(cloudRef.current, {
  //   //   x: -500,
  //   //   duration: 60,
  //   //   ease: "linear",
  //   //   repeat: -1,
  //   // });

  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: sectionRef.current,
  //       start: "top top",
  //       end: "+=200%",
  //       scrub: true,
  //       pin: true,
  //       markers: false,
  //     },
  //   });

  //   // 1️⃣ Rocket animation
  //   // tl.fromTo(
  //   //   rocketRef.current,
  //   //   {
  //   //     y: -230,
  //   //     opacity: 0,
  //   //     duration: 2,
  //   //     rotate: 180,
  //   //     scale: 3,
  //   //   },
  //   //   {
  //   //     y: 900,
  //   //     opacity: 1,
  //   //     duration: 2, // Adjust duration to real scroll speed
  //   //     scale: 3,
  //   //     ease: "power3.in",
  //   //   }
  //   // )

  //   // 2️⃣ Animated heading appears AFTER rocket animation
  //   tl.fromTo(
  //     animatedTextRef.current,
  //     {
  //       opacity: 0,
  //       y: 200,
  //     },
  //     {
  //       opacity: 1,
  //       y: 0,
  //       duration: 1.5,
  //       color: "#ffffff",
  //       ease: "power3.out",
  //     }
  //   )

  //     // 3️⃣ Content container appears AFTER heading
  //     .fromTo(
  //       contentContainerRef.current,
  //       {
  //         opacity: 0,
  //         y: 100,
  //       },
  //       {
  //         opacity: 1,
  //         y: 0,
  //         duration: 1.5,
  //         ease: "power2.out",
  //       }
  //     )

  //     // 4️⃣ Button appears AFTER content
  //     .fromTo(
  //       buttonRef.current,
  //       {
  //         opacity: 0,
  //         y: 100,
  //       },
  //       {
  //         opacity: 1,
  //         y: 0,
  //         duration: 1.5,
  //         ease: "power2.out",
  //       }
  //     );

  //   return () => {
  //     ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  //   };
  // }, []);

  // useEffect(() => {
  //   const ctx = gsap.context(() => {
  //     // ScrollTrigger with timeline
  //     const tl = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: sectionRef.current,
  //         start: "top top",
  //         end: "+=3000",
  //         pin: true,
  //         scrub: true,
  //         // markers: true, // Remove in production
  //       },
  //     });

  //     // Rocket 1 Animation
  //     tl.to(
  //       imgRef.current,
  //       {
  //         x: "-40vw",
  //         y: "-40vh",
  //         ease: "power2.inOut",
  //       },
  //       0
  //     ) // start at the beginning

  //       // Rocket 2 Animation - delayed start using timeline position
  //       .to(
  //         img2Ref.current,
  //         {
  //           x: "-50vw",
  //           y: "-30vh",
  //           // rotation: 360,
  //           // scale: 2.5,
  //           ease: "power2.inOut",
  //         },
  //         0.5
  //       ); // start halfway through the timeline
  //   }, sectionRef);

  //   return () => ctx.revert();
  // }, []);
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=3000",
        pin: true,
        scrub: true,
        markers: false,
      },
    });

    // Rocket animations
    tl.to(
      imgRef.current,
      {
        x: "-30vw",
        y: "-50vh",
        ease: "power1.out", // lighter easing
      },
      0
    );

    tl.to(
      img2Ref.current,
      {
        x: "-35vw",
        y: "-40vh",
        ease: "power1.out",
      },
      0.5
    );

    // Heading animation with smaller y-offset and gentler ease
    tl.fromTo(
      animatedTextRef.current,
      {
        opacity: 0,
        y: 700, // smaller starting y offset
      },
      {
        opacity: 1,
        y: 100, // animate to original position
        duration: 1.5,
        ease: "power1.out",
      },
      1
    );

    // Content
    tl.fromTo(
      contentContainerRef.current,
      {
        opacity: 0,
        y: 700, // smaller y-offset
      },
      {
        opacity: 1,
        y: 100,
        duration: 1.5,
        ease: "power1.out",
      },
      ">" // start immediately after heading animation
    );

    // Uncomment and use if button animation needed, same easing & smaller y-offset
    // tl.fromTo(
    //   buttonRef.current,
    //   {
    //     opacity: 0,
    //     y: 200,
    //   },
    //   {
    //     opacity: 1,
    //     y: 0,
    //     duration: 1.5,
    //     ease: "power1.out",
    //   },
    //   ">"
    // );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // useEffect(() => {
  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: sectionRef.current,
  //       start: "top top",
  //       end: "+=3000", // Long scroll
  //       pin: true,
  //       scrub: true,
  //       markers: false, // enable for debugging
  //     },
  //   });

  //   // Rocket animations
  //   tl.to(
  //     imgRef.current,
  //     {
  //       x: "-30vw",
  //       y: "-50vh",
  //       ease: "power2.inOut",
  //     },
  //     0
  //   );

  //   tl.to(
  //     img2Ref.current,
  //     {
  //       x: "-35vw",
  //       y: "-40vh",
  //       ease: "power2.inOut",
  //     },
  //     0.5
  //   );

  //   // Heading
  //   tl.fromTo(
  //     animatedTextRef.current,
  //     {
  //       opacity: 0,
  //       y: 700,
  //     },
  //     {
  //       opacity: 1,
  //       y: 100,
  //       duration: 1.5,
  //       ease: "power3.out",
  //     },
  //     1
  //   ); // Slight delay after rockets

  //   // Content
  //   tl.fromTo(
  //     contentContainerRef.current,
  //     {
  //       opacity: 0,
  //       y: 700,
  //     },
  //     {
  //       opacity: 1,
  //       y: 100,
  //       duration: 1.5,
  //       ease: "power2.out",
  //     },
  //     ">"
  //   );

  //   // Button
  //   // tl.fromTo(
  //   //   buttonRef.current,
  //   //   {
  //   //     opacity: 0,
  //   //     y: 700,
  //   //   },
  //   //   {
  //   //     opacity: 1,
  //   //     y: 100,
  //   //     duration: 1.5,
  //   //     ease: "power2.out",
  //   //   },
  //   //   ">"
  //   // );

  //   return () => {
  //     ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  //   };
  // }, []);

  return (
    <div
      ref={sectionRef}
      className="min-h-[100vh] bg-black relative overflow-hidden"
    >
      <canvas
        id="starfield"
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-0"
        style={{ background: "radial-gradient(#04071f 0%, #04071e 70%)" }}
      />
      <div className="p-10">
        {/* <h1 className="text-white text-4xl font-bold">Rocket animation</h1> */}

        <div className="absolute bottom-40 right-[-300px]">
          <img
            ref={imgRef}
            src="/images/rocket1.png"
            alt="rocket 1"
            className="w-60 h-auto object-contain"
          />
        </div>

        <div className="absolute bottom-0 right-[-400px]">
          <img
            ref={img2Ref}
            src="/images/rocket1.png"
            alt="rocket 2"
            className="w-80 h-auto object-contain"
          />
        </div>
      </div>
      <h2
        ref={animatedTextRef}
        className="relative z-30 text-4xl text-center max-w-4xl mx-auto text-white font-semibold"
      >
        Navigating Your Business Through the Stars.. and Safeguarding Every Step
      </h2>

      {/* Content Container */}
      <div
        ref={contentContainerRef}
        className="relative z-30 mt-4 pb-40 text-center max-w-2xl mx-auto"
      >
        <div className="text-md leading-relaxed font-medium text-white">
          Think of Secure365 as your interstellar co-pilot, guiding you safely
          through the ever-expanding cosmos of modern technology. We blend
          visionary web development with rock-solid IT services, cloud
          solutions, and cybersecurity—ensuring that no matter which galaxy (or
          market) you're aiming for, you'll arrive unscathed. Our mission?
          Simple: to help your brand thrive and remain secure, from initial
          launch to the far reaches of tomorrow.
        </div>
        {/* <button
                  ref={buttonRef}
                  className="mt-12 px-10 py-4 text-lg font-semibold text-white bg-transparent border-2 border-white rounded-full cursor-pointer relative overflow-hidden transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/40 hover:bg-gradient-to-r hover:from-blue-800 hover:to-blue-600 before:content-[''] before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:transition-all before:duration-500 hover:before:left-full"
                >
                  GET STARTED
                </button> */}
        <button
          ref={buttonRef}
          className="relative mt-4 z-[9999] bannerbtn"
          data-aos="fade-up"
        >
          <Link className="header-button ajax-link" href="/about-us">
            <div className="button-icon-link right">
              <div className="icon-wrap-scale">
                <div className="icon-wrap parallax-wrap">
                  <div className="button-icon parallax-element">
                    {/* <i className="fa-solid fa-arrow-right"></i> */}
                    <Rocket className="ml-2 h-5 w-5" />
                  </div>
                </div>
              </div>
              <div className="button-text sticky right">
                {/* <span data-hover="Let's Talk">Start Your Mission <Rocket className="ml-2 h-5 w-5" /></span> */}
                <span data-hover="Let's Talk">About us</span>
              </div>
            </div>
          </Link>
        </button>
      </div>
      <div className={`cloud-inner-box cloudImage`}>
        {/* <Image
                  src="/images/Cloud-image.jpg"
                  alt="Cloud background"
                  width={1920}
                  height={1080}
                  className="absolute inset-0 object-cover z-10 opacity-1"
                  priority
                /> */}
        <img src="/images/Cloud-image.jpg" width={1920} height={1000} />
        {/* <img src="/images/Cloud-image.jpg" width={1920} height={1000} /> */}
      </div>
      <div className="fogContainerBox">
        <img
          className="fog"
          src="https://64.media.tumblr.com/224f9198d5d88a5e92e43f5ef4f7a592/139ff9bb70edd708-66/s540x810/0edbf6d586b6b4c85c5bd61569992f036c21191b.png"
          alt="Fog"
        />
      </div>
      <style jsx global>{`
        body {
          margin: 0;
          font-family: sans-serif;
          background: #111;
          color: white;
          overflow-x: hidden;
        }
        .cloudImage {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          width: 100%;
        }

        .cloudImage img {
          width: 100%;
          height: 100%;
        }
        .scroll-animation {
          position: relative;
        }
        .pin-section {
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default RocketAnimation;
