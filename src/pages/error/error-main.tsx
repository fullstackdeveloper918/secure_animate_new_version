"use client";
import { gsap } from "gsap";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import useScrollSmooth from "@/hooks/use-scroll-smooth";
import { ScrollSmoother, ScrollTrigger, SplitText } from "@/plugins";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

// internal imports
import Wrapper from "@/layouts/wrapper";
import HeaderEleven from "@/layouts/headers/header-eleven";
import FooterTwo from "@/layouts/footers/footer-two";
import error from '@/assets/img/error/error.png';
import AnimationHeader from "@/components/animation_header";

const ErrorMain = () => {
  useScrollSmooth();

  return (
    <Wrapper>
      {/* header area start */}
      <AnimationHeader/>
      {/* header area end */}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            {/* error hero */}
            <div className="tp-error-area pt-190 pb-120">
              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="tp-error-wrapper text-center">
                      <h1 className="tp-error-title">Oops!</h1>
                      <Image src={error} alt="error-img" style={{ height: 'auto' }} />
                      <div className="tp-error-content">
                        <h2 className="tp-error-title-sm">
                          Something went Wrong...
                        </h2>
                        <p>Sorry, we {"couldn't"} find your page.</p>
                        <Link className="tp-btn-black-2" href="/">
                          Back to Home
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* error hero */}
          </main>

          {/* footer area */}
          <FooterTwo topCls="" />
          {/* footer area */}
        </div>
      </div>
    </Wrapper>
  );
};

export default ErrorMain;
