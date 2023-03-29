import "@/styles/globals.css";
import {
  LazyMotion,
  domAnimation,
  AnimatePresence,
  MotionConfig,
} from "framer-motion";
import Loader from "./components/Loader";
import Nav from "./components/Nav";

export default function App({ Component, pageProps, router }) {
  return (
    <>
      <MotionConfig reducedMotion="user">
        <LazyMotion strict features={domAnimation}>
          <AnimatePresence mode="wait">
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
          <Nav />
          <Loader />
        </LazyMotion>
      </MotionConfig>
    </>
  );
}
