import React from 'react';
import image from '../assets/image.png';
import '../App.css';

function Hero() {
  return (
    <div className='App'>
      <div className='App-header'>
        <img src={image} alt='img' className='img1' />
        <span className='hbd'>Happy <br /> Birthday</span>
        <p className='p1'>A very special day like this comes annually: once a year. Not just that, you add an extra year.
           And it is my wish for you that your deepest heart desire gets granted, amen. </p>
      </div>
    </div>
  )
}

export default Hero