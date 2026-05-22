import React from 'react';

function Universe() {
    return ( 
      <div className="container text-center mt-5 mb-5">
  <div className="row">
    <h2 className=' mt-5'>The Zerodha Universe</h2>
    <p className='mt-3 mb-5 fs-5'>Extend your trading and investment experience even further with our partner platforms</p>

    <div className="col-md-4  mt-5 mb-5">
      <img src="images/zerodhaFundhouse.png" className="partner-logo" />
      <p className="partner-text">
        Our asset management venture that is creating simple and transparent index funds.
      </p>
    </div>

    <div className="col-md-4 mt-5 mb-5">
      <img src="images/sensibull-logo.svg" className="partner-logo" />
      <p className="partner-text">
        Options trading platform that lets you create strategies.
      </p>
    </div>

    <div className="col-md-4 mt-5 mb-5">
      <img src="images/tijori.svg" className="partner-logo" />
      <p className="partner-text">
        Investment research platform with detailed insights.
      </p>
    </div>

  </div>

  <div className="row">

    <div className="col-md-4 mt-5 mb-5">
      <img src="images/streak-logo.png" className="partner-logo" />
      <p className="partner-text">
        Systematic trading platform to create strategies without coding.
      </p>
    </div>

    <div className="col-md-4 mt-5 mb-5">
      <img src="images/smallcaseLogo.png" className="partner-logo" />
      <p className="partner-text">
        Thematic investing platform for diversified baskets.
      </p>
    </div>

    <div className="col-md-4 mt-5 mb-5">
      <img src="images/ditto-logo.png" className="partner-logo" />
      <p className="partner-text">
        Personalized advice on life and health insurance.
      </p>
    </div>

  </div>
 
  {/* <div className="text-center mt-4 mb-5">
  <button className="signup-btn">Sign up for free</button>
</div> */}

</div>
     );
}

export default Universe;