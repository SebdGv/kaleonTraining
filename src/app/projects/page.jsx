"use client";

import ReactLenis from "@studio-freight/react-lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

const Projects = () => {
  const imagesRef = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    imagesRef.current = imagesRef.current.slice(0, 4);

    imagesRef.current.forEach((img, index) => {
      // Alternance entre gauche (-200) et droite (200)
      const startX = index % 2 === 0 ? -400 : 400;

      gsap.fromTo(
        img,
        {
          opacity: 0,
          x: startX, // Position initiale alternée
        },
        {
          opacity: 1,
          x: 0,
          duration: 1.3,
          delay: index * 0.1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: img,
            start: "top 80%",
            toggleActions: "play reverse restart reverse",
            markers: true,
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <ReactLenis root>
      <div className="projects">
        <div className="images">
          {["/img1.jpg", "/img2.jpg", "/img3.jpg", "/img4.jpg"].map(
            (src, index) => (
              <img
                key={index}
                ref={(el) => (imagesRef.current[index] = el)}
                src={src}
                alt={`forest photo ${index + 1}`}
                style={{ opacity: 0 }}
              />
            )
          )}
        </div>
      </div>
    </ReactLenis>
  );
};

export default Projects;
