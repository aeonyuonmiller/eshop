import React from 'react'
import { m } from "framer-motion";
import Link from 'next/link'

function Nav () {
    const group = {
        hide: { },
        show: { transition:{ staggerChildren:0.1, delayChildren:0.5 }}
      }
  
      const item = {
        hide: { y: 20, opacity: 0, filter: "blur(6px)" },
        show: { y: 0, opacity: 1, filter: "blur(0)", transition:{ ease: [.98,0,.2,1.01], duration: .6 }}
    }

  return (
      <nav>
      <m.div initial="hide" animate="show" variants={group}>
            <m.span variants={item}><Link tabIndex={2} className="underline" href="/">home</Link></m.span>
            <m.span variants={item}><Link tabIndex={2} className="underline" href="/returns">returns</Link></m.span>
            <m.span variants={item}><Link tabIndex={2} className="underline" href="/shipping">shipping</Link></m.span>
            <m.span variants={item}><Link tabIndex={2} className="underline" href="/privacy">privacy</Link></m.span>
            <m.a tabIndex={2} className="underline" variants={item}>instagram</m.a>
            <m.a tabIndex={2} className="underline" variants={item}>youtube</m.a>
        </m.div>
        
        <m.span><Link href="/" tabIndex={1} initial={{ opacity: 0, scale:0, y:50 }} animate={{ opacity:1, scale:1, y:0 }} transition={{ delay:.8, duration:0.4 }}>
        <div className="cart-icon"></div>
        </Link>
        </m.span>
      </nav>
  )
}

export default Nav