import React from 'react'
import "./product.css"

function Product({img, link}) {
    console.log(img, link)
    return (
        <div className="product">
            <div className="p-browser">
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                <div className="p-circle"></div>
            </div>
            <a href={link} target="_blank" rel="noreferrer">
                <img src={img} alt="" className="p-img" />
            </a>
        </div>
    )
}

export default Product
