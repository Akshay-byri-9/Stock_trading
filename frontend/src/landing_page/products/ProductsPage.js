import React from 'react';

import Hero from './Hero';
import LeftSection from './LeftSection';
import RighSection from './RightSection';
import Universe from './Universe';


function ProductPage() {
    return (
        <>
            <Hero />
            <LeftSection 
            imageURL="images/kite.png" 
            productName="Kite" 
            productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." 
            tryDemo="" 
            LearnMore="" 
            googlePlay="" 
            appStore="" />
             <RighSection 
        imageURL="images/console.png"
        productName="Console"
        productDesription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        learnMore=""
                 />
             <LeftSection 
            imageURL="images/coin.png" 
            productName="Coin" 
            productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices." 
            tryDemo="" 
            LearnMore="" 
            googlePlay="" 
            appStore="" />
             <RighSection 
              
        imageURL="images/kiteconnect.png"
        productName="Kite Connect API"
        productDesription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        learnMore=""
      />
             <LeftSection 
            imageURL="images/varsity.png" 
            productName="Varsity Mobile" 
            productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go." 
              tryDemo="" 
            LearnMore="" 
            googlePlay="" 
            appStore="" />

              <p className=' fs-5 text-center mt-5'>Want to know more about our technology stack? Check out the <a href='https://zerodha.tech/' target="_blank" rel="noreferrer" style={{textDecoration:"none"}}>Zerodha.tech</a> blog.</p>

             <Universe />
        </>
        


    );
}

export default ProductPage;