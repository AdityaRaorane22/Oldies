import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import Navbar from '../components/Navbar';
import './Products.css';

const Products = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleBuy = (productName) => {
    alert(`${productName} ordered successfully!`);
    setSelectedProduct(null); // Close the Buy/Cancel box
  };

  const handleCancel = () => {
    setSelectedProduct(null); // Close the Buy/Cancel box
  };

  const categories = ['All', 'Electronics', 'Furniture', 'Clothing', 'Books'];

  const products = [
    {
      id: 1,
      title: 'Old Laptop',
      description: 'A well-maintained laptop with 8GB RAM and 512GB SSD.',
      price: 300,
      image: 'https://via.placeholder.com/250',
      category: 'Electronics',
    },
    {
      id: 2,
      title: 'Used Bicycle',
      description: 'Perfect for city commuting. Good condition.',
      price: 50,
      image: 'https://via.placeholder.com/250',
      category: 'Electronics',
    },
    {
      id: 3,
      title: 'Vintage Camera',
      description: 'A classic film camera with a leather case.',
      price: 120,
      image: 'https://via.placeholder.com/250',
      category: 'Electronics',
    },
    {
      id: 4,
      title: 'Old Books Collection',
      description: 'A set of vintage books from the 90s.',
      price: 40,
      image: 'https://via.placeholder.com/250',
      category: 'Books',
    },
    {
      id: 5,
      title: 'Second-Hand Sofa',
      description: 'A comfortable sofa with a soft texture.',
      price: 150,
      image: 'https://via.placeholder.com/250',
      category: 'Furniture',
    },
    {
      id: 6,
      title: 'Used Smartphone',
      description: 'Great condition, 64GB storage, and fast performance.',
      price: 250,
      image: 'https://via.placeholder.com/250',
      category: 'Electronics',
    },
    {
      id: 7,
      title: 'Winter Jacket',
      description: 'Warm and comfortable winter jacket.',
      price: 70,
      image: 'https://via.placeholder.com/250',
      category: 'Clothing',
    },
    {
      id: 8,
      title: 'Old Chair',
      description: 'Vintage wooden chair in excellent condition.',
      price: 40,
      image: 'https://via.placeholder.com/250',
      category: 'Furniture',
    },
    {
        id: 9,
        title: 'Leather Jacket',
        description: 'Genuine leather jacket, great condition, stylish fit.',
        price: 120,
        image: 'https://via.placeholder.com/250',
        category: 'Clothing',
      },
      {
        id: 10,
        title: 'Wooden Dining Table',
        description: 'Solid wood dining table, seats 6 people.',
        price: 250,
        image: 'https://via.placeholder.com/250',
        category: 'Furniture',
      },
      {
        id: 11,
        title: '4K LED TV',
        description: 'Ultra HD TV, great picture quality, 50 inches.',
        price: 450,
        image: 'https://via.placeholder.com/250',
        category: 'Electronics',
      },
      {
        id: 12,
        title: 'Bluetooth Speaker',
        description: 'Portable Bluetooth speaker with excellent sound quality.',
        price: 60,
        image: 'https://via.placeholder.com/250',
        category: 'Electronics',
      },
      {
        id: 13,
        title: 'Electric Guitar',
        description: 'Used electric guitar, perfect for beginners.',
        price: 180,
        image: 'https://via.placeholder.com/250',
        category: 'Electronics',
      },
      {
        id: 14,
        title: 'Vintage Vinyl Records',
        description: 'A collection of classic vinyl records from the 70s.',
        price: 80,
        image: 'https://via.placeholder.com/250',
        category: 'Books',
      },
      {
        id: 15,
        title: 'Folding Bike',
        description: 'Compact folding bike, ideal for commuting and travel.',
        price: 130,
        image: 'https://via.placeholder.com/250',
        category: 'Electronics',
      },
      {
        id: 16,
        title: 'Coffee Table',
        description: 'Modern coffee table with a glass top, sleek design.',
        price: 100,
        image: 'https://via.placeholder.com/250',
        category: 'Furniture',
      },
      {
        id: 17,
        title: 'Action Figure Collection',
        description: 'Rare action figures from the 80s and 90s.',
        price: 200,
        image: 'https://via.placeholder.com/250',
        category: 'Books',
      },
      {
        id: 18,
        title: 'Old Sneakers',
        description: 'Comfortable sneakers, still in good condition.',
        price: 30,
        image: 'https://via.placeholder.com/250',
        category: 'Clothing',
      },
      {
        id: 19,
        title: 'Smartwatch',
        description: 'Used smartwatch with fitness tracking features.',
        price: 120,
        image: 'https://via.placeholder.com/250',
        category: 'Electronics',
      },
      {
        id: 20,
        title: 'Antique Wall Clock',
        description: 'Vintage wall clock in excellent working condition.',
        price: 150,
        image: 'https://via.placeholder.com/250',
        category: 'Furniture',
      },
  ];

  return (
    <div>
      <Navbar />
      <div className="category-filter">
        <h3>Select Category</h3>
        <div className="categories">
          {categories.map((category) => (
            <button
              key={category}
              className={selectedCategory === category ? 'selected' : ''}
              onClick={() => handleCategorySelect(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="product-search">
        <input
          type="text"
          placeholder="Search for products..."
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>

      <h1 className="products-heading">Products Available for Sale</h1>

      <div className="product-listing">
        {products
          .filter((product) =>
            (selectedCategory === 'All' || product.category === selectedCategory) &&
            product.title.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map((product) => (
            <div
              key={product.id}
              className="product-card-container"
              onClick={() => setSelectedProduct(product)}
            >
              <ProductCard
                title={product.title}
                description={product.description}
                price={product.price}
                image={product.image}
              />
              {selectedProduct && selectedProduct.id === product.id && (
                <div className="product-action-box">
                  <button className="buy-button" onClick={() => handleBuy(product.title)}>
                    Buy
                  </button>
                  <button className="cancel-button" onClick={handleCancel}>
                    Cancel
                  </button>
                </div>
              )}
            </div>
          ))}
      </div>

    
    </div>
  );
};

export default Products;
