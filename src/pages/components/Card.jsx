import Link from 'next/link'
import React from 'react'
import { m, useMotionValue, useTransform, animate } from "framer-motion";


const Card = ({ url = "", src = "", title = "", price = "" }) => {
  const item = {
    hide: { y: 20, opacity: 0 },
    show: { scale: 1, y: 0, opacity: 1, transition:{ ease: [.98,0,.2,1.01], duration: .6 }} ,
    hover: { scale: 1.03, transition: { type: "spring", damping: 18 }},
    exit: { scale: 1.5, transition: { type: "spring", damping: 18 }},
    transition: { ease: [.29,.84,.23,1.03], duration: .4 }
  }

  // rotate div from mouse position
  const x = useMotionValue(200);
  const y = useMotionValue(200);

  const rotateX = useTransform(x, [0, 400], [-40, 40]);
  const rotateY = useTransform(y, [0, 400], [-40, 40]);

  function handleMouse(event) {
      const rect = event.currentTarget.getBoundingClientRect();

      x.set(event.clientX - rect.left);
      y.set(event.clientY - rect.top);
  }
    
    
    return (
        <m.section className="card" 
        style={{
          display: "flex",
          perspective: 400
      }}
      onMouseMove={handleMouse}
      onMouseLeave={() => {
          animate(x, 200);
          animate(y, 200);
      }}>
        <button className="snipcart-add-item buy"
                data-item-id="starry-night"
                data-item-price="79.99"
                data-item-description="High-quality replica of The Starry Night by the Dutch post-impressionist painter Vincent van Gogh."
                data-item-image="/hoodie-front.png"
                data-item-name="Hoodie"
                data-item-custom1-name="Size"
                data-item-custom1-options="S|M|L|XL"
              >
                Add to cart
              </button>
          <Link tabIndex="1" aria-labelledby={title} prefetch href={url} scroll={false}>
            <m.img loading="lazy" style={{ x: rotateX, y: rotateY }} className="image" variants={item} src={src} transition="transition" animate="show" whileHover="hover" exit="exit" draggable="false" />
              <span className='sold-out'>Sold out</span>
            <m.div className='content' viewport={{ amount: 1 }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0, transition:{ ease: [.98,0,.2,1.01], duration: .6, delay: .1 }}}>
              <span>{title}</span>
              <span>{price}</span>
            </m.div>
          </Link>
        </m.section>
    )
}

export default Card