import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component for routing
import Navbar from '../components/Navbar';
import './Home.css';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="home-content">
        <h1>Welcome to Oldies Shop!</h1>
        <p>Your one-stop platform to buy and sell pre-loved items with confidence. At Oldies Shop, we believe in sustainability, affordability, and providing users with an easy and trustworthy platform to exchange their old but valuable items.</p>

        {/* Why Choose Us Section */}
        <div className="intro">
          <h3>Why Choose Us?</h3>
          <p>At Oldies Shop, we are committed to providing an easy-to-use platform that makes buying and selling second-hand items a breeze. Here's why you should consider us:</p>
          <ul>
            <li><strong>Safe and Secure Transactions</strong>: We use top-level security features to protect your personal and payment information, ensuring your buying and selling experience is always secure.</li>
            <li><strong>Easy to List Products</strong>: Whether you're selling furniture, electronics, or clothing, our platform makes it easy to list products with a few simple clicks.</li>
            <li><strong>Great Deals on Second-Hand Items</strong>: You’ll find amazing bargains on high-quality pre-owned items. Why buy new when you can find great deals on items that are still in excellent condition?</li>
            <li><strong>Wide Range of Categories</strong>: From electronics to home décor, we offer a diverse range of categories to meet every need and preference.</li>
          </ul>
        </div>

        {/* Theory Section */}
        <div className="theory">
          <h3>The Benefits of Buying and Selling Pre-Loved Items</h3>
          <p>In recent years, there has been a significant shift in consumer behavior, with an increasing number of people turning to second-hand markets for various reasons. Let’s explore why buying and selling second-hand items is a good decision:</p>
          
          <h4>1. Environmental Sustainability</h4>
          <p>By purchasing second-hand items, you are reducing the demand for new products, which in turn reduces waste, energy consumption, and environmental pollution. This supports a more sustainable lifestyle, as you are giving used products a second life.</p>
          
          <h4>2. Cost Savings</h4>
          <p>Buying second-hand products is a fantastic way to save money. Most second-hand items are priced significantly lower than their brand-new counterparts, making them an ideal choice for budget-conscious shoppers.</p>
          
          <h4>3. Rare and Vintage Finds</h4>
          <p>Sometimes, the best treasures are found in second-hand markets. You might discover rare or vintage products that are no longer in production. Whether it’s a collector's item, a vintage record player, or retro clothing, second-hand stores are full of unique finds.</p>
          
          <h4>4. Quality Over Quantity</h4>
          <p>Many older items are built to last longer than newer products. When buying second-hand, you might be getting a product that was crafted with higher quality materials or craftsmanship, often at a fraction of the price.</p>
        </div>

        {/* Featured Products Section */}
        <div className="featured-products">
          <h3>Featured Products</h3>
          <div className="product-list">
            <div className="product-card">
              <img src="https://via.placeholder.com/150" alt="Used Laptop" />
              <h4>Used Laptop</h4>
              <p>A high-performance laptop for your work or study needs. Excellent condition with a competitive price.</p>
              <p><strong>Price:</strong> $300</p>
              <button>View Details</button>
            </div>
            <div className="product-card">
              <img src="https://via.placeholder.com/150" alt="Vintage Camera" />
              <h4>Vintage Camera</h4>
              <p>A collector's item for photography enthusiasts. Well-maintained and ready to capture memories.</p>
              <p><strong>Price:</strong> $150</p>
              <button>View Details</button>
            </div>
            <div className="product-card">
              <img src="https://via.placeholder.com/150" alt="Second-Hand Sofa" />
              <h4>Second-Hand Sofa</h4>
              <p>Comfortable and stylish, perfect for any living room. In great condition and at a great price.</p>
              <p><strong>Price:</strong> $200</p>
              <button>View Details</button>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="testimonials">
          <h3>What Our Customers Say</h3>
          <p><strong>John D.:</strong> "The process was super easy. I sold my old phone within a day! The platform is simple, and the transaction was smooth."</p>
          <p><strong>Amy W.:</strong> "I bought a second-hand fridge here, and it's working like new. Highly recommend! A great alternative to buying new."</p>
          <p><strong>Mark S.:</strong> "I love the eco-friendly approach. It's great to know that my old items can be recycled and put to good use by others."</p>
        </div>

        {/* Call to Action with Link to Add Product Page */}
        <div className="call-to-action">
          <h3>Start Selling Today!</h3>
          <p>Got items that you're no longer using? Turn them into cash by listing them here! It’s quick, easy, and a great way to help the environment. Start decluttering your space and make a positive impact today.</p>
          {/* Link to the Add Product Page */}
          <Link to="/add-product">
            <button>Start Selling</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
