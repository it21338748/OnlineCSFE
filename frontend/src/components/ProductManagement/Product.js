import React, { useEffect, useState } from 'react';
import '../../css/product.css';

export default function Product() {
  const [products, setProducts] = useState([]);
  const [priceRange, setPriceRange] = useState("All Price");
  const [category, setCategory] = useState("All");

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://localhost:5000/products/getProducts');
      const data = await response.json();
      setProducts(data);
    }
    fetchData();
  }, []);

  const handlePriceRangeChange = (range) => {
    setPriceRange(range);
  };

  const handleCategoryChange = (category) => {
    setCategory(category);
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
    }else if (priceRange === '7000-10000') {
        return products.filter((product) => product.price >= 7000 && product.price <= 10000);
    }
};

    const filterByCategory = () => {
        if (category === 'All') {
            return products;
        } else if (category === 'Women') {
            return products.filter((product)=>product.category === "Women's");
        } else if (category === 'Men') {
              return products.filter((product) => product.category === "Men's");
        }else if (category === 'Kids') {
              return products.filter((product) => product.category === "Kids");
              
        }
    };
    
    const filteredProducts = () => filterByCategory().filter((product) => filterByPriceRange().includes(product));


  return (
    <div className="container">
        <div className="col-md-4">
            <h6 className="sort-product">Sort by Price Range</h6>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="priceRange" id="allPrice" value="All Price" onChange={() => handlePriceRangeChange('All Price')} checked={priceRange === 'All Price'} />
                <label className="form-check-label" htmlFor="allPrice">All Price</label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="priceRange" id="1000-3000" value="1000-3000" onChange={() => handlePriceRangeChange('1000-3000')} checked={priceRange === '1000-3000'} />
                <label className="form-check-label" htmlFor="1000-3000">$1000 - $3000</label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="priceRange" id="3000-5000" value="3000-5000" onChange={() => handlePriceRangeChange('3000-5000')} checked={priceRange === '3000-5000'} />
                <label className="form-check-label" htmlFor="3000-5000">$3000-5000</label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="priceRange" id="1000-3000" value="1000-3000" onChange={() => handlePriceRangeChange('5000-7000')} checked={priceRange === '5000-7000'} />
                <label className="form-check-label" htmlFor="5000-7000">$5000 - $7000</label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="priceRange" id="1000-3000" value="1000-3000" onChange={() => handlePriceRangeChange('7000-10000')} checked={priceRange === '7000-10000'} />
                <label className="form-check-label" htmlFor="7000-10000">$7000 - $10000</label>
            </div>
            <h6 className="sort-product">Sort by Category</h6>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="category" id="all" value="All" onChange={() => handleCategoryChange('All')} checked={category === 'All'} />
                <label className="form-check-label" htmlFor="all">All</label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="category" id="women" value="Women" onChange={() => handleCategoryChange('Women')} />
                <label className="form-check-label" htmlFor="all">Women</label>
            </div>
            <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="category" id="men" value="Men" onChange={() => handleCategoryChange('Men')} />
                <label className="form-check-label" htmlFor="all">Men</label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="category" id="kids" value="kids" onChange={() => handleCategoryChange('Kids')}  /> 
                <label className="form-check-label" htmlFor="all">Kids</label>
            </div>
        </div>
      <div className="row justify-content-end">
        <div className="col-md-8">
          <h2 className="text-left product-main-header">Product List</h2>
          <h6 className="product-view-name">Viewing {filteredProducts().length} of {products.length} products</h6>
            <div className='row'>
            {filteredProducts().map(product => (
              <div className='col-md-3 image-container mt-4' key={product.id}>
                <img src={product.image} alt={product.name} className='product-image-container' />
                <h6 className='product-header'>{product.name}</h6>
                <h7 className='product-description'>{product.description}</h7>
                <h6 className='product-price'>{product.price}</h6>
                <button className='text-white product-btn'>Add to Cart</button>
              </div>
            ))}
            
            </div>
            </div>
            </div>
</div>
)
}
