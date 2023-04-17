import { m } from "framer-motion";


const Product = ({ src = "", title = "" }) => {
  const item = {
    hide: { 
      scale: 1.1,
      opacity: 0.5, 
      filter: "blur(10px)" 
    },
    show: { 
      scale: 1,
      opacity: 1, 
      filter: "blur(0px)", 
      transition:{ type: "ease", duration: .3, delay: .2 }
    },
    hover: { 
      scale: 1.1, 
      transition: { ease: [.98, 0, .2, 1.01], duration: 1 } 
    },
    exit: {
      scale:.5,
      opacity: 0,
      transition: { ease: [.98, 0, .2, 1.01], duration: 1 }
    },
  }

  const desc = {
    hide: { 
      scale: 0.8,
      opacity: 0, 
    },
    show: { 
      scale: 1,
      opacity: 1, 
      transition:{ ease: [.98,0,.2,1.01], duration: .6, delay: .6 }
    },
    exit: {
      scale:.8,
      opacity: 0,
      transition: { ease: [.98, 0, .2, 1.01], duration: 1 }
    },
  }
    
    return (
      <m.section className="product-display">
        <m.div variants={desc} initial="hide" whileInView="show" exit="exit" className="product-title">{title}</m.div>
        <m.img loading="lazy" variants={item} initial="hide" whileInView="show" exit="exit" draggable="false" src={src}/>
      </m.section>
    )
}

export default Product