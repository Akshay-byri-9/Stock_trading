import React, { useState } from "react";


function PricingTable() {
  const [activeTab, setActiveTab] = useState("equity");

  return (
    <div className="container mt-5 ">

      {/* Tabs */}
      <div className="pricing-tabs">
        <span onClick={() => setActiveTab("equity")} className={activeTab==="equity" ? "active" : ""}>Equity</span>
        <span onClick={() => setActiveTab("currency")} className={activeTab==="currency" ? "active" : ""}>Currency</span>
        <span onClick={() => setActiveTab("commodity")} className={activeTab==="commodity" ? "active" : ""}>Commodity</span>
      </div>

      {/* Table */}
      <div className="pricing-table-box mt-4">

        {activeTab === "equity" && (
          <table className="table">
            <thead>
              <tr>
                <th></th>
                <th>Equity delivery</th>
                <th>Equity intraday</th>
                <th>F&O - Futures</th>
                <th>F&O - Options</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Brokerage</td>
                <td>Zero Brokerage</td>
                <td>0.03% or ₹20/executed order whichever is lower</td>
                <td>0.03% or ₹20/executed order whichever is lower</td>
                <td>₹20 per executed order</td>
              </tr>

              <tr>
                <td>STT/CTT</td>
                <td>0.1% on buy & sell</td>
                <td>0.025% on sell side</td>
                <td>0.05% on sell side</td>
                <td>0.15% of the intrinsic value on options that are brought and exercised</td>
              </tr>

               <tr>
                <td>Transaction charges</td>
                <td>NSE: 0.00307%<br/>BSE: 0.00375%</td>
                <td>NSE: 0.00307%<br/>BSE: 0.00375%</td>
                <td>NSE: 0.00183%<br/>BSE: 0</td>
                <td>NSE: 0.03553% (on premium)<br/>BSE: 0.0325%(on premium)</td>
              </tr>

              <tr>
                <td>GST</td>
                <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                <td>18% on (brokerage + SEBI charges + transaction charges)</td>
                <td>18% on (brokerage + SEBI charges + transaction charges)</td>
              </tr>

              <tr>
                <td>SEBI charges</td>
                <td>₹10 / crore</td>
                <td>₹10 / crore</td>
                <td>₹10 / crore</td>
                <td>₹10 / crore</td>
              </tr>

               <tr>
                <td>Stamp charges</td>
                <td>0.015% or ₹1500/crore on buy side</td>
                <td>0.003% or ₹300/crore on buy side</td>
                <td>0.002% or ₹200/crore on buy side</td>
                <td>0.003% or ₹300/crore on buy side</td>
              </tr>
            </tbody>
          </table>
        )}

        {activeTab === "currency" && (
          <table className="table">
            <thead>
              <tr>
                <th></th>
                <th>Currency futures</th>
                <th>Currency options</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Brokerage</td>
                <td>0.03% or ₹20/executed order whichever is lower</td>
                <td>₹20/executed order</td>
              </tr>

              <tr>
                <td>STT</td>
                <td>No STT</td>
                <td>No STT</td>
              </tr>

              <tr>
                <td>Transaction charges</td>
                <td>NSE: 0.00035%<br/>BSE: 0.00045%</td>
                <td>NSE: 0.0311%<br/>BSE: 0.001%</td>
              </tr>

               <tr>
                <td>GST</td>
                <td>18% on (brokerage + SEBI charges + ransaction charges)</td>
                <td>18%  on (brokerage + SEBI charges + ransaction charges)</td>
              </tr>

                <tr>
                <td>SEBI charges</td>
                <td>₹10/crore</td>
                <td>₹10/crore</td>
              </tr>

               <tr>
                <td>Stamp charges</td>
                <td>0.0001% or ₹10/crore on buy side </td>
                <td>0.0001% or ₹10/crore on buy side </td>
              </tr>
            </tbody>
          </table>
        )}

        {activeTab === "commodity" && (
          <table className="table">
            <thead>
              <tr>
                <th></th>
                <th>Commodity futures</th>
                <th>Commodity options</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Brokerage</td>
                <td>0.03% or ₹20/executed order whichever is lower</td>
                <td>₹20/executed order</td>
              </tr>

              <tr>
                <td>STT/CTT</td>
                <td>0.01% on sell side (Non-Agri)</td>
                <td>0.05% on sell side</td>
              </tr>

              <tr>
                <td>Transaction charges</td>
                <td>MCX : 0.0021%<br/>NSE : 0.0001%</td>
                <td>MCX : 0.0418%<br/>NSE : 0.0001%</td>
              </tr>

              
              <tr>
                <td>SEBI charges</td>
                <td>Agri:<br/>₹1/crore<br/>Non-agri<br/>₹10/crore</td>
                <td>₹10/crore</td>
              </tr>

               
              <tr>
                <td>Stamp charges</td>
                <td>0.002% or ₹200/ crore on buy side</td>
                <td>0.003% or ₹300/ crore on buy side</td>
              </tr>
            </tbody>
          </table>
        )}

      </div>
    </div>
  );
}

export default PricingTable;