import React from 'react'
import "./productList.css"
import Product from '../product/Product'
import { products } from "../../data"


function ProductList() {
    return (
        <div className="productList">
            <div className="pl-texts">
                <h1 className="pl-title">Create & inspire.</h1>
                <p className="pl-desc">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque numquam deserunt maiores, commodi beatae delectus amet ipsum, exercitationem quaerat ducimus ullam harum eos rerum vel sit minus! Modi, ut aut.
                </p>
                <div className="pl-list">
                    {products.map( item => (
                        <Product key={item.id} img={item.img} link={item.link} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProductList
