import React from "react";
import "./Funds.css";

const Funds = () => {
  return (
    <div className="funds-page">

      {/* Top Cards */}
      <div className="top-cards">

        <div className="top-card">
          <div>
            <p className="top-text">
              Instant, zero-cost fund transfers with UPI
            </p>
          </div>

          <div className="top-buttons">
            <button className="green-btn">Add funds</button>
            <button className="blue-btn">Withdraw</button>
          </div>
        </div>

        <div className="top-card commodity-card">
          <p>You don't have a commodity account</p>

          <button className="open-btn">
            Open Account
          </button>
        </div>

      </div>

      {/* Equity Section */}
      <div className="equity-section">

        <h3>Equity</h3>

        <div className="equity-card">

          {/* Top Summary */}
          <div className="summary-row">

            <div className="summary-item">
              <p>Available margin</p>
              <h2 className="green">4,043.10</h2>
            </div>

            <div className="summary-item">
              <p>Used margin</p>
              <h2>3,757.30</h2>
            </div>

            <div className="summary-item">
              <p>Available cash</p>
              <h2>4,043.10</h2>
            </div>

          </div>

          <hr />

          {/* Details */}
          <div className="details-grid">

            <div className="details-column">

              <div className="detail">
                <p>Opening Balance</p>
                <span>4,043.10</span>
              </div>

              <div className="detail">
                <p>Opening Balance</p>
                <span>3736.40</span>
              </div>

              <div className="detail">
                <p>Payin</p>
                <span>4064.00</span>
              </div>

              <div className="detail">
                <p>SPAN</p>
                <span>0.00</span>
              </div>

              <div className="detail">
                <p>Delivery margin</p>
                <span>0.00</span>
              </div>

              <div className="detail">
                <p>Exposure</p>
                <span>0.00</span>
              </div>

              <div className="detail">
                <p>Options premium</p>
                <span>0.00</span>
              </div>

            </div>

            <div className="details-column">

              <div className="detail">
                <p>Collateral (Liquid funds)</p>
                <span>0.00</span>
              </div>

              <div className="detail">
                <p>Collateral (Equity)</p>
                <span>0.00</span>
              </div>

              <div className="detail">
                <p>Total Collateral</p>
                <span>0.00</span>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Funds;