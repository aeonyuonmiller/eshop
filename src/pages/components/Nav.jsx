import React from 'react'
import { m } from "framer-motion";

function Nav () {
    const group = {
        hide: { y: 10 },
        show: { y: 0, transition:{ staggerChildren: 0.1 }}
      }
  
      const item = {
        hide: { y: "100%", opacity: 0, filter: "blur(18px)" },
        show: { y: 0, opacity: 1, filter: "blur(0)", transition:{ ease: [.98,0,.2,1.01], duration: .4 }}
    }

  return (
      <nav>
        <m.ul initial="hide" animate="show" variants={group}>
            <m.li variants={item}>returns</m.li>
            <m.li variants={item}>shipping</m.li>
            <m.li variants={item}>privacy</m.li>
            <m.li variants={item}>instagram</m.li>
            <m.li variants={item}>youtube</m.li>
        </m.ul>
        
        <m.span initial={{ opacity: 0, scale:0.5, y:50, filter: "blur(18px)" }} animate={{ opacity:1, scale:1, y:0, filter: "blur(0)" }} transition={{ delay:0.7, duration:0.4 }}>
            <div className="cart-icon"></div>
        </m.span>
      </nav>
  )
}

export default Nav