"use client";
import { useGSAP } from "@gsap/react";
import ReactLenis from "@studio-freight/react-lenis";
import gsap from "gsap";
import { useRef } from "react";
import SplitType from "split-type";

gsap.registerPlugin(useGSAP);

export default function Home() {
  const container = useRef();

  useGSAP(
    () => {
      const heroText = new SplitType(".home h1", { types: "chars" });
      gsap.set(heroText.chars, { y: 450 });

      gsap.to(heroText.chars, {
        y: 0,
        duration: 1,
        stagger: 0.075,
        ease: "power4.out",
        delay: 0.75,
      });
      // Animation pour "2020"
      const yearText = new SplitType(".home span", {
        types: "chars",
      });
      gsap.set(yearText.chars, { y: 450 });

      gsap.to(yearText.chars, {
        y: 0,
        duration: 1,
        stagger: 0.075,
        ease: "power4.out",
        delay: 0.85,
      });
    },
    { scope: container }
  );

  return (
    <ReactLenis root>
      <div className="home" ref={container}>
        <h1>Vosges</h1>
        <div className="hidden">
          <span>2020</span>
        </div>
      </div>
    </ReactLenis>
  );
}
