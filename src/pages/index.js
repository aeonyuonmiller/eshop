import Head from "next/head";
import { Inter } from "next/font/google";
import { m } from "framer-motion";
const inter = Inter({ subsets: ["latin"] });

import Plum from "./components/icons/Plum";

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
        <Plum />
      </m.div>

      <m.div
        className="scroller"
        initial={{ x: "100%" }}
        animate={{ x: "0", transition: { delay: 0.6, duration: 1 } }}
        exit={{ y: 20, opacity: 0 }}
      >
        <div className="scroller">
          <div>product 1</div>
          <div>product 2</div>
          <div>product 3</div>
          <div>product 4</div>
          <div>product 5</div>
        </div>
      </m.div>
    </>
  );
}
