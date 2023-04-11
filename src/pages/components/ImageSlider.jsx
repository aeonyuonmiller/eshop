import { useRef } from "react";
import { m } from "framer-motion";
import ScrollBar from "./icons/ScrollBar";

function ImageSlider({children}) {
  const ref = useRef(null);

  return (
    <>
    <ScrollBar ref={ref} />
    <m.div ref={ref} className="slider" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      {children}
    </m.div>
    </>
  );
}

export default ImageSlider;