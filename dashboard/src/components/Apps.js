import React from "react";
import "./Apps.css";

function Apps() {
  return (
    <div className="apps-container">

      <h1 className="apps-title">Apps</h1>

      <div className="apps-grid">

        <div className="app-card">
          <div className="icon">📈</div>

          <h3>Watchlist</h3>

          <p>
            Track your favorite stocks easily.
          </p>

          <button>Open</button>
        </div>

        <div className="app-card">
          <div className="icon">📰</div>

          <h3>Market News</h3>

          <p>
            Latest updates from the market.
          </p>

          <button>View</button>
        </div>

        <div className="app-card">
          <div className="icon">📊</div>

          <h3>TradingView</h3>

          <p>
            Simple stock chart widget.
          </p>

          <button>Launch</button>
        </div>

      </div>

    </div>
  );
}

export default Apps;