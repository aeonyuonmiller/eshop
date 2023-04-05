import React, {useRef, forwardRef} from "react";
import { m, useScroll, useTransform } from "framer-motion"

function ScrollBar() {
    const targetRef = useRef(null);
    const { scrollXProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"],
    })
    const scrolled = useTransform(scrollXProgress, [0,1], [0, 204])

  return (
      <m.svg
        className="scrollbar"
      xmlns="http://www.w3.org/2000/svg"
      width="300"
      fill="none"
      viewBox="0 0 300 10"
    >
      <m.path
        initial={{ pathLength: 0, opacity: 0, pathOffset: 0 }}
        animate={{ pathLength:1, opacity:[0,1,1], pathOffset: 0, transition:{ delay:1.5, duration: .7, type: "easeOut" }}}
        exit={{ pathOffset: 1, x: 20, transition:{ delay:0, duration: .6, type: "easeIn" }}}
        stroke="#000"
        strokeLinecap="round"
        strokeOpacity="0.4"
        strokeWidth="9"
        d="M4 5h291"
      ></m.path>
          <m.path
              style={{ x: scrolled }}
        initial={{ pathLength: 0, opacity: 0, pathOffset: 0, offsetPath: 0 }}
        animate={{ pathLength:.3, pathOffset: 0, opacity:[0,1,1], offsetPath: 0, transition:{ delay:1.5, duration: .7, type: "easeOut" }}}
        exit={{ pathLength:.3, x: 20, strokeWidth:1, pathOffset: 1, offsetPath: 1, transition:{ delay:0, duration: .6, type: "easeIn" }}}
        stroke="#ffffff"
        strokeLinecap="round"
        strokeWidth="3"
        d="M4 5h291"
      />
    </m.svg>
  );
}

export default ScrollBar;