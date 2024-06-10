import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-banner">
      
        <div className="about-banner-content">
          <h4>Добро пожаловать на наш Веб-Портал Магазинов Мебели!</h4>
          <h5>Лучшие предложения и качественная мебель</h5>
          <p>Найдите идеальную мебель для вашего дома или офиса с нами</p>
          <a href="/contact" className="button">Связаться с нами</a>
        </div>
      </div>
      <div className="mission-section">
        <h3>Наша миссия</h3>
        <p>
          Мы стремимся предоставить нашим клиентам доступ к лучшей мебели от
          ведущих производителей. Наша цель - сделать процесс выбора и
          покупки мебели легким и приятным. Мы предлагаем широкий
          ассортимент товаров, отличное обслуживание и удобный интерфейс
          для поиска идеальных решений для вашего интерьера.
        </p>
      </div>
    </div>
  );
};

export default About;
