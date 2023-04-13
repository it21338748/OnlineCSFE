import React from 'react'
import FirstImage from "../../img/img1.png"
import SecondImage from "../../img/img2.png"
import ThirdImage from "../../img/img3.png"
import FourthImage from "../../img/img4.png"
import "../../css/product.css"

export default function Product() {
    return (
        <div className='container'>
            <div className='row'>
                <h2 className='text-left product-main-header'>Product List</h2>
                <h6 className='product-view-name'>Viewing 20 of 500 products</h6>
                <h6 className='sort-product'>Sort by Newest Items</h6>
                <div className='col-md-2 image-container'>
                    <img src={FirstImage} alt={'FirstImage'} className='product-image-container'/>
                    <h6 className='product-header'>T-Shirt</h6>
                    <h6 className='product-price'>RS.3000.00</h6>
                    <button className='text-white product-btn'>Add to Cart</button>
                </div>
                <div className='col-md-2 image-container'>
                    <img src={SecondImage} alt={'FirstImage'} className='product-image-container'/>
                    <h6 className='product-header'>T-Shirt</h6>
                    <h6 className='product-price'>RS.3000.00</h6>
                    <button className='text-white product-btn'>Add to Cart</button>
                </div>
                <div className='col-md-2 image-container'>
                    <img src={ThirdImage} alt={'FirstImage'} className='product-image-container'/>
                    <h6 className='product-header'>T-Shirt</h6>
                    <h6 className='product-price'>RS.3000.00</h6>
                    <button className='text-white product-btn'>Add to Cart</button>
                </div>
                <div className='col-md-2 image-container'>
                    <img src={FourthImage} alt={'FirstImage'} className='product-image-container'/>
                    <h6 className='product-header'>T-Shirt</h6>
                    <h6 className='product-price'>RS.3000.00</h6>
                    <button className='text-white product-btn'>Add to Cart</button>
                </div>
            </div>
            <div className='row mt-5 product-container' >
                <div className='col-md-2 image-container'>
                    <img src={FirstImage} alt={'FirstImage'} className='product-image-container'/>
                    <h6 className='product-header'>T-Shirt</h6>
                    <h6 className='product-price'>RS.3000.00</h6>
                    <button className='text-white product-btn'>Add to Cart</button>
                </div>
                <div className='col-md-2 image-container'>
                    <img src={SecondImage} alt={'FirstImage'} className='product-image-container'/>
                    <h6 className='product-header'>T-Shirt</h6>
                    <h6 className='product-price'>RS.3000.00</h6>
                    <button className='text-white product-btn'>Add to Cart</button>
                </div>
                <div className='col-md-2 image-container'>
                    <img src={ThirdImage} alt={'FirstImage'} className='product-image-container'/>
                    <h6 className='product-header'>T-Shirt</h6>
                    <h6 className='product-price'>RS.3000.00</h6>
                    <button className='text-white product-btn'>Add to Cart</button>
                </div>
                <div className='col-md-2 image-container'>
                    <img src={FourthImage} alt={'FirstImage'} className='product-image-container'/>
                    <h6 className='product-header'>T-Shirt</h6>
                    <h6 className='product-price'>RS.3000.00</h6>
                    <button className='text-white product-btn'>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}
