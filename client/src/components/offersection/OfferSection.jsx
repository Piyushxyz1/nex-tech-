
import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  ShieldCheck,
  Truck,
  CreditCard,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const OfferSection = () => {
  const navigate = useNavigate();

  return (
    <section className="special-offer-section">
      {/* ================= BACKGROUND ELEMENTS ================= */}

      <div className="offer-grid-bg"></div>
      <div className="offer-glow offer-glow-one"></div>
      <div className="offer-glow offer-glow-two"></div>

      {/* ================= CONTENT ================= */}

      <motion.div
        className="special-offer-content"
        initial={{
          opacity: 0,
          x: -50,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{
          once: true,
          amount: 0.35,
        }}
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <div className="offer-topline">
          <span className="offer-line"></span>
          <span className="small-heading">SPECIAL OFFER</span>
        </div>

        <h2>
          Work smarter.
          <span>Live better.</span>
        </h2>

        <p className="offer-description">
          Upgrade your everyday experience with powerful Nexora
          technology engineered for modern work, entertainment,
          and connected living.
        </p>

        {/* ================= PRICE ================= */}

        <div className="offer-pricing">
          <span className="offer-price-label">EXCLUSIVE PRICE</span>

          <div className="price-row">
            <del>₹1,39,999</del>

            <strong>₹99,999</strong>

            <span className="offer-save">SAVE 28%</span>
          </div>
        </div>

        {/* ================= OFFER STATUS ================= */}

        <div className="special-offer-badge">
          <span className="badge-dot"></span>
          LIMITED TIME OFFER
        </div>

        {/* ================= FEATURES ================= */}

        <div className="special-offer-features">
          <div className="offer-feature">
            <span className="feature-icon">
              <Truck size={14} />
            </span>
            <span>Free Delivery</span>
          </div>

          <div className="offer-feature">
            <span className="feature-icon">
              <ShieldCheck size={14} />
            </span>
            <span>1 Year Warranty</span>
          </div>

          <div className="offer-feature">
            <span className="feature-icon">
              <CreditCard size={14} />
            </span>
            <span>Easy EMI</span>
          </div>
        </div>

        {/* ================= CTA ================= */}

        <button
          className="dark-button offer-cta"
          onClick={() => navigate("/offers")}
        >
          <span>SHOP NOW</span>

          <span className="offer-arrow">
            <ArrowRight size={16} />
          </span>
        </button>
      </motion.div>

      {/* ================= IMAGE ================= */}

      <motion.div
        className="special-offer-image"
        initial={{
          opacity: 0,
          x: 80,
          scale: 0.94,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          scale: 1,
        }}
        viewport={{
          once: true,
          amount: 0.3,
        }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <div className="offer-image-frame">
          {/* IMAGE LABEL */}

          <div className="offer-image-label">
            <span>NEXORA</span>
            <span>01 / 01</span>
          </div>

          {/* IMAGE */}

          <div className="special-offer-image-wrap">
            <img
              src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=2200&q=92"
              alt="Premium laptop"
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* IMAGE OVERLAY */}

          <div className="offer-image-overlay">
            <div className="overlay-content">
              <span>PREMIUM COMPUTING</span>
              <strong>Built for what's next.</strong>
            </div>

            <div className="overlay-number">
              NX
            </div>
          </div>

          {/* CORNER MARKS */}

          <span className="frame-corner frame-corner-tl"></span>
          <span className="frame-corner frame-corner-tr"></span>
          <span className="frame-corner frame-corner-bl"></span>
          <span className="frame-corner frame-corner-br"></span>
        </div>
      </motion.div>
    </section>
  );
};

export default OfferSection;


