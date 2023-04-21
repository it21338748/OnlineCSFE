import React from 'react';
import FirstImage from "../../img/img1.png";
import SecondImage from "../../img/img2.png";
import ThirdImage from "../../img/img3.png";
import FourthImage from "../../img/img4.png";
import "../../css/product.css";

export default function Product() {
    return (
        <div className="container">
            <div className="col-md-4">
            </div>
            <div className="row justify-content-end">
                <div className="col-md-8">

                    <h2 className="text-left product-main-header">Product List</h2>
                    <h6 className="product-view-name">Viewing 20 of 500 products</h6>
                    <h6 className="sort-product">Sort by Newest Items</h6>
                    <div className='row'>
                        <div className='col-md-3 image-container mt-4'>
                            <img src={FirstImage} alt='FirstImage' className='product-image-container' />
                            <h6 className='product-header'>T-Shirt</h6>
                            <h6 className='product-price'>RS.3000.00</h6>
                            <button className='text-white product-btn'>Add to Cart</button>
                        </div>
                        <div className='col-md-3 image-container mt-4'>
                            <img src={SecondImage} alt='SecondImage' className='product-image-container' />
                            <h6 className='product-header'>T-Shirt</h6>
                            <h6 className='product-price'>RS.3000.00</h6>
                            <button className='text-white product-btn'>Add to Cart</button>
                        </div>
                        <div className='col-md-3 image-container mt-4'>
                            <img src={ThirdImage} alt='ThirdImage' className='product-image-container' />
                            <h6 className='product-header'>T-Shirt</h6>
                            <h6 className='product-price'>RS.3000.00</h6>
                            <button className='text-white product-btn'>Add to Cart</button>
                        </div>
                        <div className='col-md-3 image-container mt-4'>
                            <img src={FourthImage} alt='FourthImage mt-4' className='product-image-container' />
                            <h6 className='product-header'>T-Shirt</h6>
                            <h6 className='product-price'>RS.3000.00</h6>
                            <button className='text-white product-btn'>Add to Cart</button>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-3 image-container mt-4'>
                            <img src={FirstImage} alt='FirstImage' className='product-image-container' />
                            <h6 className='product-header'>T-Shirt</h6>
                            <h6 className='product-price'>RS.3000.00</h6>
                            <button className='text-white product-btn'>Add to Cart</button>
                        </div>
                        <div className='col-md-3 image-container mt-4'>
                            <img src={SecondImage} alt='SecondImage' className='product-image-container' />
                            <h6 className='product-header'>T-Shirt</h6>
                            <h6 className='product-price'>RS.3000.00</h6>
                            <button className='text-white product-btn'>Add to Cart</button>
                        </div>
                        <div className='col-md-3 image-container mt-4'>
                            <img src={SecondImage} alt='SecondImage' className='product-image-container' />
                            <h6 className='product-header'>T-Shirt</h6>
                            <h6 className='product-price'>RS.3000.00</h6>
                            <button className='text-white product-btn'>Add to Cart</button>
                        </div>
                        <div className='col-md-3 image-container mt-4'>
                            <img src={SecondImage} alt='SecondImage' className='product-image-container' />
                            <h6 className='product-header'>T-Shirt</h6>
                            <h6 className='product-price'>RS.3000.00</h6>
                            <button className='text-white product-btn'>Add to Cart</button>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-3 image-container mt-4'>
                            <img src={FirstImage} alt='FirstImage' className='product-image-container' />
                            <h6 className='product-header'>T-Shirt</h6>
                            <h6 className='product-price'>RS.3000.00</h6>
                            <button className='text-white product-btn'>Add to Cart</button>
                        </div>
                        <div className='col-md-3 image-container mt-4'>
                            <img src={SecondImage} alt='SecondImage' className='product-image-container' />
                            <h6 className='product-header'>T-Shirt</h6>
                            <h6 className='product-price'>RS.3000.00</h6>
                            <button className='text-white product-btn'>Add to Cart</button>
                        </div>
                        <div className='col-md-3 image-container mt-4'>
                            <img src={SecondImage} alt='SecondImage' className='product-image-container' />
                            <h6 className='product-header'>T-Shirt</h6>
                            <h6 className='product-price'>RS.3000.00</h6>
                            <button className='text-white product-btn'>Add to Cart</button>
                        </div>
                        <div className='col-md-3 image-container mt-4'>
                            <img src={SecondImage} alt='SecondImage' className='product-image-container' />
                            <h6 className='product-header'>T-Shirt</h6>
                            <h6 className='product-price'>RS.3000.00</h6>
                            <button className='text-white product-btn'>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}