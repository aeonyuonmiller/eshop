import React from 'react'
import Head from "next/head";
import Layout from './components/Layout'
import CloseButton from './components/icons/CloseButton'
import { m } from "framer-motion";

const imprint = () => {
  return (
    <>
      <Head>
        <title>introvert • privacy</title>
        <meta name="description" content="comfortable in silence" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout bgColor="#4624bf">
        <h1>Imprint</h1>
        <m.span initial={{y: 30, opacity: 0}} animate={{y: 0, opacity:1, transition:{ease: [.3,0,.2,1.01], duration: 1.2, delay: .4}}} exit={{y: -30, opacity: 0, transition:{ease: [.3,0,.2,1.01], duration: .6}}}>
           <h5>INTROVERT worldwide</h5>
          <p>
            Andreas Y. Müller<br />
            Stuttgarter Strasse 41<br />
            aym1@mail.com<br />
            0152 0404 0022<br />
          </p>

          <p>
            trade register number (if applicable)<br />
            tax identification number (if applicable)<br />
            other relevant registration numbers (if applicable)
          </p>

          <h5>Managing Director</h5>
          <p>
            name of managing director<br />
            Registered in: <strong>Germany</strong><br />
            Court of registration: [Insert name of the court where the company is registered]<br />
            VAT identification number: [Insert your VAT identification number].
          </p>
        </m.span>

        <m.span initial={{y: 30, opacity: 0}} animate={{y: 0, opacity:1, transition:{ ease: [.3,0,.2,1.01], duration: 1.2, delay: .8}}} exit={{y: -30, opacity: 0, transition:{ease: [.3,0,.2,1.01], duration: .6, delay: .05}}}>
        <p>Online dispute resolution in accordance with Article 14, Section 1 ODR-VO: The European Commission provides a platform for online dispute resolution (OS) which can be found at https://ec.europa.eu/consumers/odr/. We are not obliged and unwilling to participate in a dispute settlement procedure before a consumer arbitration board.</p>
        <h5>Disclaimer</h5>
        <p>Despite careful control of the contents, we do not assume any liability for the contents of external links. The operators of the linked pages are solely responsible for the content of their pages.</p>
        <h5>Copyright</h5>
        <p>The contents and works on these pages created by the site operator are subject to German copyright law. The reproduction, editing, distribution and any kind of use outside the limits of copyright law require the written consent of the respective author or creator. Downloads and copies of these pages are only permitted for private, non-commercial use. Insofar as the content on this site was not created by the operator, the copyrights of third parties are respected. In particular, third-party content is identified as such. If you become aware of a copyright infringement, please inform us accordingly. If we become aware of any infringements, we will remove such content immediately.</p>
        </m.span>
      </Layout>

      <CloseButton />
    </>
  )
}

export default imprint