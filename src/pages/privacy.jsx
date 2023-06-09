import React from 'react'
import Head from "next/head";
import Layout from './components/Layout'
import CloseButton from './components/icons/CloseButton'
import { m } from "framer-motion";

const privacy = () => {
  return (
    <>
      <Head>
        <title>introvert • privacy</title>
        <meta name="description" content="comfortable in silence" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout bgColor="#00406b">
        <h1>Privacy</h1>
        <m.span initial={{y: 30, opacity: 0}} animate={{y: 0, opacity:1, transition:{ease: [.3,0,.2,1.01], duration: 1.2, delay: .4}}} exit={{y: -30, opacity: 0, transition:{ease: [.3,0,.2,1.01], duration: .6}}}>
          <h5>Privacy Policy</h5>
          <p>At our online shop, we are committed to protecting your privacy and ensuring that your personal information is safe and secure. This Privacy Policy outlines the types of information we collect from you, how we use and protect that information, and your rights regarding your personal information.</p>

          <h5>Information We Collect</h5>
          <p>We collect personal information from you when you make a purchase from our online shop. This information may include your name, email address, phone number, billing address, and shipping address. We also collect information about your purchase history and the products you have viewed on our site.</p>
        
          <h5>Contact us</h5>
          <p>If you have any questions or concerns about our Privacy Policy or the way we handle your personal information, please contact us at <strong>privacy@introvert.live</strong>. We will do our best to address your concerns and ensure that your personal information is protected and secure.</p>
        </m.span>

        <m.span initial={{y: 30, opacity: 0}} animate={{y: 0, opacity:1, transition:{ ease: [.3,0,.2,1.01], duration: 1.2, delay: .8}}} exit={{y: -30, opacity: 0, transition:{ease: [.3,0,.2,1.01], duration: .6, delay: .05}}}>
          <h5>How We Use Your Information</h5>
          <p>We use your personal information to process your orders, communicate with you about your orders and our products, and to improve our site and services. We may also use your information to send you marketing communications, such as newsletters or promotional offers, but only if you have given us your consent to do so.</p>
          <p>We do not sell, rent, or trade your personal information to third parties. However, we may share your information with our trusted partners and service providers who help us operate our site and provide our services to you.</p>

          <h5>How We Protect Your Information</h5>
          <p>We take the security of your personal information seriously and have implemented various measures to protect your information from unauthorized access, use, or disclosure. These measures include using encryption to protect sensitive data and regularly reviewing our security practices to ensure they meet industry standards.</p>

          <h5>Your Rights</h5>
          <p>You have the right to access, update, or delete your personal information at any time. You also have the right to object to the processing of your personal information, and to request that we restrict the use of your information. To exercise these rights, please contact us at the email address provided below.</p>
        </m.span>
      </Layout>

      <CloseButton />
    </>
  )
}

export default privacy