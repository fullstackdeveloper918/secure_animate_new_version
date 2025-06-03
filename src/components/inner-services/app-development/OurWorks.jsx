import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import WorkCard from "../components/Cards"; // Adjust path if needed

gsap.registerPlugin(ScrollTrigger);

export default function WorkShowcase() {
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: index * 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  const projects = [
    {
      title: "HealthPlus Mobile App",
      description:
        "HIPAA-compliant telehealth platform with video consultations and prescription management.",
      href: "/case-studies/healthplus",
      image: "../../assets/img/inner-service/service/HealthPlus-Mobile-App.jpg",
    },
    {
      title: "FinTech Dashboard",
      description:
        "Real-time financial analytics platform with secure transaction processing and reporting.",
      href: "/case-studies/fintech",
      image: "../../assets/img/inner-service/service/FinTech-Dashboard.jpg",
    },
    {
      title: "E-commerce Platform",
      description:
        "Scalable e-commerce solution with inventory management and payment processing.",
      href: "/case-studies/ecommerce",
      image: "../../assets/img/inner-service/service/E-commerce-Platform.jpg",
    },
  ];

  return (
    <section className="bg-slate-50 our-work-serv-sec">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Work
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div key={index} ref={(el) => (cardsRef.current[index] = el)}>
              <WorkCard {...project} />
            </div>
          ))}
        </div>

        <div className="text-center">
          <butonn asChild>
            <Link href="/case-studies">
              View All Case Studies
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </butonn>
        </div>
      </div>
    </section>
  );
}
