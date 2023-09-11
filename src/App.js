// App.js
import React, { useState } from 'react';
import productsData from './data';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';

function App() {
  const [products, setProducts] = useState(productsData);


  const handleDelete = (productId) => {
    const updatedProducts = products.filter((product) => product.id !== productId);
    setProducts(updatedProducts);
  };

  const handleAddProduct = (newProduct) => {
    const newProductId = products.length + 1;
    newProduct.id = newProductId;
    setProducts([...products, newProduct]);
  };

  return (
    <div>
      <h1>Product Listing App</h1>
      <div className="container">
        <ProductList products={products} onDelete={handleDelete} />
       
        <ProductForm onSubmit={handleAddProduct} />
      </div>
    </div>
  );
}

export default App;
