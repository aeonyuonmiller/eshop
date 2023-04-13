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
            <m.img loading="lazy" variants={item} draggable="false" src={src}/>
            <m.div className='content' viewport={{ amount: 1 }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0, transition:{ ease: [.98,0,.2,1.01], duration: .6, delay: .1 }}}>
              <span>{title}</span>
            </m.div>
        </m.section>
    )
}

export default Product