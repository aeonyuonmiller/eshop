import React from 'react'
import { m } from "framer-motion";

const Layout = ({ children, bgColor }) => {

  const bg = {
    backgroundColor: `${bgColor}`,
    };
  
  return (
    <m.div className='layout' style={bg} initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1 }}} exit={{ opacity: 0, transition:{ duration: .8, delay: .4}}}>
      {children}
    </m.div>
  )
}

export default Layout