import { useEffect, useRef } from "react";
import { MessageSquare, TrendingUp, Workflow, Brain } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useCases = [
  {
    icon: <MessageSquare className="h-6 w-6 text-[#009DD6]" />,
    title: "AI Chatbots",
    pain: "Hours spent answering the same customer questions",
    gain: "24/7 intelligent support that learns from every interaction",
    roi: "300%",
  },
  {
    icon: <TrendingUp className="h-6 w-6 text-[#009DD6]" />,
    title: "Predictive Analytics",
    pain: "Reactive decision-making based on outdated data",
    gain: "Proactive insights that forecast trends and opportunities",
    roi: "250%",
  },
  {
    icon: <Workflow className="h-6 w-6 text-[#009DD6]" />,
    title: "Workflow Orchestration",
    pain: "Manual processes with high error rates",
    gain: "Automated workflows that reduce errors by 95%",
    roi: "400%",
  },
  // {
  //   icon: <Brain className="h-6 w-6 text-[#009DD6]" />,
  //   title: "Document Intelligence",
  //   pain: "Hours spent processing and extracting data",
  //   gain: "Instant extraction and analysis of key information",
  //   roi: "350%",
  // },
];

const UseCaseCard = ({ icon, title, pain, gain, roi, innerRef }) => (
  <div
    ref={innerRef}
    style={{ opacity: 0, transform: "translateY(32px)" }} // ← inline styles here
    className="border border-[#009DD6]/20 rounded-lg p-6 shadow-sm bg-white use-card-inner"
  >
    <div className="bg-[#009DD6]/10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-lg font-semibold mb-4">{title}</h3>
    <div className="space-y-3">
      <div className="flex items-start">
        <div className="bg-red-100 text-red-700 rounded-full p-1 mr-2 mt-1">
          <span className="block w-4 h-4 text-center text-xs font-bold">✗</span>
        </div>
        <p className="text-slate-600">{pain}</p>
      </div>
      <div className="flex items-start">
        <div className="bg-[#009DD6]/20 text-[#009DD6] rounded-full p-1 mr-2 mt-1">
          <span className="block w-4 h-4 text-center text-xs font-bold">✓</span>
        </div>
        <p className="text-slate-600">{gain}</p>
      </div>
    </div>
    <p className="text-sm text-[#009DD6] font-medium mt-4">
      Avg. ROI: {roi} in first year
    </p>
  </div>
);

export default function HighROIUseCases() {
  const cardRefs = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".use-case-section",
        start: "top 80%",
      },
    });

    cardRefs.current.forEach((card, i) => {
      tl.to(
        card,
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power3.out",
        },
        i * 0.2
      ); // delay each card
    });
  }, []);

  return (
    <section className="bg-white use-case-section">
      <div className="container mx-auto px-4">
        {/* <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#009DD6]">
          High-ROI AI Use Cases
        </h2> */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black use-head">
          High-ROI AI Use Cases
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <UseCaseCard
              key={index}
              {...useCase}
              innerRef={(el) => (cardRefs.current[index] = el)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
