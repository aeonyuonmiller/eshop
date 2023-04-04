import React from 'react'
import Link from 'next/link'
import { m } from "framer-motion";

const close = () => {
    return (
        <m.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
            <Link className='close' href="/" tabIndex={1}>
                close
            </Link>
        </m.div>

  )
}

export default close