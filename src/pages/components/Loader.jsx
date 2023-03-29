import React from 'react'
import { m } from "framer-motion";

const Loader = () => {
  return (
    <m.div initial={{ height: "100vh" }} animate={{ height: "0vh", transition: { ease: [.98,0,.2,1.01], duration: .8, delay: 0 }}} className='loader'>
      <m.p style="position: absolute" initial={{ opacity: 1 }} animate={{ opacity: 0, transition: { duration: .6, delay: .5 } }}>
        comfortable in silence
      </m.p>
    </m.div>
  )
}

export default Loader