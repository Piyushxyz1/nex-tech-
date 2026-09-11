
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Star,
  ShoppingCart,
  Zap,
} from "lucide-react";

import products from "../../components/navbar/searchItems";
import "./productPage.css";

const ProductPage = () => {
  const navigate = useNavigate();

  const handleProductClick = (id) => {
    navigate(`/products/${id}`);
  };

  return (
    <section className="product-page" id="products">
      {/* HEADER */}
      <div className="product-page-header">
        <div>
          <span className="product-eyebrow">
            NEXORA COLLECTION
          </span>

          <h1>
            Explore Our
            <span> Technology</span>
          </h1>

          <p>
            Discover high-performance laptops, desktops, monitors,
            audio devices and accessories designed for modern
            computing.
          </p>
        </div>

        <div className="product-count">
          <strong>{products.length}</strong>
          <span>Products</span>
        </div>
      </div>

      {/* CATEGORY FILTER STYLE */}
      <div className="product-categories">
        <button className="category-active">
          All Products
        </button>

        {[...new Set(products.map((product) => product.category))].map(
          (category) => (
            <button key={category}>
              {category}
            </button>
          )
        )}
      </div>

      {/* PRODUCT GRID */}
      <div className="product-grid">
        {products.map((product) => (
          <article
            className="product-card"
            key={product.id}
            onClick={() => handleProductClick(product.id)}
          >
            {/* IMAGE */}
            <div className="product-image-wrapper">
              <div className="product-badge">
                NEXORA
              </div>

              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />

              <div className="product-hover">
                <span>View Product</span>
                <ArrowRight size={16} />
              </div>
            </div>

            {/* CONTENT */}
            <div className="product-card-content">
              <div className="product-meta">
                <span>{product.category}</span>

                <div className="product-rating">
                  <Star size={13} fill="currentColor" />
                  {product.rating}
                </div>
              </div>

              <h2>{product.name}</h2>

              <p className="product-brand">
                {product.brand} Technology
              </p>

              <div className="product-card-bottom">
                <div className="product-price">
                  <span>Starting from</span>
                  <strong>
                    ₹{product.price.toLocaleString("en-IN")}
                  </strong>
                </div>

                <button
                  className="product-arrow"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleProductClick(product.id);
                  }}
                  aria-label={`View ${product.name}`}
                >
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* BOTTOM CTA */}
      <div className="products-bottom">
        <div>
          <span className="products-bottom-icon">
            <Zap size={18} />
          </span>

          <div>
            <h3>Built for what's next.</h3>
            <p>
              Performance, innovation and reliability in one ecosystem.
            </p>
          </div>
        </div>

        <button
          onClick={() =>
            document
              .getElementById("products")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Explore Collection
          <ArrowRight size={17} />
        </button>
      </div>
    </section>
  );
};

export default ProductPage;

