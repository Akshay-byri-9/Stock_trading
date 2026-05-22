import React from 'react';

function LeftSection({
    imageURL,
    productName,
    productDescription,
    tryDemo,
    LearnMore,
    googlePlay,
    appStore,
}) {
    return (
    
    <div className='container mt-5'>
        <div className='row '>
           <div className='col-lg-6 col-md-12 col-12 text-center'>
                <img src={imageURL} className="img-fluid" />
            </div>
             <div className='col-lg-6 col-md-12 col-12 p-4 mt-4'>
                <h1>{productName}</h1>
                <p>{productDescription}</p>
                <div>
                <a href={tryDemo} style={{textDecoration:"none"}}>Try Demo</a>
               <a href={LearnMore} className="ms-lg-5 d-inline-block mt-3 mt-lg-0" style={{textDecoration:"none"}}></a>
                 </div>
                 <div className='mt-4'>
                  <a href={googlePlay}><img src="images/googlePlayBadge.svg" /></a>
                   <a href={appStore}><img src="images/appstoreBadge.svg"  className="img-fluid ms-lg-5 mt-3 mt-lg-0" /></a>
                   </div>
             </div>
        </div>
    </div>
    );
     
}

export default LeftSection;