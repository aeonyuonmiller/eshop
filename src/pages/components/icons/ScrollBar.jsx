import React, {useRef, forwardRef} from "react";
import { m, useScroll, useTransform } from "framer-motion"

function ScrollBar({ref}) {
    const targetRef = useRef(null);
    const { scrollXProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"],
    })
    const opacity = useTransform(scrollXProgress, [0,0.5], [1, 0])

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
        animate={{ pathLength:1, opacity:[0,1,1], pathOffset: 0, transition:{ delay:2, duration: 1, type: "easeOut" }}}
        exit={{ pathOffset: 1, transition:{ delay:0, duration: .6, type: "easeIn" }}}
        stroke="#000"
        strokeLinecap="round"
        strokeOpacity="0.2"
        strokeWidth="9"
        d="M4 5h291"
      ></m.path>
        <m.path
        initial={{ pathLength: 0, opacity: 0, pathOffset: 0, offsetPath: 0 }}
        animate={{ pathLength:.3, pathOffset: 0, opacity:[0,1,1], offsetPath: 0, transition:{ delay:2, duration: 1, type: "easeOut" }}}
        exit={{ pathLength:.3, pathOffset: 1, offsetPath: 1, transition:{ delay:0, duration: .6, type: "easeIn" }}}
        stroke="#ffffff"
        strokeLinecap="round"
        strokeWidth="3"
        d="M4 5h291"
      />
    </m.svg>
  );
}

export default ScrollBar;