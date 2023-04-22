import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";
import "../../css/product.css";
import { useParams } from "react-router-dom";

export default function ViewProduct() {    
    const [product, setProduct] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        getProductById();
    });
    const getProductById = async () => {
        const response = await axios.get(`http://localhost:5000/products/get-product/${id}`);
        setProduct(response.data);
         //alert(response.data.name);
    };

    return (
        <div className='row'>

            {product.map((product, index) => (
                <div key={product._id} className='col-md-3 image-container mt-4'>
                    <img src={product.image} alt='FirstImage' className='product-image-container' />
                    <h6 className='product-header'>{product.name}</h6>
                    <h6 className='product-price'>RS.{product.price}</h6>
                    <button className='text-white product-btn'>Add to Cart</button>
                </div>
            ))}
        </div>
    )
}
