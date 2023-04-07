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
    
    return (
        <div className='card'>
            <Link tabIndex="1" aria-labelledby={title} prefetch href={url}>
                <m.img loading="lazy" className="image" variants={item} draggable="false" src={src} animate={{ scale: 1, objectPosition: "0% center", transition: { type: "spring", damping: 18 } }} whileHover={{ scale: 1.1, objectPosition: "100% center", transition: { type: "spring", damping: 18 } }} />
                <div className='content'><span>{title}</span><strong>{price}</strong></div>
            </Link>
        </div>
    )
}

export default Card