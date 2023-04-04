import React from 'react'
import Link from 'next/link'

const close = () => {
    return (
        <Link className='close' href="/" tabIndex={1}>
            close
        </Link>
  )
}

export default close