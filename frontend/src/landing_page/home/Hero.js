import React from 'react';
import { Link } from "react-router-dom";
function Hero() {
  return (
    <div className='container p-5 mb-5'>
      <div className='row text-center'>
        <img src='images/homeHero.png' alt='Hero Image' className='mb-5' />
        <h1 className='mt-5 mb-3'>Invest in everything</h1>
        <p className='mb-3'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
        <Link to='/signup'><button
          className='p-2 btn btn-primary fs-5 mb-5'
          style={{
            width: "auto",
            minWidth: "180px",
            padding: "12px 24px",
            margin: "0 auto",
            whiteSpace: "nowrap"
          }}
        >
          Sign up for free
        </button></Link>
      </div>
    </div>
  );
}

export default Hero;