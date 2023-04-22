import React, { useEffect, useState } from 'react';
import '../../css/product.css';
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Product() {
    const [products, setProducts] = useState([]);
    const [priceRange, setPriceRange] = useState("All Price");
    const [category, setCategory] = useState("All");
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 8;


    useEffect(() => {
        getProducts();
    }, []);
    const getProducts = async () => {
        const response = await axios.get("http://localhost:5000/products/getProducts");
        setProducts(response.data);
    }

    const handlePriceRangeChange = (range) => {
        setPriceRange(range);
        setCurrentPage(1)
    };

    const handleCategoryChange = (category) => {
        setCategory(category);
        setCurrentPage(1)
    };

    const filterByPriceRange = () => {
        if (priceRange === 'All Price') {
            return products;
        } else if (priceRange === '1000-3000') {
            return products.filter((product) => product.price >= 1000 && product.price <= 3000);
        } else if (priceRange === '3000-5000') {
            return products.filter((product) => product.price >= 3000 && product.price <= 5000);
        } else if (priceRange === '5000-7000') {
            return products.filter((product) => product.price >= 5000 && product.price <= 7000);
        } else if (priceRange === '7000-10000') {
            return products.filter((product) => product.price >= 7000 && product.price <= 10000);
        }
    };

    const filterByCategory = () => {
        if (category === 'All') {
            return products;
        } else if (category === 'Women') {
            return products.filter((product) => product.category === "Women's");
        } else if (category === 'Men') {
            return products.filter((product) => product.category === "Men's");
        } else if (category === 'Kids') {
            return products.filter((product) => product.category === "Kids");

        }
    };

    const filteredProducts = () => {
        const startIndex = (currentPage - 1) * productsPerPage;
        const endIndex = startIndex + productsPerPage;
        return filterByCategory()
            .filter((product) => filterByPriceRange().includes(product))
            .slice(startIndex, endIndex);
    };



    return (
        <div className="container">
            <div className="col-md-4 filter">
                <div className='price-filter'>
                <h6 className="sort-product mb-5">Sort by Price Range</h6>
                <div className="form-check form-check-inline mb-2">
                    <input className="form-check-input" type="radio" name="priceRange" id="allPrice" value="All Price" onChange={() => handlePriceRangeChange('All Price')} checked={priceRange === 'All Price'} />
                    <label className="form-check-label" htmlFor="allPrice">All Price</label>
                </div>
                <div className="form-check form-check-inline mb-2">
                    <input className="form-check-input" type="radio" name="priceRange" id="1000-3000" value="1000-3000" onChange={() => handlePriceRangeChange('1000-3000')} checked={priceRange === '1000-3000'} />
                    <label className="form-check-label" htmlFor="1000-3000">Rs.1000 - Rs.3000</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="priceRange" id="3000-5000" value="3000-5000" onChange={() => handlePriceRangeChange('3000-5000')} checked={priceRange === '3000-5000'} />
                    <label className="form-check-label mb-2" htmlFor="3000-5000">Rs.3000-Rs.5000</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="priceRange" id="1000-3000" value="1000-3000" onChange={() => handlePriceRangeChange('5000-7000')} checked={priceRange === '5000-7000'} />
                    <label className="form-check-label mb-2" htmlFor="5000-7000">Rs.5000 - Rs.7000</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="priceRange" id="1000-3000" value="1000-3000" onChange={() => handlePriceRangeChange('7000-10000')} checked={priceRange === '7000-10000'} />
                    <label className="form-check-label" htmlFor="7000-10000">Rs.7000 - Rs.10000</label>
                </div>
                </div>
                <h6 className="sort-product my-5">Sort by Category</h6>
                <div className="form-check form-check-inline d-flex mb-2">
                    <input className="form-check-input" type="radio" name="category" id="all" value="All" onChange={() => handleCategoryChange('All')} checked={category === 'All'} />
                    <label className="form-check-label" htmlFor="all">All</label>
                </div>
                <div className="form-check form-check-inline mb-2">
                    <input className="form-check-input" type="radio" name="category" id="women" value="Women" onChange={() => handleCategoryChange('Women')} />
                    <label className="form-check-label" htmlFor="all">Women</label>
                </div>
                <div className="form-check form-check-inline d-flex mb-2">
                    <input className="form-check-input" type="radio" name="category" id="men" value="Men" onChange={() => handleCategoryChange('Men')} />
                    <label className="form-check-label" htmlFor="all">Men</label>
                </div>
                <div className="form-check form-check-inline mb-2">
                    <input className="form-check-input" type="radio" name="category" id="kids" value="kids" onChange={() => handleCategoryChange('Kids')} />
                    <label className="form-check-label" htmlFor="all">Kids</label>
                </div>
            </div>
            <div className="row justify-content-end">
                <div className="col-md-8">
                    <h2 className="product-main-header text-center">Product List</h2>
                    <h6 className="product-view-name">Viewing {filteredProducts().length} of {products.length} products</h6>
                    <div className='row'>
                        {filteredProducts().map(product => (
                            <div className='col-md-3 image-container mt-4' key={product.id}>
                                <img src={product.image} alt={product.name} className='product-image-container' />
                                <h6 className='product-header'>{product.name}</h6>
                                {/*<h7 className='product-description'>{product.description}</h7>*/}
                                <h6 className='product-price'>Rs.{product.price}</h6>

                                <Link
                                    to={`../../view-product/${product._id}`}
                                    className="text-white product-btn text-decoration-none"
                                >
                                    Add to Cart
                                </Link>
                            </div>
                        ))}
                        <div className="pagination p-3 d-flex align-items-center justify-content-center">
                            <button className='previous-btn border-0' onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
                            <span className="mx-3">{currentPage}</span>
                            <button className='next-btn border-0' onClick={() => setCurrentPage(currentPage + 1)} disabled={filteredProducts().length < productsPerPage}>Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}