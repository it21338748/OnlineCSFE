import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ProductDetails() {
  const { id } = useParams(); 
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchData() {
        const response = await fetch(`http://localhost:5000/products/get-product/${id}`);
        const data = await response.json();
        setProduct(data);
      }
  
      fetchData();
    }, []);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Product Details</h1>
      <img src={product.image} alt={product.name}/>
      <img src={product.image1} alt={product.name} />
      <img src={product.image2} alt={product.name} />
      <img src={product.image3} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: {product.price}</p>

    </div>
  );
}

export default ProductDetails;
