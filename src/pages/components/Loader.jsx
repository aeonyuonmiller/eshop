import React from 'react'
import { m } from "framer-motion";

const Loader = () => {
  return (
    <m.div animate={{ height: ["100%", "0%"], transition:{ ease:[.76,-0.01,.25,.98], duration: .5, delay: .15 }}} className='loader'>welcome</m.div>
  )
}

export default Loader