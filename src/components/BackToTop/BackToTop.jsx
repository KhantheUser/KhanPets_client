import React, { useEffect, useState } from "react";
import { AiOutlineDown } from "react-icons/ai";

export default function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setShow(true) : setShow(false);
    });
    return () => {
      window.removeEventListener("scroll", () => {
        window.scrollY > 50 ? setShow(true) : setShow(false);
      });
    };
  }, []);
  return (
    <div
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      style={{
        width: "40px",
        height: "40px",
        backgroundColor: "rgba(0,0,0,0.8)",
        position: "fixed",
        bottom: "4%",
        right: "2%",
        zIndex: "3",
      }}
      className={`rounded-md flex justify-center items-center text-white cursor-pointer ${
        show ? "" : "hidden"
      }`}
    >
      <AiOutlineDown className="text-lg hover:text-yellow-400  hover:rotate-180 transition-all duration-300" />
    </div>
  );
}
