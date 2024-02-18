"use client"
import React, { useEffect } from 'react';
import Typed from 'typed.js';

const TypingAnimation = ({ strings, typeSpeed = 100, backSpeed = 60, loop = true, className }) => {
  useEffect(() => {
    const targetElement = document.querySelector(`.${className}`);
    if (targetElement) {
      const typed = new Typed(targetElement, {
        strings,
        typeSpeed,
        backSpeed,
        loop
      });
      return () => {
        typed.destroy();
      };
    }
  }, [strings, typeSpeed, backSpeed, loop, className]);

  return (
    <span className={`inline-block font-sans ${className}`}>Front End Developer</span>
  );
};

export default TypingAnimation;