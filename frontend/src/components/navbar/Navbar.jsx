
import { useState } from "react";
import "./navbar.css";
import products from "./searchItems";

import {
  Menu,
  X,
  Search,
} from "lucide-react";

import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const filteredProducts = products.filter((product) => {
    const query = search.trim().toLowerCase();

    if (!query) return false;

    return (
      product.name.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query) ||
      product.brand.toLowerCase().includes(query)
    );
  });

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
    setSearch("");
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">

        {/* ================= LOGO ================= */}
        <Link to="/" className="nav-logo">
          NEXORA
          <span>TECHNOLOGIES</span>
        </Link>

        {/* ================= DESKTOP LINKS ================= */}
        <div className="nav-links">
          <Link to="/products">
            Products
          </Link>

          <Link to="/accessories">
            Accessories
          </Link>

          <Link to="/offers">
            Offers
          </Link>
        </div>

        {/* ================= SEARCH ================= */}
        <div className="search-wrapper">

          <div className="nav-search">
            <Search size={17} />

            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            {search && (
              <button
                className="search-clear"
                onClick={() => setSearch("")}
                aria-label="Clear search"
              >
                <X size={15} />
              </button>
            )}
          </div>

          {/* ================= SEARCH RESULTS ================= */}
          {search.trim() && (
            <div className="search-results">

              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <div
                    className="search-result-item"
                    key={product.id}
                    onClick={() => handleProductClick(product.id)}
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                    />

                    <div className="search-product-info">
                      <h4>{product.name}</h4>

                      <span>
                        {product.category}
                      </span>

                      <p>
                        ₹{product.price.toLocaleString("en-IN")}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="no-results">
                  No products found
                </div>
              )}

            </div>
          )}

        </div>

        {/* ================= ACTIONS ================= */}
        <div className="nav-actions">

          {/* CIRCULAR BRAND LOGO */}
          <button
            className="nav-circle-logo"
            aria-label="Nexora"
          >
            <svg
              className="trust-ring"
              viewBox="0 0 100 100"
            >
              <defs>
                <path
                  id="trustCirclePath"
                  d="
                    M 50,50
                    m -36,0
                    a 36,36 0 1,1 72,0
                    a 36,36 0 1,1 -72,0
                  "
                />
              </defs>

              <text className="trust-text">
                <textPath
                  href="#trustCirclePath"
                  startOffset="0%"
                >
                  NEXORA • TECHNOLOGY • INNOVATION •
                </textPath>
              </text>
            </svg>

            <span className="trust-d">
              N
            </span>
          </button>

          {/* MENU BUTTON */}
          <button
            className="menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? (
              <X size={22} />
            ) : (
              <Menu size={22} />
            )}
          </button>

        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {menuOpen && (
        <div className="mobile-menu">

          {/* MOBILE SEARCH */}
          <div className="mobile-search">

            <Search size={17} />

            <input
              type="text"
              placeholder="Search laptops, headphones..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            {search && (
              <button
                className="search-clear"
                onClick={() => setSearch("")}
                aria-label="Clear search"
              >
                <X size={15} />
              </button>
            )}

          </div>

          {/* MOBILE LINKS */}
          <Link
            to="/products"
            onClick={() => setMenuOpen(false)}
          >
            Products
          </Link>

          <Link
            to="/accessories"
            onClick={() => setMenuOpen(false)}
          >
            Accessories
          </Link>

          <Link
            to="/offers"
            onClick={() => setMenuOpen(false)}
          >
            Offers
          </Link>

        </div>
      )}
    </nav>
  );
};

export default Navbar;

