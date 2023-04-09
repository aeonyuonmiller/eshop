import { useRef } from "react";
import { m } from "framer-motion";
import ScrollBar from "./icons/ScrollBar";
import Card from "./Card";

function ImageSlider() {
  const ref = useRef(null);

  return (
    <>
    <ScrollBar ref={ref} />
    <m.div ref={ref} className="slider" initial={{ opacity: 0 }} animate={{ opacity: 1.1 }} exit={{ opacity: 0 }}>
      <Card src="./cube.png" url="product" title="cube" price="80,00 €" />
      <Card src="./glas.png" url="product" title="glas" price="120,00 €" />
      <Card src="./lava.png" url="product" title="lava" price="500,00 €" />
      <Card src="./mirror.png" url="product" title="mirror" price="1200,00 €" />
    </m.div>
    </>
  );
}

export default ImageSlider;