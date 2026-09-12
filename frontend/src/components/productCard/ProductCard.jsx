import React from 'react'
import {
    ArrowRight,
    Star,

} from "lucide-react";
import { useNavigate } from "react-router-dom";



const ProductCard = ({ product }) => {
    const navigate = useNavigate();

    const handleProductClick = (id) => {
        navigate(`/products/${id}`);
    };
    return (
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

                    <span>
                        {product.category}
                    </span>

                    <div className="product-rating">
                        <Star
                            size={13}
                            fill="currentColor"
                        />
                        {product.rating}
                    </div>

                </div>

                <h2>
                    {product.name}
                </h2>

                <p className="product-brand">
                    {product.brand} Technology
                </p>

                <div className="product-card-bottom">

                    <div className="product-price">
                        <span>
                            Starting from
                        </span>

                        <strong>
                            ₹{(product.price ?? Math.round(
                                product.originalPrice * (1 - product.discount / 100)
                            )).toLocaleString("en-IN")}
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
    )
}

export default ProductCard