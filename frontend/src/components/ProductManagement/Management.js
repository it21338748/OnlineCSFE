import React from 'react'
import FirstImage from "../../img/img1.png"
import SecondImage from "../../img/img2.png"
import ThirdImage from "../../img/img3.png"
import FourthImage from "../../img/img4.png"
import FifthImage from "../../img/img5.png"
import "../../css/product.css"

export default function Management() {
  return (
    <div className='container'>
            <div className='row'>
                <h2 className='text-left product-main-header'>Product Management</h2>
                <h6 className='product-view-name'>Viewing 20 of 500 products</h6>
                <h6 className='sort-product'>Search image by id </h6>
                <div className='col-md-2'>
                    <img src={FirstImage} alt={'FirstImage'} className='product-image-container'/>
                    <h6 className='product-header'>T-Shirt</h6>
                    <h6 className='product-price'>RS.3000.00</h6>
                    <button className='text-white product-btn'>Add to Cart</button>
                </div>
                <div className='col-md-2'>
                    <img src={SecondImage} alt={'FirstImage'} className='product-image-container'/>
                    <h6 className='product-header'>T-Shirt</h6>
                    <h6 className='product-price'>RS.3000.00</h6>
                    <button className='text-white product-btn'>Add to Cart</button>
                </div>
                <div className='col-md-2'>
                    <img src={ThirdImage} alt={'FirstImage'} className='product-image-container'/>
                    <h6 className='product-header'>T-Shirt</h6>
                    <h6 className='product-price'>RS.3000.00</h6>
                    <button className='text-white product-btn'>Add to Cart</button>
                </div>
                <div className='col-md-2'>
                    <img src={FourthImage} alt={'FirstImage'} className='product-image-container'/>
                    <h6 className='product-header'>T-Shirt</h6>
                    <h6 className='product-price'>RS.3000.00</h6>
                    <button className='text-white product-btn'>Add to Cart</button>
                </div>
                <div className='col-md-2'>
                    <img src={FifthImage} alt={'FirstImage'} className='product-image-container'/>
                    <h6 className='product-header'>T-Shirt</h6>
                    <h6 className='product-price'>RS.3000.00</h6>
                    <button className='text-white product-btn'>Add to Cart</button>
                </div>
            </div>
            
        </div>
  )
}
