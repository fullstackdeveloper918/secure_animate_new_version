import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    title: "1. Discovery",
    description:
      "We dive deep into your business goals, user needs, and technical requirements to create a solid foundation.",
  },
  {
    title: "2. Design",
    description:
      "We create wireframes, prototypes, and user flows that ensure an intuitive and engaging user experience.",
  },
  {
    title: "3. Development",
    description:
      "Our engineers build your application using modern technologies and best practices for performance and scalability.",
  },
  {
    title: "4. Testing",
    description:
      "Rigorous quality assurance and user testing ensure your application is bug-free and user-friendly.",
  },
  {
    title: "5. Launch & Growth",
    description:
      "We deploy your application and provide ongoing support, maintenance, and feature enhancements.",
  },
];

export default function FiveStepBuildSprint() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=3000",
            scrub: true,
            pin: true,
            markers: false,
          },
        });

        const stepsEls = gsap.utils.toArray(".step");

        stepsEls.forEach((step, i) => {
          tl.fromTo(
            step,
            { opacity: 0, y: 100 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power2.out",
            },
            i * 1.5
          );
        });

        return () => tl.kill();
      });

      return () => mm.revert();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-20 bg-slate-50 five-step-sec" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 step-headTxt">
          Our 5-Step Build Sprint
        </h2>
        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-cyan-200 transform -translate-x-1/2 hidden md:block"></div>
          <div className="space-y-12 md:space-y-0 relative">
            {steps.map((step, index) => {
              const isOdd = index % 2 !== 0;

              return (
                <div
                  key={index}
                  className="step md:grid md:grid-cols-2 md:gap-8 items-center step-card-box"
                >
                  {isOdd ? (
                    <>
                      <div className="hidden md:flex justify-end items-center">
                        <div className="bg-[#00aceb] text-white rounded-full w-10 h-10 flex items-center justify-center z-10">
                          {index + 1}
                        </div>
                      </div>
                      <div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                          <h3 className="text-xl font-bold mb-2 text-[#00aceb]">
                            {step.title}
                          </h3>
                          <p className="text-slate-600">{step.description}</p>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="md:text-right">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                          <h3 className="text-xl font-bold mb-2 text-[#00aceb]">
                            {step.title}
                          </h3>
                          <p className="text-slate-600">{step.description}</p>
                        </div>
                      </div>
                      <div className="hidden md:flex justify-start items-center">
                        <div className="bg-[#00aceb] text-white rounded-full w-10 h-10 flex items-center justify-center z-10">
                          {index + 1}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
