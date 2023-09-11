import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function AddProduct() {
  const [newProduct, setNewProduct] = useState({
    name: '',
    description: '',
    price: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle your logic to add the new product to the data source.
    // You can use an API call or update state accordingly.

    // Navigate to the product list after adding.
  };

  return (
    <div>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={newProduct.name} onChange={handleChange} />
        </div>
        <div>
          <label>Description:</label>
          <textarea name="description" value={newProduct.description} onChange={handleChange} />
        </div>
        <div>
          <label>Price:</label>
          <input type="number" name="price" value={newProduct.price} onChange={handleChange} />
        </div>
        <button type="submit">Add Product</button>
        <Link to="/">Cancel</Link> {/* Add this Link to navigate back to the product list */}
      </form>
    </div>
  );
}

export default AddProduct;
