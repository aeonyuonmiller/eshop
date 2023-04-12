import React from 'react'
import Head from "next/head";
import { m } from "framer-motion";

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

      <m.span initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: .8, duration: .6 } }} exit={{ opacity: 0, y: 20, transition: { duration: .6 } }}>
      <button className="snipcart-add-item"
        data-item-id="starry-night"
        data-item-price="79.99"
        data-item-description="High-quality replica of The Starry Night by the Dutch post-impressionist painter Vincent van Gogh."
        data-item-image="/cube.png"
        data-item-name="Cube"
        data-item-custom1-name="Frame color"
        data-item-custom1-options="Black|White"
      >
        add to cart</button></m.span>

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