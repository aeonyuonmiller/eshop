import { m } from "framer-motion";

function ImageSlider() {
    
    const group = {
        hide: { },
        show: { transition:{ staggerChildren:0.1, delayChildren:1 }}
      }
  
      const item = {
        hide: { y: 20, opacity: 0, filter: "blur(6px)" },
        hover: {scale: 1.1 },
        show: { y: 0, opacity: 1, filter: "blur(0)", transition:{ ease: [.98,0,.2,1.01], duration: .6 }}
    }

    return (
    <m.div initial="initial" animate="animate" exit="exit" variants={group} className="slider" data-mouse-down-at="0" data-prev-percentage="0">
        <m.img variants={item} whileHover="hover" className="image" draggable="false" src="./cube.png"/>
        <m.img variants={item} whileHover="hover" className="image" draggable="false" src="./glas.png"/>
        <m.img variants={item} whileHover="hover" className="image" draggable="false" src="./lava.png"/>
        <m.img variants={item} whileHover="hover" className="image" draggable="false" src="./mirror.png" />
        <m.img variants={item} whileHover="hover" className="image" draggable="false" src="./cube.png"/>
        <m.img variants={item} whileHover="hover" className="image" draggable="false" src="./glas.png"/>
        <m.img variants={item} whileHover="hover" className="image" draggable="false" src="./lava.png"/>
        <m.img variants={item} whileHover="hover" className="image" draggable="false" src="./mirror.png"/>
    </m.div>
  );
}

export default ImageSlider;
