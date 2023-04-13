import React from 'react'
import Head from "next/head";
import { m } from "framer-motion";

// components
import ImageSlider from "./components/Slider";
import CloseButton from './components/icons/CloseButton'
import Product from "./components/Product";

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
        <Product src="./hoodie.png" title="Backside" />
        <Product src="./hoodie-front.png" title="Front with small print" />
        <Product src="./shirt.png" title="cube" />
        <Product src="./hoodie.png" title="neuer mensch air max" />
      </ImageSlider>

      <m.span initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: .8, duration: .6 } }} exit={{ opacity: 0, y: 20, transition: { duration: .6 } }}>
        <div className="price">79.99 €</div>
        <button className="snipcart-add-item"
          data-item-id="starry-night"
          data-item-price="79.99"
          data-item-description="High-quality replica of The Starry Night by the Dutch post-impressionist painter Vincent van Gogh."
          data-item-image="/hoodie.png"
          data-item-name="Hoodie"
          data-item-custom1-name="Size"
          data-item-custom1-options="S|M|L|XL"
        >
          add to cart
        </button>
      </m.span>

      
      <CloseButton />
    </>
  )
}

export default product