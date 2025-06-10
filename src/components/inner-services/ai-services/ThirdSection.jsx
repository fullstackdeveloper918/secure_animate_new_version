import React from "react";
import { UilCheck } from "@iconscout/react-unicons";

const PricingCards = () => {
  return (
    <div className="bg-white relative pb-14">
      <h2 className="price-top-head text-center text-uppercase fw-bold">
        Pricing tiers
      </h2>
      <section className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8 pricing-serv-tier">
        {/* CARD 1 */}
        <article className="bg-white rounded-lg shadow-md flex flex-col items-center text-center price-serv-card">
          <div class="card__pricing">
            <div class="card__pricing-number">
              <span class="card__pricing-symbol">$</span>0
            </div>
            <span class="card__pricing-month">/month</span>
          </div>
          <div className="price-wrap-content w-full h-full">
            <header className="card__header d-block w-100 text-start">
              <div className="mb-3 w-20 h-20 rounded-full grid place-items-center bg-gray-100">
                <img
                  src="../../assets/img/inner-service/service/Basic-plan-icon-main.png"
                  alt="Free plan"
                  className="w-14 h-14"
                />
              </div>
              <span className="block text-sm text-[#9ba6b0] font-medium mb-1 text-uppercase">
                Free plan
              </span>
              <h1 className="text-2xl font-bold mb-2">Basic</h1>
            </header>

            <ul className="space-y-3 text-left w-full mx-0">
              <li className="flex items-center space-x-3 mb-2">
                {/* <i className="uil uil-check text-green-500 text-xl"></i> */}
                <UilCheck className="text-green-500 text-xl" />
                <p className="m-0 ms-2">3 user request</p>
              </li>
              <li className="flex items-center space-x-3 mb-2">
                {/* <i className="uil uil-check text-green-500 text-xl"></i> */}
                <UilCheck className="text-green-500 text-xl" />
                <p className="m-0 ms-2">10 downloads per day</p>
              </li>
              <li className="flex items-center space-x-3 mb-2">
                {/* <i className="uil uil-check text-green-500 text-xl"></i> */}
                <UilCheck className="text-green-500 text-xl" />
                <p className="m-0 ms-2">Daily content updates</p>
              </li>
              <li className="flex items-center space-x-3 mb-2">
                {/* <i className="uil uil-check text-green-500 text-xl"></i> */}
                <UilCheck className="text-green-500 text-xl" />
                <p className="m-0 ms-2">Fully editable files</p>
              </li>
            </ul>
          </div>

          <button className="text-white px-6 py-3 rounded-pill transition w-full price-btn">
            Choose this plan
          </button>
        </article>

        {/* CARD 2 */}
        <article className="bg-white rounded-lg shadow-md flex flex-col items-center text-center price-serv-card">
          <div class="card__pricing">
            <div class="card__pricing-number">
              <span class="card__pricing-symbol">$</span>0
            </div>
            <span class="card__pricing-month">/month</span>
          </div>
          <div className="price-wrap-content w-full h-full">
            <header className="card__header d-block w-100 text-start">
              <div className="mb-3 w-20 h-20 rounded-full grid place-items-center bg-gray-100">
                <img
                  src="../../assets/img/inner-service/service/Professional-icon.png"
                  alt="Professional plan"
                  className="w-14 h-14"
                />
              </div>
              <span className="block text-sm text-[#9ba6b0] font-medium mb-1 text-uppercase">
                Most popular
              </span>
              <h1 className="text-2xl font-bold mb-2">Professional</h1>
            </header>

            <ul className="space-y-3 text-left w-full mx-0">
              <li className="flex items-center space-x-3 mb-2">
                {/* <i className="uil uil-check text-green-500 text-xl"></i> */}
                <UilCheck className="text-green-500 text-xl" />
                <p className="m-0 ms-2">100 user reques</p>
              </li>
              <li className="flex items-center space-x-3 mb-2">
                {/* <i className="uil uil-check text-green-500 text-xl"></i> */}
                <UilCheck className="text-green-500 text-xl" />
                <p className="m-0 ms-2">Unlimited downloads</p>
              </li>
              <li className="flex items-center space-x-3 mb-2">
                {/* <i className="uil uil-check text-green-500 text-xl"></i> */}
                <UilCheck className="text-green-500 text-xl" />
                <p className="m-0 ms-2">Unlock all features from our site</p>
              </li>
              <li className="flex items-center space-x-3 mb-2">
                {/* <i className="uil uil-check text-green-500 text-xl"></i> */}
                <UilCheck className="text-green-500 text-xl" />
                <p className="m-0 ms-2">Daily content updates</p>
              </li>
              <li className="flex items-center space-x-3 mb-2">
                {/* <i className="uil uil-check text-green-500 text-xl"></i> */}
                <UilCheck className="text-green-500 text-xl" />
                <p className="m-0 ms-2">Fully editable files</p>
              </li>
            </ul>
          </div>
          <button className="text-white px-6 py-3 rounded-pill transition w-full price-btn">
            Choose this plan
          </button>
        </article>

        {/* CARD 3 */}
        <article className="bg-white rounded-lg shadow-md flex flex-col items-center text-center price-serv-card">
          <div class="card__pricing">
            <div class="card__pricing-number">
              <span class="card__pricing-symbol">$</span>0
            </div>
            <span class="card__pricing-month">/month</span>
          </div>
          <div className="price-wrap-content w-full h-full">
            <header className="card__header d-block w-100 text-start">
              <div className="mb-3 w-20 h-20 rounded-full grid place-items-center bg-gray-100">
                <img
                  src="../../assets/img/inner-service/service/Enterprise-icon.png"
                  alt="Enterprise plan"
                  className="w-14 h-14"
                />
              </div>
              <span className="block text-sm text-[#9ba6b0] font-medium mb-1 text-uppercase">
                For agencies
              </span>
              <h1 className="text-2xl font-bold mb-2">Enterprise</h1>
            </header>

            <ul className="space-y-3 text-left w-full mx-0">
              <li className="flex items-center space-x-3 mb-2">
                {/* <i className="uil uil-check text-green-500 text-xl"></i> */}
                <UilCheck className="text-green-500 text-xl" />
                <p className="m-0 ms-2">Unlimited user request</p>
              </li>
              <li className="flex items-center space-x-3 mb-2">
                {/* <i className="uil uil-check text-green-500 text-xl"></i> */}
                <UilCheck className="text-green-500 text-xl" />
                <p className="m-0 ms-2">Unlimited downloads</p>
              </li>
              <li className="flex items-center space-x-3 mb-2">
                {/* <i className="uil uil-check text-green-500 text-xl"></i> */}
                <UilCheck className="text-green-500 text-xl" />
                <p className="m-0 ms-2">Unlock all features from our site</p>
              </li>
              <li className="flex items-center space-x-3 mb-2">
                {/* <i className="uil uil-check text-green-500 text-xl"></i> */}
                <UilCheck className="text-green-500 text-xl" />
                <p className="m-0 ms-2">Daily content updates</p>
              </li>
              <li className="flex items-center space-x-3 mb-2">
                {/* <i className="uil uil-check text-green-500 text-xl"></i> */}
                <UilCheck className="text-green-500 text-xl" />
                <p className="m-0 ms-2">Fully editable files</p>
              </li>
            </ul>
          </div>
          <button className="text-white px-6 py-3 rounded-pill transition w-full price-btn">
            Choose this plan
          </button>
        </article>
      </section>
    </div>
  );
};

export default PricingCards;
