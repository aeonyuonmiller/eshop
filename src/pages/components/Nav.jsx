import React from 'react'
import { m } from "framer-motion";
import Link from 'next/link'

function Nav () {
    const group = {
        hide: { opacity:0 },
        show: { opacity:1, transition:{ staggerChildren:0.2, delay:0.6 }}
      }
  
      const item = {
        hide: { y: "100%", opacity: 0, filter: "blur(6px)" },
        show: { y: "0%", opacity: 1, filter: "blur(0)", transition:{ ease: [.98,0,.2,1.01], duration: .6 }}
    }

  return (
      <nav>
        <m.div initial="hide" animate="show" variants={group}>
            <Link className="capsule" href="/returns" variants={item}>returns</Link>
            <Link className="capsule" href="/shipping" variants={item}>shipping</Link>
            <Link className="capsule" href="/privacy" variants={item}>privacy</Link>
            <a className="capsule" variants={item}>instagram</a>
            <a className="capsule" variants={item}>youtube</a>
        </m.div>
        
        <m.span initial={{ opacity: 0, scale:0.5, y:50, filter: "blur(18px)" }} animate={{ opacity:1, scale:1, y:0, filter: "blur(0)" }} transition={{ delay:1, duration:0.4 }}>
            <div className="cart-icon"></div>
        </m.span>
      </nav>
  )
}

export default Nav