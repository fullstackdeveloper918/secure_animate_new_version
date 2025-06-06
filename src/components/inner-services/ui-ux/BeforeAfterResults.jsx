import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function BeforeAfterResults() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      tl.from(cardsRef.current, {
        opacity: 0,
        y: 50,
        duration: 0.6,
        stagger: 0.3,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-20 relative bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bf-result-head">
          Before vs. After Results
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* BEFORE Card */}
          <div
            className="bg-white rounded-lg shadow-lg overflow-hidden"
            ref={(el) => (cardsRef.current[0] = el)}
          >
            <div className="bg-red-100 p-4 text-center">
              <h3 className="font-bold text-lg text-red-800 mb-0">BEFORE</h3>
            </div>
            <div className="p-6 space-y-6">
              {[
                ["Page Load Speed", "5.2s", "30%"],
                ["Mobile Responsiveness", "Poor", "20%"],
                ["Conversion Rate", "1.2%", "12%"],
                ["SEO Ranking", "Page 3+", "15%"],
              ].map(([label, value, width], i) => (
                <div key={i}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-black">{label}</span>
                    <span className="text-red-600">{value}</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div
                      className="bg-red-500 h-2 rounded-full"
                      style={{ width }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AFTER Card */}
          <div
            className="bg-white rounded-lg shadow-lg overflow-hidden"
            ref={(el) => (cardsRef.current[1] = el)}
          >
            <div className="bg-emerald-100 p-4 text-center">
              <h3 className="font-bold text-lg text-emerald-800 mb-0">AFTER</h3>
            </div>
            <div className="p-6 space-y-6">
              {[
                ["Page Load Speed", "0.8s", "95%"],
                ["Mobile Responsiveness", "Excellent", "98%"],
                ["Conversion Rate", "4.8%", "85%"],
                ["SEO Ranking", "Top 5", "90%"],
              ].map(([label, value, width], i) => (
                <div key={i}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-black">{label}</span>
                    <span className="text-emerald-600">{value}</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div
                      className="bg-emerald-500 h-2 rounded-full"
                      style={{ width }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Summary Section */}
        <div
          className="mt-12 text-center"
          ref={(el) => (cardsRef.current[2] = el)}
        >
          <div className="inline-block bg-emerald-100 px-6 py-3 rounded-lg">
            <p className="text-lg font-medium text-emerald-800">
              Average improvement across all clients:{" "}
              <span className="font-bold">+187%</span> in key metrics
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
