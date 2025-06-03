import React from "react";
import { scroller } from "react-scroll";
import { ScrollDown } from "../svg";
import Link from "next/link";

export default function AboutUsHero({bannerResponse}) {
  const scrollTo = () => {
    scroller.scrollTo('about-info', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };
  return (
    <div
      className="ab-inner-hero-area ab-inner-hero-bg p-relative"
      // style={{backgroundImage: "url(/assets/img/inner-about/hero/about-galaxy-night.jpg)"}}
      style={{backgroundImage: "url(https://img.freepik.com/free-photo/futuristic-technology-concept_23-2151908090.jpg?t=st=1748324728~exp=1748328328~hmac=d3bb1fed70ac39a75fc110cbfdad7d721b3e78180edb5ac017c3b5b74f1e8d0b&w=1380)"}}
    >
      {/* <video src="../../public/assets/img/inner-service/service/About-bg-video.mp4"></video> */}
      <div className="breadcurmb-site d-none">
        <span>About Us</span>
      </div>
      {/* <div className="ab-inner-hero-scroll smooth">
        <a className="pointer" onClick={scrollTo}>
          <span>
            Scroll to explore
            <ScrollDown />
          </span>
        </a>
      </div> */}
      <div className="container container-1480">
        <div className="row">
          <div className="col-xl-8">
            <div
              className="ab-inner-hero-title-box"
              data-lag="0.2"
              data-stagger="0.08"
            >
              {/* <span className="ab-inner-hero-subtitle">
                {bannerResponse?.pages?.banner_data?.banner_heading} <br /> {bannerResponse?.pages?.banner_data?.banner_heading_second}
              </span> */}
              <h1 className="ab-inner-hero-title tp-char-animation">
              {bannerResponse?.pages?.banner_data?.banner_heading_third}
              </h1>
              {/* <p>{bannerResponse?.pages?.banner_data?.banner_sub_headline}</p> */}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12 col-lg-8">
            <div
              className="ab-inner-hero-content"
              data-lag="0.2"
              data-stagger="0.08"
            >
              <p>
              {bannerResponse?.pages?.banner_data?.banner_heading_all_in}
              </p>
               <Link className="tp-btn-white-sm border-style rounded-pill" href="#">{bannerResponse?.pages?.banner_data?.book_demo}</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
