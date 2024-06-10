import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

const FaqContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  font-family: Arial, sans-serif;
`;

const FaqBanner = styled.div`
  background-color: #f5f5f5;
  padding: 20px;
  text-align: center;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const FaqBannerContent = styled.div`
  h4 {
    margin: 0;
    color: #333;
  }
  p {
    color: #666;
  }
`;

const FaqSection = styled.div`
  margin-bottom: 10px;
`;

const FaqQuestion = styled.div`
  background-color: #f0e5d8;
  padding: 15px;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 5px;
  color: #333;
`;

const FaqAnswer = styled.div`
  background-color: #f9f9f9;
  padding: 10px;
  border-radius: 8px;
  display: ${({ isVisible }) => (isVisible ? "block" : "none")};
  color: #666;
`;

const FAQ = () => {
  const [visibleAnswers, setVisibleAnswers] = useState([false, false, false, false]);

  const toggleAnswerVisibility = (index) => {
    setVisibleAnswers((prevVisibleAnswers) => {
      const newVisibleAnswers = [...prevVisibleAnswers];
      newVisibleAnswers[index] = !newVisibleAnswers[index];
      return newVisibleAnswers;
    });
  };

  return (
    <FaqContainer>
      <FaqBanner>
        <FaqBannerContent>
          <h4>Часто задаваемые вопросы</h4>
          <p>Здесь вы найдете ответы на часто задаваемые вопросы о нашем Веб-Портале Магазинов Мебели.</p>
        </FaqBannerContent>
      </FaqBanner>
      <FaqSection>
        <FaqQuestion onClick={() => toggleAnswerVisibility(0)}>
          Как я могу сделать заказ?
        </FaqQuestion>
        <FaqAnswer isVisible={visibleAnswers[0]}>
          Для оформления заказа вам необходимо выбрать интересующий вас товар и добавить его в корзину. Затем перейдите в корзину и оформите заказ
        </FaqAnswer>
      </FaqSection>
      <FaqSection>
        <FaqQuestion onClick={() => toggleAnswerVisibility(1)}>
          За какое время осуществляется доставка товара?
        </FaqQuestion>
        <FaqAnswer isVisible={visibleAnswers[1]}>
          Менеджер перезвонит вам по указанному номеру, оформит заказ в течение двух дней
        </FaqAnswer>
      </FaqSection>
      <FaqSection>
        <FaqQuestion onClick={() => toggleAnswerVisibility(2)}>
          Каковы условия доставки?
        </FaqQuestion>
        <FaqAnswer isVisible={visibleAnswers[2]}>
          Мы предоставляем бесплатную доставку для заказов на сумму более 1000 сом
        </FaqAnswer>
      </FaqSection>
      <FaqSection>
        <FaqQuestion onClick={() => toggleAnswerVisibility(3)}>
          Какими скидками пользователь может воспользоваться при покупке мебели?
        </FaqQuestion>
        <FaqAnswer isVisible={visibleAnswers[3]}>
          Существуют скидки на некоторые категории мебели
        </FaqAnswer>
      </FaqSection>
    </FaqContainer>
  );
};

export default FAQ;
