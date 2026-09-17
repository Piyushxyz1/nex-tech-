
import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  Truck,
  Sparkles,
} from "lucide-react";

import "./welcome.css";

const Welcome = () => {
  return (
    <div className="welcome-page">

      {/* ================= NAVBAR ================= */}
      <nav className="welcome-navbar">
        <Link to="/" className="welcome-logo">
          <strong>NEXORA</strong>
          <span>TECHNOLOGIES</span>
        </Link>

        <div className="welcome-nav-actions">
          <Link to="/login" className="welcome-login">
            Login
          </Link>

          <Link to="/signup" className="welcome-signup">
            Get Started
            <ArrowRight size={17} />
          </Link>
        </div>
      </nav>

      {/* ================= HERO ================= */}
      <main>

        <section className="welcome-hero">

          <div className="welcome-hero-content">

            <div className="welcome-badge">
              <Sparkles size={15} />
              NEXT-GEN TECHNOLOGY
            </div>

            <h1>
              Technology
              <br />
              <span>Made Smarter.</span>
            </h1>

            <p>
              Discover premium laptops, smartphones, gaming gear and
              smart technology designed for the way you live, work
              and play.
            </p>

            <div className="welcome-hero-buttons">
              <Link to="/signup" className="welcome-primary-btn">
                Explore NEXORA
                <ArrowRight size={19} />
              </Link>

              <Link to="/login" className="welcome-secondary-btn">
                Sign In
              </Link>
            </div>

            <div className="welcome-trust">
              <div>
                <ShieldCheck size={18} />
                <span>Secure Shopping</span>
              </div>

              <div>
                <Zap size={18} />
                <span>Latest Technology</span>
              </div>

              <div>
                <Truck size={18} />
                <span>Fast Delivery</span>
              </div>
            </div>

          </div>

          {/* ================= HERO BACKGROUND IMAGE ================= */}
          <div className="welcome-hero-visual">

            <div className="welcome-image-glow"></div>

            <div className="welcome-image-card">
              <img
                src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1800&q=90"
                alt="Premium laptop"
              />

              <div className="welcome-image-overlay"></div>

              <div className="welcome-floating-card">
                <span className="floating-label">
                  FEATURED
                </span>

                <strong>
                  Power meets
                  <br />
                  precision.
                </strong>
              </div>
            </div>

          </div>

        </section>

        {/* ================= CATEGORY SECTION ================= */}
        <section className="welcome-categories">

          <div className="welcome-section-heading">
            <div>
              <span>EXPLORE</span>
              <h2>Everything you need.</h2>
            </div>

            <p>
              From everyday essentials to powerful tech,
              discover products built for the future.
            </p>
          </div>

          <div className="welcome-category-grid">

            <Link to="/products" className="welcome-category-card large">
              <img
                src="https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?auto=format&fit=crop&w=1000&q=85"
                alt="Laptop"
              />

              <div className="category-overlay"></div>

              <div className="category-content">
                <span>01</span>
                <h3>Laptops</h3>
                <p>Power your ideas.</p>
                <ArrowRight size={20} />
              </div>
            </Link>

            <Link to="/products" className="welcome-category-card">
              <img
                src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=85"
                alt="Smartphone"
              />

              <div className="category-overlay"></div>

              <div className="category-content">
                <span>02</span>
                <h3>Smartphones</h3>
                <p>Stay connected.</p>
                <ArrowRight size={20} />
              </div>
            </Link>

            <Link to="/products" className="welcome-category-card">
              <img
                src="https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=900&q=85"
                alt="Gaming setup"
              />

              <div className="category-overlay"></div>

              <div className="category-content">
                <span>03</span>
                <h3>Gaming</h3>
                <p>Play without limits.</p>
                <ArrowRight size={20} />
              </div>
            </Link>

          </div>

        </section>

        {/* ================= BOTTOM CTA ================= */}
        <section className="welcome-cta">

          <div className="welcome-cta-content">
            <span>THE NEXORA EXPERIENCE</span>

            <h2>
              Upgrade the way
              <br />
              <em>you experience technology.</em>
            </h2>

            <p>
              Join NEXORA and discover technology selected
              for people who expect more.
            </p>

            <Link to="/signup" className="welcome-primary-btn">
              Create Your Account
              <ArrowRight size={19} />
            </Link>
          </div>

        </section>

      </main>

      {/* ================= FOOTER ================= */}
   

    </div>
  );
};

export default Welcome;

