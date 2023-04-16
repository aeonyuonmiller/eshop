import { m } from "framer-motion";


const Product = ({ src = "", title = "" }) => {
  const item = {
    hide: { 
      y: 20,
      scale: 1.2,
      opacity: 0, 
      filter: "blur(16px)" 
    },
    show: { 
      y: 0,
      scale: 1,
      opacity: 1, 
      filter: "blur(0px)", 
      transition:{ ease: [.98,0,.2,1.01], duration: .6, delay: .4 }
    },
    hover: { 
      scale: 1.1, 
      transition: { ease: [.98, 0, .2, 1.01], duration: 1 } 
    },
    leave: {
      scale:.5,
      opacity: 0,
      transition: { ease: [.98, 0, .2, 1.01], duration: 1 }
    },
  }
    
    return (
      <m.section className="product-display">
        <m.div variants={item} initial="hide" whileInView="show" exit="leave" className="product-title">{title}</m.div>
        <m.img loading="lazy" variants={item} draggable="false" src={src}/>
      </m.section>
    )
}

export default Product