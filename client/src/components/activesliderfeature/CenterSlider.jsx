import React, { useEffect, useState } from "react";

import slider1 from "../../assets/images/home/slide-1.jpg";
import slider2 from "../../assets/images/home/slide-2.jpg";
import slider3 from "../../assets/images/home/slide-3.jpg";
import slider4 from "../../assets/images/home/slide-4.jpg";

import "./slider.css";

const slides = [
  {
    image: slider1,
    title: "Built-in sustainability",
    description:
      "Sleek 14-inch 2-in-1 with on-device Copilot+ powered by Intel® Core™",
    label: "Designed for tomorrow",
  },
  {
    image: slider2,
    title: "Power meets portability",
    description:
      "Designed for productivity with powerful performance and a premium finish.",
    label: "Performance without limits",
  },
  {
    image: slider3,
    title: "Made for your workflow",
    description:
      "A refined laptop experience built for work, creativity and everyday use.",
    label: "Your work, reimagined",
  },
  {
    image: slider4,
    title: "Next-level performance",
    description:
      "Experience fast, responsive performance wherever you work.",
    label: "Built to perform",
  },
];

const CenterSlider = () => {
  const [active, setActive] = useState(0);

  const nextSlide = () => {
    setActive((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setActive((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);

    return () => clearInterval(interval);
  }, []);

  const getPosition = (index) => {
    let diff = index - active;

    if (diff > Math.floor(slides.length / 2)) {
      diff -= slides.length;
    }

    if (diff < -Math.floor(slides.length / 2)) {
      diff += slides.length;
    }

    return diff;
  };

  return (
    <section className="center-slider-section">
      <div className="center-slider-heading">
        <span>DISCOVER WHAT'S POSSIBLE</span>
        <h2>Technology that moves you forward.</h2>
        <p>Explore performance, design and innovation in every detail.</p>
      </div>

      <div className="center-slider">
        {slides.map((slide, index) => {
          const position = getPosition(index);

          const positionClass =
            position === 0
              ? "active"
              : position === -1
                ? "left"
                : position === 1
                  ? "right"
                  : "hidden";

          return (
            <article
              key={index}
              className={`slider-card ${positionClass}`}
              onClick={() => setActive(index)}
              aria-label={`Show ${slide.title}`}
              aria-current={position === 0 ? "true" : undefined}
            >
              <img
                src={slide.image}
                alt={slide.title}
                loading={position === 0 ? "eager" : "lazy"}
                decoding="async"
                draggable="false"
              />

              <div className="slide-gradient" />

              <div className="slide-content">
                <span className="slide-label">{slide.label}</span>
                <h3>{slide.title}</h3>
                <p>{slide.description}</p>
              </div>
            </article>
          );
        })}
      </div>

      <div className="center-slider-controls">
        <button
          type="button"
          className="slider-arrow"
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          &#8592;
        </button>

        <div className="slider-dots">
          {slides.map((slide, index) => (
            <button
              key={index}
              type="button"
              className={`slider-dot ${active === index ? "selected" : ""}`}
              onClick={() => setActive(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={active === index ? "true" : undefined}
            />
          ))}
        </div>

        <button
          type="button"
          className="slider-arrow"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          &#8594;
        </button>
      </div>
    </section>
  );
};

export default CenterSlider;