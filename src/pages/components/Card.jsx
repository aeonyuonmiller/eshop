import Link from 'next/link'
import React from 'react'
import { m, layout } from "framer-motion";


const Card = ({ url = "", src = "", title = "", price = "" }) => {
  const item = {
    hide: { y: 20, opacity: 0 },
    // show: { scale: 1, y: 0, opacity: 1, filter: "blur(0px)", transition:{ ease: [.98,0,.2,1.01], duration: .6 }},
    show: { scale: 1, y: 0, opacity: 1, transition:{ ease: [.98,0,.2,1.01], duration: .6 }} ,
    hover: { scale: 1.03, transition: { type: "spring", damping: 18 }},
    exit: { scale: 1.5, transition: { type: "spring", damping: 18 }},
    transition: { type: "spring", damping: 18 }
  }
    
    
    return (
        <m.section className="card">
          <Link tabIndex="1" aria-labelledby={title} prefetch href={url} scroll={false}>
            <m.img loading="lazy" className="image" variants={item} src={src}  transition="transition" animate="show" whileHover="hover" exit="exit" draggable="false" />
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