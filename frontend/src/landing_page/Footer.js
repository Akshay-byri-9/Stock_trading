import React from "react";

function Footer() {
  return (
  <footer className="footer mt-5">
  <div className="container">
    <div className="row">

      {/* LEFT SECTION */}
      <div className="col-md-3">
        <img src="images/logo.svg" className="footer-logo" />

        <p className="footer-text">
          © 2010 - 2026, Zerodha Broking Ltd.<br />
          All rights reserved.
        </p>

        <div className="social-icons">
          <a href="https://www.instagram.com/zerodhaonline/" target="_blank" rel="noreferrer"><i className="fa fa-instagram"></i></a>
          <a href="https://www.youtube.com/@zerodhaonline" target="_blank" rel="noreferrer"><i className="fa fa-youtube-play"></i></a>
          <a href="https://www.linkedin.com/company/zerodha/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin"></i></a>
        </div>

        <div className="app-buttons">
          <img src="images/googlePlayBadge.svg" />
          <img src="images/appstoreBadge.svg" />
        </div>
      </div>

      {/* ACCOUNT */}
      <div className="col-md-2 footer-col">
        <h6>Account</h6>
        <p>Open demat account</p>
        <p>Minor demat account</p>
        <p>NRI demat account</p>
        <p>HUF demat account</p>
        <p>Commodity</p>
        <p>Dematerialisation</p>
        <p>Fund transfer</p>
        <p>MTF</p>
      </div>

      {/* SUPPORT */}
      <div className="col-md-2 footer-col">
        <h6>Support</h6>
        <p>Contact us</p>
        <p>Support portal</p>
        <p>How to file a complaint?</p>
        <p>Status of complaints</p>
        <p>Bulletin</p>
        <p>Circular</p>
        <p>Z-Connect blog</p>
        <p>Downloads</p>
      </div>

      {/* COMPANY */}
      <div className="col-md-2 footer-col">
        <h6>Company</h6>
        <p>About</p>
        <p>Philosophy</p>
        <p>Press & media</p>
        <p>Careers</p>
        <p>Zerodha Cares (CSR)</p>
        <p>Zerodha.tech</p>
        <p>Open source</p>
        <p>Referral program</p>
      </div>

      {/* QUICK LINKS (THIS WAS YOUR MISTAKE) */}
      <div className="col-md-3 footer-col">
        <h6>Quick links</h6>
        <p>Upcoming IPOs</p>
        <p>Brokerage charges</p>
        <p>Market holidays</p>
        <p>Economic calendar</p>
        <p>Calculators</p>
        <p>Markets</p>
        <p>Sectors</p>
        <p>Gift Nifty</p>
      </div>

    </div>
  </div>
<div className="footer-bottom">
  <div className="container">

    <p>
      Zerodha Broking Ltd.: Member of NSE, BSE, MCX & MSEI – SEBI Registration no.: INZ000031633
      CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019
      Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School,
      J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India.
      For any complaints pertaining to securities broking please write to
      <span className="link"> complaints@zerodha.com</span>,
      for DP related to <span className="link">dp@zerodha.com</span>.
    </p>

    <p>
      Procedure to file a complaint on <span className="link">SEBI SCORES</span>:
      Register on SCORES portal. Mandatory details for filing complaints on SCORES:
      Name, PAN, Address, Mobile Number, E-mail ID.
    </p>

    <p className="link">
      Smart Online Dispute Resolution | Grievances Redressal Mechanism
    </p>

    <p>
      Investments in securities market are subject to market risks; read all the related documents carefully before investing.
    </p>

    <p>
      Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system.
      2) Update your e-mail and phone number with your stock broker.
      3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.
    </p>

    <p>
      India's largest broker based on networth as per NSE.
      <span className="link"> NSE broker factsheet</span>
    </p>

    <p>
      Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers.
      Receive information of your transactions directly from Exchange on your mobile/email.
    </p>

  </div>
  </div>
  </footer>
  );

}

export default Footer;