import React from 'react'
import { m } from "framer-motion";
import Link from 'next/link'
import { useRouter } from 'next/router';

function Nav () {
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <>
      {/* visible nav */}
      {currentRoute === '/' ? 
      <m.nav initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0, transition:{ ease: "circOut", delay: 1 ,duration: 0.2 }}} exit={{ y: "100%", transition:{ duration: 0.4 }}}>
        <div>
          <Link scroll={false} tabIndex={2} className="underline" href="/returns">returns</Link>
          <Link scroll={false} tabIndex={2} className="underline" href="/shipping">shipping</Link>
          <Link scroll={false} tabIndex={2} className="underline" href="/privacy">privacy</Link>
          <Link scroll={false} tabIndex={2} className="underline" href="/imprint">imprint</Link>

        </div>
        
        <span>
          <a className='snipcart-checkout' href="/" tabIndex={1}>
            <div className="cart-icon"><span>🛒</span></div>
          </a>
        </span>
        </m.nav>
        :
        /* hidden nav */
        <m.nav animate={{ opacity: 0, y: 100, transition:{ ease: "circOut", duration: 0.2 }}}>
          <div>
            <Link scroll={false} tabIndex={2} className="underline" href="/returns">returns</Link>
            <Link scroll={false} tabIndex={2} className="underline" href="/shipping">shipping</Link>
            <Link scroll={false} tabIndex={2} className="underline" href="/privacy">privacy</Link>
            <Link scroll={false} tabIndex={2} className="underline" href="/imprint">imprint</Link>
          </div>
          <span>
            <a className='snipcart-checkout' href="/" tabIndex={1}>
              <div className="cart-icon"><span>🛒</span></div>
            </a>
          </span>
        </m.nav>
      }
    </>
  )
}

export default Nav