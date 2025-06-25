import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import 'remixicon/fonts/remixicon.css';

gsap.registerPlugin(ScrollTrigger);

const WorksSection = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const cards = cardsRef.current;
    gsap.set(cards, { y: 920 });

    gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        pin: true,
        start: 'top top',
        end: `+=${cards.length * 400}`,
        scrub: 1,
        anticipatePin: 1,
      },
    }).to(cards, {
      y: 0,
      stagger: 0.5,
      ease: 'power2.out',
    });
  }, []);

  const cards = [
    {
      title: 'Techable',
      description: 'Specialized in providing high-quality refurbished Apple products at competitive prices.',
      image: '/Sellmac-Project.webp',
    },
    {
      title: 'Sellmac',
      description: 'Innovating sustainable solutions to power the future responsibly and efficiently.',
      image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=2475&auto=format&fit=crop',
    },
    {
      title: 'Apple Tech',
      description: 'A full-stack marketing agency delivering engaging digital experiences.',
      image: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=2670&auto=format&fit=crop',
    },
    {
      title: 'Techable',
      description: 'Specialized in providing high-quality refurbished Apple products at competitive prices.',
      image: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=2670&auto=format&fit=crop',
    },
  ];

  return (
    <>
      <link
        href="https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css"
        rel="stylesheet"
      />
      <style>{`
        body {
          font-family: 'Poppins', sans-serif;
          background-color: #EAE9E5;
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.08'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
          overflow-x: hidden;
        }

        .my-works {
          width: 100%;
          padding: 60px 0;
        }

        .project-container {
          max-width: 1680px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .works-header {
          text-align: center;
          margin-bottom: 20px;
        }

        .works-header-title h2 {
          font-size: 3.5rem;
          margin: 0 0 15px 0;
          font-weight: 700;
        }

        .works-header-subtitle p {
          margin: auto;
          font-size: 1.1rem;
          line-height: 1.6;
          color: #555;
          max-width: 38%;
        }

        .card-row {
          display: flex;
          flex-direction: row;
          align-items: flex-end;
          justify-content: center;
          gap: 30px;
          height: 600px;
          position: relative;
        }

        .work-item {
          width: 480px;
          min-width: 220px;
          height: 550px;
          border-radius: 25px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          background: #fff;
          position: relative;
          will-change: transform;
        }

        .work-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s cubic-bezier(0.4,0,0.2,1);
          z-index: 1;
          position: relative;
        }

        .work-item:hover img {
          transform: scale(1.05);
        }

        .dark-card {
          background-color: #1a2a2a;
          color: #fff;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .dark-card img {
          opacity: 0.5;
          position: absolute;
          top: 0;
          left: 0;
          z-index: 1;
        }

        .card-content {
          padding: 40px;
          z-index: 2;
          opacity: 0;
          transform: translateY(-60px);
          transition: .9s all ease;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: end;
        }

        .work-item.dark-card:hover .card-content {
          opacity: 1;
          transform: translateY(0px);
        }

        .dark-card h3 {
          font-size: 2.5rem;
          margin: 0 0 10px 0;
          color: #fff;
          font-weight: 700;
        }

        .dark-card p {
          font-size: 1rem;
          line-height: 1.6;
          max-width: 80%;
          color: #fff;
        }

        .card-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 40px;
          z-index: 2;
        }

        .card-arrow {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          border: 3px solid #ccc;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 30px;
          cursor: pointer;
          transition: all 0.3s ease;
          position: absolute;
          bottom: 30px;
          right: 40px;
          transform: rotate(45deg);
        }

        .card-arrow:hover {
          background-color: #fff;
          color: #111;
          transform: rotate(0deg);
        }

        @media (max-width: 1200px) {
          .work-item { width: 260px; }
        }

        @media (max-width: 900px) {
          .work-item { width: 180px; }
        }

        @media (max-width: 700px) {
          .work-item { width: 90vw; height: 300px; margin-bottom: 20px; }
        }
      `}</style>

      <section className="my-works" ref={sectionRef}>
        <div className="works-header">
          <div className="works-header-title">
            <h2>Our Projects</h2>
          </div>
          <div className="works-header-subtitle">
            <p>
              Take a closer look at some of our recent work—each project reflects our commitment to
              purposeful design and precise execution.
            </p>
          </div>
        </div>
        <div className="project-container">
          <div className="card-row">
            {cards.map((card, i) => (
              <div
                className="work-item dark-card"
                key={i}
                ref={(el) => (cardsRef.current[i] = el)}
              >
                <img src={card.image} alt={`Work ${i + 1}`} />
                <div className="card-content">
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                  <div className="card-footer">
                    <div className="card-arrow">
                      <i className="ri-arrow-right-line"></i>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WorksSection;
