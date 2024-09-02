// Button.js
import React from 'react';
import './Button.css'; // Import the CSS

const Button = ({ text, onClick }) => {
  return (
    <button className="feedback-button" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
