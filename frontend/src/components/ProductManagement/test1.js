import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";
import "../../css/product.css";
import AddImage from "../../img/addprd.png";

const ProductList = () => {
    const [products, setProduct] = useState([])

    useEffect(() => {
        getProducts();
    }, []);
    const getProducts = async () => {
        const response = await axios.get("http://localhost:5000/products/getProducts");
        setProduct(response.data);
    }

    const deleteProduct = async (id) => {

        try {

            await axios.delete(`http://localhost:5000/products/delete-product/${id}`);

            getProducts();

        } catch (error) {

            console.log(error);

        }

    };

    return (
        <div>



            <div className="container">
                <h2 className="text-center product-main-header my-5">Product Management</h2>

                <div className='row'><div className='col-md-6 ml-5'><h6 className="product-view-name text-left ml-5">Viewing 20 of 500 products</h6></div>
                    <div className="sort-product justify-content-end col-md-6"><h6>Search images by id </h6></div></div>

                <div className='row  justify-content-center'>

                    {products.map((product, index) => (
                        <div key={product._id} className='col-md-2 image-container mt-4 m-2'>
                            <img src={product.image} alt='FirstImage' className='product-image-container' />
                            <h6 className='product-header'>{product.name}</h6>
                            <h6 className='product-price'>RS.{product.price}</h6>
                            <Link
                                to={`../../test3/${product._id}`}

                                className="mr-3 update-product-btn"

                            >

                                Update
                            </Link>
                            <button

                                onClick={() => deleteProduct(product._id)}

                                className='text-white remove-product-btn'

                            >

                                Remove

                            </button>

                            
                            
                            <p>{product.available}</p>


                        </div>

                    ))}
                    <Link to='../test2' className='addImgBtn'>
                    <img className='addImgBtn' src={AddImage} alt=''></img>
                    </Link>



                </div>
            </div>
        </div>






    )
}
export default ProductList;
