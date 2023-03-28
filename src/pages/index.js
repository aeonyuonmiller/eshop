import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { m } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>shop</title>
        <meta name="description" content="online shop for introvert" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <m.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className={styles.center}
        >
          <Image
            className={styles.logo}
            src="/next.svg"
            alt="Next.js Logo"
            width={360}
            height={74}
            priority
          />
        </m.div>
      </main>
    </>
  );
}
