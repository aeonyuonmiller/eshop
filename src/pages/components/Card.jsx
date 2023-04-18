import Link from 'next/link'
import React from 'react'
import { m, useMotionValue, useTransform, animate } from "framer-motion";


const Card = ({ url = "", src = "", title = "", price = "", desc = "" }) => {
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

  const moveX = useTransform(x, [0, 400], [-40, 40]);
  const moveY = useTransform(y, [0, 400], [-15, 15]);

  function handleMouse(event) {
      const rect = event.currentTarget.getBoundingClientRect();

      x.set(event.clientX - rect.left);
      y.set(event.clientY - rect.top);
  }
    
    
    return (
    <m.section className="card" 
      style={{
        perspective: 600
      }}
      onMouseMove={handleMouse}
      onTouchMove={handleMouse}
      onMouseLeave={() => {
          animate(x, 200);
          animate(y, 200);
      }}
      onTouchEnd={() => {
        animate(x, 200);
        animate(y, 200);
      }}
    >
      <m.button 
        className="snipcart-add-item buy"
        data-item-id={title}
        data-item-price={price}
        data-item-description={desc}
        // data-item-image="/hoodie-front.png"
        data-item-image={src}
        data-item-name={title}
        data-item-custom1-name="Size"
        data-item-custom1-options="S|M|L|XL"
        viewport={{ amount: 1 }}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1, transition:{ type: "spring", damping: 18, delay: .6 }}}
        exit={{ opacity: 0, scale: 0.9 }}
      >
        Add to cart
      </m.button>
        <Link tabIndex="1" aria-labelledby={title} prefetch href={url} scroll={false}>
          <m.img loading="lazy" style={{ x: moveX, y: moveY }} className="image" variants={item} src={src} transition="transition" animate="show" whileHover="hover" exit="exit" draggable="false" />
          <m.div className='content' viewport={{ amount: 1 }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0, transition:{ ease: [.98,0,.2,1.01], duration: .6, delay: .1 }}}>
            <span>{title}</span>
            <span>{price}</span>
          </m.div>
          <span className='sold-out'>Sold out</span>
        </Link>
      </m.section>
    )
}

export default Card