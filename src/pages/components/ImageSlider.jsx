import { m } from "framer-motion";

function ImageSlider() {
    
    const group = {
        hide: {},
        hover: {},
        show: { transition:{ staggerChildren:0.1, delayChildren:1 }}
      }
  
      const item = {
        hide: { y: 20, opacity: 0, filter: "blur(6px)" },
        hover: { scale: 1.1, objectPosition: "100% center", transition: { ease: [.98, 0, .2, 1.01], duration: 1 } },
        show: { y: 0, opacity: 1, filter: "blur(0)", transition:{ ease: [.98,0,.2,1.01], duration: .6 }}
    }

    return (
    <m.div initial="hide" animate="show" exit="exit" variants={group} className="slider" data-mouse-down-at="0" data-prev-percentage="0">
        <m.img variants={item} className="image" draggable="false" src="./cube.png" whileHover={{ scale: 1.1, objectPosition: "100% center", transition: { type:"spring", damping: 18 }}}/>
        <m.img variants={item} className="image" draggable="false" src="./glas.png" whileHover={{ scale: 1.1, objectPosition: "100% center", transition: { type:"spring", damping: 18 }}}/>
        <m.img variants={item} className="image" draggable="false" src="./lava.png" whileHover={{ scale: 1.1, objectPosition: "100% center", transition: { type:"spring", damping: 18 }}}/>
        <m.img variants={item} className="image" draggable="false" src="./mirror.png" whileHover={{ scale: 1.1, objectPosition: "100% center", transition: { type:"spring", damping: 18 }}}/>
    </m.div>
  );
}

export default ImageSlider;
