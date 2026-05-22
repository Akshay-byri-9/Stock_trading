import React from "react";

function Hero() {
  return (
    <div className="support-header">
      <h1>Support Portal</h1>
      <button className="ticket-btn">My tickets</button>

      <input
        type="text"
        placeholder="Eg: How do I open my account..."
        className="search-bar"
      />
    </div>
  );
}

export default Hero;