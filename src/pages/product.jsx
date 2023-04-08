import React from 'react'
import Head from "next/head";
import CloseButton from './components/icons/CloseButton'

const product = () => {
  return (
    <>
      <Head>
        <title>introvert • product</title>
        <meta name="description" content="comfortable in silence" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      product
      
      <CloseButton />
    </>
  )
}

export default product