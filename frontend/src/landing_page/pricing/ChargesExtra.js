import React from "react";

function ChargesExtra() {
  return (
    <div className="container mt-5">

      {/* Account Opening */}
      <h2 className="mb-4">Charges for account opening</h2>
      <div className="table-box mb-5">
        <table className="table">
          <thead>
            <tr>
              <th>Type of account</th>
              <th>Charges</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Online account</td>
              <td><span className="badge bg-success">FREE</span></td>
            </tr>
            <tr>
              <td>Offline account</td>
              <td><span className="badge bg-success">FREE</span></td>
            </tr>
            <tr>
              <td>NRI account (offline only)</td>
              <td>₹ 500</td>
            </tr>
            <tr>
              <td>Partnership / LLP / Corporate</td>
              <td>₹ 500</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* AMC */}
      <h2 className="mb-4">Demat AMC (Annual Maintenance Charge)</h2>
      <div className="table-box">
        <table className="table">
          <thead>
            <tr>
              <th>Value of holdings</th>
              <th>AMC</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Up to ₹4 lakh</td>
              <td><span className="badge bg-success">FREE*</span></td>
            </tr>
            <tr>
              <td>₹4 lakh - ₹10 lakh</td>
              <td>₹100 per year</td>
            </tr>
            <tr>
              <td>Above ₹10 lakh</td>
              <td>₹300 per year</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default ChargesExtra;