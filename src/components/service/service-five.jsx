import React from "react";
import Image from "next/image";
import Link from "next/link";


export function ServiceItems({serviceData}) {
  
  return (
    <div className="row flex-column items-end m-0">
      {/* <div className="col-xxl-3"></div> */}
      {serviceData && serviceData?.data?.service_why_choose_proactive_data?.map((item,index) => (
        <div key={index} className="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
          <div className="tp-service-5-item tp_fade_bottom space-1">
            {/* <div className="tp-service-4-icon">
             <Image src={item.service_proactive_loop_image} alt="icon" width={60} height={60}/> 
            </div> */}
            <div className="tp-service-4-content">
              <h2 className="tp-service-4-title-sm tp-text-black">
                <Link href="/service">{item.service_proactive_loop_image_heading}</Link>
              </h2>
              <p>
                {/* {item.service_proactive_loop_paragraph} */}
                Success isn’t just about reacting to challenges — it’s about staying ahead of them. Our Proactive & Preventative approach is built on foresight, planning, and continuous improvement. We believe that identifying potential issues early and addressing them before they grow ensures long-term efficiency, reliability, and peace of mind.

              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// service five area
export default function ServiceFive() {
  return (
    <div className="tp-service-5-area pt-120 pb-70">
      <div className="container container-1775">
        <div className="row">
          <div className="col-xl-12">
            <div className="tp-service-5-title-box mb-50">
              <h4 className="tp-service-5-title p-relative tp_fade_right">
                <span className="tp-service-5-subtitle tp_fade_left">
                  SERVICES
                </span>
                <span className="text-space"></span>
                Nullam posuere rhoncus elementum. Nullam lacinia <br />
                urna blandit iaculis sagittis
              </h4>
            </div>
          </div>
        </div>
        <div className="tp-service-5-wrap">
          <ServiceItems/>
        </div>
      </div>
    </div>
  );
}
