import { m } from "framer-motion";
import ScrollBar from "./icons/ScrollBar";

function ImageSlider({children}) {

  return (
    
    <>
      <ScrollBar />
      
      <div className="slider-container">
         <m.div className="slider" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          {children}
        </m.div>
      </div>
    </>
  );
}

export default ImageSlider;