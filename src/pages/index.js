import Head from "next/head";
import { Inter } from "next/font/google";
import { m } from "framer-motion";
const inter = Inter({ subsets: ["latin"] });
import Logo from "./components/icons/Logo";
import ImageSlider from "./components/ImageSlider";

export default function Home() {
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
          y: -50,
          opacity: 0,
          transition: { ease: [0.98, 0, 0.2, 1.01], duration: 0.6 },
        }}
        transition={{ delay: 0.5 }}
        className="centerstage"
      >
        <Logo />
      </m.div>

      <ImageSlider />
    </>
  );
}
