import { useRef } from "react";
import { m, useScroll } from "framer-motion";
import ScrollBar from "./icons/ScrollBar";
import Card from "./Card";

function ImageSlider() {
  const ref = useRef(null);
  // const { scrollXProgress } = useScroll({ container: ref });

  const group = {
    hide: {},
    hover: {},
    show: { transition: { staggerChildren: 0.1, delayChildren: .7 }},
    exit: { opacity: 0 },
  }
  
  const item = {
    hide: { y: 20, opacity: 0, filter: "blur(8px)" },
    show: { y: 0, opacity: 1, objectPosition: "0% center", filter: "blur(0)", transition:{ ease: [.98,0,.2,1.01], duration: .6 }},
    leave: {scale:1,objectPosition: "0% center"},
    hover: { scale: 1.1, objectPosition: "100% center", transition: { ease: [.98, 0, .2, 1.01], duration: 1 } },
  }

  return (
    <>
    <ScrollBar ref={ref} />

      <m.div ref={ref} className="slider" initial="hide" animate="show" exit="exit" variants={group} data-mouse-down-at="0" data-prev-percentage="0">
        <Card src="./cube.png" url="product" title="cube" />
        <Card src="./glas.png" url="product" title="glas" />
        <Card src="./lava.png" url="product" title="lava" />
        <Card src="./mirror.png" url="product" title="mirror" />
     {/*  
      <m.img variants={item} className="image" draggable="false" src="./glas.png" animate={{ scale: 1, objectPosition: "0% center", transition: { type:"spring", damping: 18 }}} whileHover={{ scale: 1.1, objectPosition: "100% center", transition: { type:"spring", damping: 18 }}}/>
      <m.div animate={{ y:[0,10]}} transition={{duration:15}} className="placeholder">introverts • live • united ••• 2023</m.div>
      */}
    </m.div>
    </>
  );
}

export default ImageSlider;