import { m } from "framer-motion";

function ImageSlider() {

  return (
    <m.div className="slider" data-mouse-down-at="0" data-prev-percentage="0">
        <img className="image" draggable="false" src="./cube.png"/>
        <img className="image" draggable="false" src="./glas.png"/>
        <img className="image" draggable="false" src="./lava.png"/>
        <img className="image" draggable="false" src="./mirror.png" />
        <img className="image" draggable="false" src="./cube.png"/>
        <img className="image" draggable="false" src="./glas.png"/>
        <img className="image" draggable="false" src="./lava.png"/>
        <img className="image" draggable="false" src="./mirror.png"/>
    </m.div>
  );
}

export default ImageSlider;
