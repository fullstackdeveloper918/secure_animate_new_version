"use client";
import { gsap } from "gsap";
import React from "react";
import { useGSAP } from "@gsap/react";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";
import ServiceDetailsArea from "@/components/service/service-details-area";

// animation
import {
  charAnimation,
  fadeAnimation,
  titleAnimation,
} from "@/utils/title-animation";
import AnimationHeader from "@/components/animation_header";
import ServiceThree from "@/components/service/service-three";
import FooterFour from "@/layouts/footers/footer-four";
import { servicePanel } from "@/utils/panel-animation";
import { FourthSection } from "../../components/inner-services/ai-services/FourthSection";
import ContactTwo from "@/components/contact/contact-two";
import CardStackingSection from "@/components/service/CardStackingSection";

const ServiceDetailsMain = ({ serviceBannerData }) => {
  useScrollSmooth();
  console.log("serviceBannerDatadd", serviceBannerData);
  useGSAP(() => {
    const timer = setTimeout(() => {
      charAnimation();
      fadeAnimation();
      titleAnimation();
      servicePanel();
    }, 100);
    return () => clearTimeout(timer);
  });

  return (
    <Wrapper>
      <AnimationHeader />

      {/* <CardStackingSection />
      <div className="h-[500px]"></div> */}

      {/* <div id="smooth-wrapper">
        <div id="smooth-content"> */}
      <div id="">
        <div id="">
          <main>
            <ServiceDetailsArea serviceBannerData={serviceBannerData} />
            <div
              className="bg-[#009dd610] singleSerivce mt-[-50px]"
              id="singleSerivce"
            >
              <ContactTwo />
            </div>
            <ServiceThree serviceBannerData={serviceBannerData} />
            <FourthSection />
          </main>
          <FooterFour />
        </div>
      </div>
    </Wrapper>
  );
};

export default ServiceDetailsMain;
