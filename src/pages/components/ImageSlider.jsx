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

  return (
    <>
    <ScrollBar ref={ref} />

      <m.div layoutScroll ref={ref} className="slider" initial="hide" animate="show" exit="exit" variants={group} data-mouse-down-at="0" data-prev-percentage="0">
        <Card src="./cube.png" url="product" title="cube" price="80,00 €" />
        <Card src="./glas.png" url="product" title="glas" price="120,00 €" />
        <Card src="./lava.png" url="product" title="lava" price="500,00 €" />
        <Card src="./mirror.png" url="product" title="mirror" price="1200,00 €" />
     {/*  
      <m.img variants={item} className="image" draggable="false" src="./glas.png" animate={{ scale: 1, objectPosition: "0% center", transition: { type:"spring", damping: 18 }}} whileHover={{ scale: 1.1, objectPosition: "100% center", transition: { type:"spring", damping: 18 }}}/>
      <m.div animate={{ y:[0,10]}} transition={{duration:15}} className="placeholder">introverts • live • united ••• 2023</m.div>
      */}
    </m.div>
    </>
  );
}

export default ImageSlider;