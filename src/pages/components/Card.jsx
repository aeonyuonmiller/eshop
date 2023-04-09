import Link from 'next/link'
import React from 'react'
import { m } from "framer-motion";


const Card = ({ url = "", src = "", title = "", price = "" }) => {
  const item = {
    hide: { y: 20, opacity: 0, filter: "blur(6px)" },
    show: { y: 0, opacity: 1, objectPosition: "0% center", filter: "blur(0px)", transition:{ ease: [.98,0,.2,1.01], duration: .6 }},
    hover: { scale: 1.1, objectPosition: "100% center", transition: { ease: [.98, 0, .2, 1.01], duration: 1 } },
    leave: {scale:1, objectPosition: "0% center"},
  }
    
  const copy = {
    hide: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition:{ ease: [.98,0,.2,1.01], duration: .6 }},
    leave: {scale:1, objectPosition: "0% center"},
  }
    
    return (
        <m.section className="card" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
          <Link tabIndex="1" aria-labelledby={title} prefetch href={url}>
            <m.img loading="lazy" className="image" variants={item} draggable="false" src={src} animate={{ scale: 1, objectPosition: "0% center", transition: { type: "spring", damping: 18 } }} whileHover={{ scale: 1.1, objectPosition: "100% center", transition: { type: "spring", damping: 18 } }} />
            <m.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0, transition:{ ease: [.98,0,.2,1.01], duration: .6, delay: .1 }}} className='content'>
              <span>{title}</span>
              <strong>{price}</strong>
            </m.div>
          </Link>
        </m.section>
    )
}

export default Card