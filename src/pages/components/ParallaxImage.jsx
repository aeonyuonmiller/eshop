import { m, useScroll, useTransform } from "framer-motion";
import { useEffect } from "react";

const ParallaxImage = ({ imageUrl }) => {
  // Get the viewport scroll position
  const { scrollYProgress } = useScroll();

  // Define the x-axis transform
  const xRange = [0, 1];
  const xTransform = useTransform(scrollYProgress, xRange, [-200, 200]);

  // Set up an effect to re-render the component when the image loads
  useEffect(() => {
    xTransform.onChange(() => window.requestAnimationFrame(() => {}));
  }, [xTransform]);

  // Return the image element with the Framer Motion properties
  return (
    <m.img
      src={imageUrl}
      style={{ x: xTransform }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    />
  );
};
