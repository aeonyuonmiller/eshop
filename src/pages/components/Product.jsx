import { m } from "framer-motion";


const Product = ({ src = "", title = "" }) => {
  const item = {
    hide: { y: 20, opacity: 0, filter: "blur(6px)" },
    show: { y: 0, opacity: 1, objectPosition: "0% center", filter: "blur(0px)", transition:{ ease: [.98,0,.2,1.01], duration: .6 }},
    hover: { scale: 1.1, objectPosition: "100% center", transition: { ease: [.98, 0, .2, 1.01], duration: 1 } },
    leave: {scale:1, objectPosition: "0% center"},
  }
    
    return (
        <m.section layoutId={title} className="product-display">
            <m.div variants={item} initial="hide" whileInView="show" exit="leave" className="product-title">{title}</m.div>
            <m.img loading="lazy" variants={item} draggable="false" src={src}/>
        </m.section>
    )
}

export default Product