import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

function EditProduct() {
  const { id } = useParams();

  // Initialize the product state with default values
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
  });

  useEffect(() => {
    // Fetch the product data by id and update the product state
    // You can use an API call or access data from your data source
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle your logic to update the product data with the new values.
    // You can use an API call or update state accordingly.

    // After updating, navigate back to the product list
  };

  return (
    <div>
      <h2>Edit Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={product.name} onChange={handleChange} />
        </div>
        <div>
          <label>Description:</label>
          <textarea name="description" value={product.description} onChange={handleChange} />
        </div>
        <div>
          <label>Price:</label>
          <input type="number" name="price" value={product.price} onChange={handleChange} />
        </div>
        <button type="submit">Update Product</button>
        <Link to="/">Cancel</Link> {/* Add this Link to navigate back to the product list */}
      </form>
    </div>
  );
}

export default EditProduct;
