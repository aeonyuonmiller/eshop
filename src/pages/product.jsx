import React from 'react'
import Head from "next/head";

// components
import ImageSlider from "./components/ImageSlider";
import CloseButton from './components/icons/CloseButton'
import Card from "./components/Card";

const product = () => {
  return (
    <>
      <Head>
        <title>introvert • product</title>
        <meta name="description" content="comfortable in silence" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ImageSlider>
        <Card src="./cube.png" url="/" title="description" price="80,00 €" />
        <Card src="./cube.png" url="/" title="side-view everything you could wish for in a handbag this size." price="" />
        <Card src="./cube.png" url="/" title="inside-view" price="500,00 €" />
      </ImageSlider>
      
      <CloseButton />
    </>
  )
}

export default product