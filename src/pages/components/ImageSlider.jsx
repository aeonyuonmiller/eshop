import React, { useRef } from "react";
import { m, useScroll, useTransform } from "framer-motion";

function ImageSlider({ children}) {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({
      container: ref,
      offset: ["start end", "end start"],
  })
  const scrolled = useTransform(scrollXProgress, [0,1], [0, 204])

  return (
    
    <>
    <svg
      className="scrollbar"
      xmlns="http://www.w3.org/2000/svg"
      width="240"
      fill="none"
      viewBox="0 0 300 10"
    >
      <m.path
        initial={{ pathLength: 0, opacity: 0, pathOffset: 0 }}
        animate={{ pathLength:1, opacity:[0,1,1], pathOffset: 0, transition:{ delay:1, duration: .7, type: "easeOut" }}}
        exit={{ pathLength:0, pathOffset: 1, x: 20, transition:{ delay:0, duration: .6, type: "easeIn" }}}
        stroke="#000"
        strokeLinecap="round"
        strokeOpacity="0.16"
        strokeWidth="9"
        d="M4 5h291"
      ></m.path>
      <m.path
        style={{ x: scrolled }}
        initial={{ pathLength: 0, filter: "blur(18px)", opacity: 0, pathOffset: 0 }}
        animate={{ pathLength:.3,filter: "blur(0)", pathOffset: 0, opacity:[0,1,1], transition:{ delay:1.5, duration: .7, type: "easeOut" }}}
        exit={{ pathLength: .3, opacity: 0, transition: { delay: 0, duration: .2 } }}
        stroke="#ededed"
        strokeLinecap="round"
        strokeWidth="3"
        d="M4 5h291"
      />
    </svg>
      
      <div className="slider-container" ref={ref}>
         <m.div className="slider" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          {children}
        </m.div>
      </div>
    </>
  );
}

export default ImageSlider;