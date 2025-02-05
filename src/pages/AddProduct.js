import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import './AddProduct.css';

const AddProduct = () => {
  const [product, setProduct] = useState({
    title: '',
    description: '',
    price: '',
    image: '',
    category: 'Electronics',
    stock: 0,
    businessDescription: '',
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Product added successfully!');
    // You can handle product saving here
  };

  return (
    <div>
      <Navbar />
      <div className="add-product-container">
        <div className="add-product-header">
          <h1>Add Your Product to Our Marketplace</h1>
          <p>
            Whether you’re an established business or a new seller, adding your product to the right marketplace is a key step in growing your brand. In today’s competitive world, showcasing your product with clear, detailed information is crucial for attracting the right customers and building trust. By filling out the following form, you’re taking the first step toward increasing your visibility, improving your sales potential, and engaging with a wider audience. Be sure to provide accurate descriptions, competitive pricing, and an appealing business summary to stand out.
          </p>
        </div>

        <div className="add-product-form">
          <h2>Product Information</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-field">
              <label htmlFor="title">Product Title:</label>
              <input
                type="text"
                name="title"
                id="title"
                placeholder="Enter the product title"
                value={product.title}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="description">Description:</label>
              <textarea
                name="description"
                id="description"
                placeholder="Describe the product features, benefits, and condition"
                value={product.description}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="price">Price:</label>
              <input
                type="number"
                name="price"
                id="price"
                placeholder="Enter the price in USD"
                value={product.price}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="image">Product Image URL:</label>
              <input
                type="text"
                name="image"
                id="image"
                placeholder="Enter the URL of the product image"
                value={product.image}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="category">Category:</label>
              <select
                name="category"
                id="category"
                value={product.category}
                onChange={handleChange}
                required
              >
                <option value="Electronics">Electronics</option>
                <option value="Furniture">Furniture</option>
                <option value="Clothing">Clothing</option>
                <option value="Books">Books</option>
                <option value="Toys">Toys</option>
              </select>
            </div>

            <div className="form-field">
              <label htmlFor="stock">Stock Quantity:</label>
              <input
                type="number"
                name="stock"
                id="stock"
                value={product.stock}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-field">
              <label htmlFor="businessDescription">Business Description:</label>
              <textarea
                name="businessDescription"
                id="businessDescription"
                placeholder="Provide a brief overview of your business or the product's unique selling points"
                value={product.businessDescription}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="add-product-btn">Add Product</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
