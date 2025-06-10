import { useEffect, useRef, useState } from "react";
import styles from "../../about/RealEstateSection.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Rocket } from "lucide-react";

let text = "Ready to Transform Your Business?";
export const FourthSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.03,
      },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };
  return (
    <div id="real-estate-section" className={styles.realEstateSection2}>

      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
      >
        <source src="/services.mp4" type="video/mp4" />
      </video>

      <div className="flex flex-col items-center z-10">
        <h2
        data-aos="fade-up"
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center sm:text-4xl text-white z-[99] font-semibold tracking-tighter md:text-6xl md:leading-[4rem] flex flex-wrap justify-center xl:px-64"
        >
         {text}
        </h2>

        <motion.p
          data-aos="fade-up"
          className="text-gray-50 text-sm 2xl:text-lg mt-4 max-w-5xl text-center"
        >
          Book a discovery call today and learn how our integrated services can
          drive growth for your business.
        </motion.p>
      </div>

      <button class="newBtnOne z-[10] relative bg-transparent text-white border-2 hover:bg-cyan-100 px-4 py-3 rounded-md text-lg font-medium hover:text-cyan-900 hover:bg-white border mt-4 rounded-pill">Book a Discovery Call</button>
    </div>
  );
};
