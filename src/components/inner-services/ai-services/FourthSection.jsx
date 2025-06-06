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
      <div className="flex flex-col items-center">
        <motion.h2
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center sm:text-4xl text-white font-bold tracking-tighter md:text-6xl md:leading-[4rem] flex flex-wrap justify-center xl:px-64"
        >
          {text?.split("").map((char, index) => (
            <motion.span key={index} variants={child}>
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h2>

        <motion.p
          data-aos="fade-up"
          className="text-gray-50 text-sm 2xl:text-lg mt-4 max-w-5xl text-center"
        >
          Book a discovery call today and learn how our integrated services can
          drive growth for your business.
        </motion.p>
      </div>

      <button class="newBtnOne bg-transparent text-white border-2 hover:bg-cyan-100 px-4 py-3 rounded-md text-lg font-medium hover:text-cyan-900 hover:bg-white border mt-4 rounded-pill">Book a Discovery Call</button>
    </div>
  );
};
