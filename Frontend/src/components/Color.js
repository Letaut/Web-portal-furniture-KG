import React from 'react';

const Color = ({ colorData, setColor, selectedColor }) => {
  return (
    <ul className="colors ps-0">
      {colorData && colorData.map((item, index) => (
        <li
          key={index}
          style={{
            backgroundColor: item.title, // предполагаем, что title - это цвет
            border: selectedColor === item._id ? '2px solid black' : 'none', // добавляем рамку для выбранного цвета
            cursor: 'pointer',
            width: '25px',
            height: '25px'
          }}
          onClick={() => setColor(item._id)}
        />
      ))}
    </ul>
  );
};

export default Color;
