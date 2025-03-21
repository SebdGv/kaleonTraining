"use client";

import { useGSAP } from "@gsap/react";
import ReactLenis from "@studio-freight/react-lenis";
import gsap from "gsap";
import { useRef } from "react";
import SplitType from "split-type";

gsap.registerPlugin(useGSAP);

const Info = () => {
  const container = useRef();

  useGSAP(
    () => {
      const text = new SplitType(".info p ", {
        types: "lines",
        tagName: "div",
        lineClass: "line",
      });
      text.lines.forEach((line) => {
        const content = line.innerHTML;
        line.innerHTML = `<span>${content}</span>`;
      });

      gsap.set(".info p .line span", {
        y: 200,
        display: "block",
      });

      gsap.to(".info p .line span", {
        y: 0,
        duration: 2,
        stagger: 0.075,
        ease: "power4.out",
        delay: 0.25,
      });
      return () => {
        if (text) text.revert();
      };
    },
    { scope: container }
  );

  return (
    <ReactLenis root>
      <div className="info" ref={container}>
        <div className="col">
          <img src="/portrait.jpg" alt="portrait" />
        </div>
        <div className="col">
          <p>
            Discover how local families enjoy unforgettable moments in the lush
            Vosges forests. Children run freely along shaded trails while
            parents appreciate breathtaking mountain vistas. Where family bonds
            strengthen with each step through this magnificent landscape.
          </p>
        </div>
      </div>
    </ReactLenis>
  );
};

export default Info;
