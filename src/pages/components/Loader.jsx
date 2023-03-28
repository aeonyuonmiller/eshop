import React from 'react'
import { m } from "framer-motion";

const Loader = () => {
  return (
    <m.div initial={{ height: "100vh" }} animate={{ height: ["100vh", "0vh"], transition: { ease: [.98,0,.2,1.01], duration: .5, delay: .15 }}} className='loader'>
      <m.p initial={{ opacity: 1 }} animate={{ opacity: 0, transition: { duration: .6 } }}>
        comfortable in silence
      </m.p>
    </m.div>
  )
}

export default Loader