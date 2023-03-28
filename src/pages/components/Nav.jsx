import React from 'react'
import { m } from "framer-motion";

const Nav = () => {
    const group = {
        hide: { x: 1, transition:{ staggerChildren: 0.3, } },
        show: { x: 0, transition:{ staggerChildren: 0.3, }}
      }
  
      const item = {
        hide: { y: 20, opacity: 0 },
        show: { y: 0, opacity: 1, transition:{ ease: [.64, .62, .23, .99], duration: .8 }}
    }
  

  return (
      <nav>
        <m.ul initial="hide" animate="show" variant={group}>
              <m.li variant={item}>returns</m.li>
              <m.li variant={item}>shipping</m.li>
              <m.li variant={item}>privacy</m.li>
              <m.li variant={item}>instagram</m.li>
              <m.li variant={item}>youtube</m.li>
        </m.ul>
      </nav>
  )
}

export default Nav