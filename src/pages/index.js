import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
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
      <main className={styles.main}>
        <m.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{
            y: -50,
            opacity: 0,
            transition: { ease: [0.98, 0, 0.2, 1.01], duration: 0.6 },
          }}
          transition={{ delay: 0.5 }}
          className={styles.center}
        >
          {/* <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={360}
            height={300}
            priority
          /> */}
          <Plum />
        </m.div>
      </main>
    </>
  );
}
