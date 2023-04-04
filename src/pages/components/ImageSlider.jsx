import { useRef } from "react";
import { m, useScroll } from "framer-motion";

function ImageSlider() {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });

  
  const group = {
    hide: {},
    hover: {},
    show: { transition: { staggerChildren: 0.1, delayChildren: .7 }},
    exit: { opacity: 0 },
  }
  
  const item = {
    hide: { y: 20, opacity: 0, filter: "blur(6px)" },
    leave: {scale:1,objectPosition: "0% center"},
    hover: { scale: 1.1, objectPosition: "100% center", transition: { ease: [.98, 0, .2, 1.01], duration: 1 } },
    show: { y: 0, opacity: 1, objectPosition: "0% center", filter: "blur(0)", transition:{ ease: [.98,0,.2,1.01], duration: .6 }}
  }

  return (
    <>
    <svg id="progress" width="50" height="50" viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="30" pathLength="1" />
      <m.circle
        cx="50"
        cy="50"
        r="30"
        pathLength="0"
        className="indicator"
        style={{ pathLength: scrollXProgress }}
      />
    </svg>

    <m.div ref={ref} className="slider" initial="hide" animate="show" exit="exit" variants={group} data-mouse-down-at="0" data-prev-percentage="0">
        <m.img variants={item} className="image" draggable="false" src="./cube.png" animate={{ scale: 1, objectPosition: "0% center", transition: { type:"spring", damping: 18 }}} whileHover={{ scale: 1.1, objectPosition: "100% center", transition: { type: "spring", damping: 18 } }} />
        <m.img variants={item} className="image" draggable="false" src="./glas.png" animate={{ scale: 1, objectPosition: "0% center", transition: { type:"spring", damping: 18 }}} whileHover={{ scale: 1.1, objectPosition: "100% center", transition: { type:"spring", damping: 18 }}}/>
        <m.img variants={item} className="image" draggable="false" src="./lava.png" animate={{ scale: 1, objectPosition: "0% center", transition: { type:"spring", damping: 18 }}} whileHover={{ scale: 1.1, objectPosition: "100% center", transition: { type:"spring", damping: 18 }}}/>
        <m.img variants={item} className="image" draggable="false" src="./mirror.png" animate={{ scale: 1, objectPosition: "0% center", transition: { type:"spring", damping: 18 }}} whileHover={{ scale: 1.1, objectPosition: "100% center", transition: { type:"spring", damping: 18 }}}/>
      </m.div>
      </>
  );
}

export default ImageSlider;