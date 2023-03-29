import React from 'react'
import { m } from "framer-motion";

const Layout = ({ children }) => {
  return (
    <m.div className='layout' initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 1 } }} exit={{ opacity: 0 }}>
      {children}
    </m.div>
  )
}

export default Layout