import React, { useRef } from "react";
import Head from "next/head";
import { Inter } from "next/font/google";
import { m, useScroll } from "framer-motion";
const inter = Inter({ subsets: ["latin"] });

// components
import Logo from "./components/icons/Logo";
import ImageSlider from "./components/Slider";
import Card from "./components/Card";

export default function Home() {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });

  return (
    <>
      <Head>
        <title>introvert</title>
        <meta name="description" content="comfortable in silence" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <m.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{
          y: -100,
          opacity: 0,
          transition: { ease: [0.98, 0, 0.2, 1.01], duration: 0.8 },
        }}
        transition={{ delay: 0.5 }}
        className="centerstage"
      >
        <Logo />
      </m.div>

      <ImageSlider ref={ref}>
        <Card
          src="./hoodie-front.png"
          url="/product"
          title="cube"
          price="80.00"
          desc="Hoodie Basic"
        />
        <Card 
          src="./shirt.png" 
          url="/product" 
          title="glas" 
          price="120.00" 
          desc="Shirt Classic"
        />
        <Card
          src="./lava.png"
          url="/product"
          title="Faux-Silk"
          price="500.00"
          desc="Shirt Classic"
        />
        <Card
          src="./mirror.png"
          url="product"
          title="mirror"
          price="1200.00"
          desc="Silk scarf"
        />
      </ImageSlider>
    </>
  );
}
