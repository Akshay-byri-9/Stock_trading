import React from 'react';
import { Link } from "react-router-dom";

function OpenAccount() {
    return (
        <div className='container p-5 mt-5 mb-5'>
            <div className='row text-center'>
                <h1 className='mt-5 mb-3'>Open a Zerodha Account</h1>
                <p className='mb-3'>Modern platforms and apps, ₹0 investments and flat ₹20 intraday and F&O trades</p>
                <Link to='/signup'>
                    <button
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
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default OpenAccount;