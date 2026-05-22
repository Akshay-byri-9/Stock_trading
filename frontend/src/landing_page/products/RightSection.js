import React from "react";

function RightSection({ imageURL, productName, productDesription, learnMore }) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-6 col-md-12 col-12 p-4 mt-4">
          <h1>{productName}</h1>
          <p>{productDesription}</p>
          <div>
            <a href={learnMore} style={{textDecoration:"none"}}>Learn More</a>
          </div>
        </div>
       <div className="col-lg-6 col-md-12 col-12 text-center">
          <img src={imageURL} className="img-fluid" />
        </div>
      </div>
    </div>
  );

}

export default RightSection;