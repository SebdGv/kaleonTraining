"use client";
import { useEffect } from "react";

const Cursor = () => {
  useEffect(() => {
    const moveCursor = (e) => {
      const cursor = document.querySelector(".cursor");
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return <div className="cursor"></div>;
};

export default Cursor;
