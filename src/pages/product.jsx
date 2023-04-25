import React from 'react'
import Head from "next/head";
import { m } from "framer-motion";

// components
import ImageSlider from "./components/Slider";
import CloseButton from './components/icons/CloseButton'
import Product from "./components/Product";
import Accordion from './components/Accordion';

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
        <Product src="./hoodie-front.png" title="Front with small print" />
        <Product src="./hoodie.png" title="Backside" />
        <Product src="./hoodie-front.png" title="Faux-Silk" />
        <Product src="./shirt.png" title="neuer mensch air max" />
        <section className="product-display">
          <div className="description">
            Material: 100% Cotton<br/><br/>
            <ul>
              <li>Gerippter Polokragen</li>
              <li>Kurzärmliges Design</li>
              <li>Röhrenförmiger Abschlüsse</li>
              <li>ufgesetzte Taschen</li>
              <li>Knopfverschluss</li>
              <li>Over Fit</li>
              <li>Das Model ist 187 cm groß und trägt die italienische Größe 48.</li>
            </ul>
            <Accordion question="Care" answer="Wash only by hand." />
            <Accordion question="Care" answer="Wash only by hand." />
            <Accordion question="Care" answer="Wash only by hand." />
          </div>
        </section>
      </ImageSlider>

      <m.span initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: .8, duration: .6 } }} exit={{ opacity: 0, y: 20, transition: { duration: .6 } }}>
        <div className="price">80.00 €</div>
        <button className="snipcart-add-item big-buy"
          data-item-id="starry-night"
          data-item-price="80.00"
          data-item-description="High-quality replica of The Starry Night by the Dutch post-impressionist painter Vincent van Gogh."
          data-item-image="/hoodie-front.png"
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