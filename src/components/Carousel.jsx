import React, { useState, useEffect } from "react";
import "../css/index.css";

export default function Carousel({ items = [], interval = 5000 }) {
  const [index, setIndex] = useState(0);

  // Troca automática
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, interval);

    return () => clearInterval(timer);
  }, [index]);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  return (
    <div className="carousel-container">
      {/* Slides */}
      {items.map((item, i) => (
        <div
          key={item.id}
          className={`carousel-slide ${i === index ? "active" : ""}`}
          style={{ backgroundImage: `url(${item.imagem})` }}
        >
          <div className="carousel-text">
            <h2>{item.titulo}</h2>
            <p>{item.texto}</p>

            {item.link && (
              <a href={item.link} className="carousel-btn-link">
                Ler mais →
              </a>
            )}
          </div>
        </div>
      ))}

      {/* Botões */}
      <button className="carousel-btn left" onClick={prevSlide}>
        ‹
      </button>

      <button className="carousel-btn right" onClick={nextSlide}>
        ›
      </button>

      {/* Dots */}
      <div className="carousel-dots">
        {items.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
          ></span>
        ))}
      </div>
    </div>
  );
}
