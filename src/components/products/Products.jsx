import React from 'react'
import "./Products.scss"

const Products = ({title, items, image, model, descp, customClass}) => {
const  execute_category = items.map((item, inx) => <li key={inx}><a key={inx} href="#">{item}</a></li>)
  return (
    <main>
        <div className="container">
            <div className={customClass} >
                <div className="products__title">
                    <h1>{title}</h1>
                    <ul>
                        {execute_category}
                    </ul>
                </div>
                <div className="products__image">
                    <img src={image} alt="" />
                </div>
                <div className="products__text">
                    <h1>{model}</h1>
                    <p>{descp}</p>
                    <button>Buy Now</button>
                </div>
            </div>
        </div>
    </main>
  )
}

export default Products