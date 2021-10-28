import React from "react";

const Footer = () => {
  return (
    <div className="d-flex justify-content-between footer-section">
      <h2 className="footer-title chirp-logo">Chirp.</h2>

      <div className="d-flex justify-content-between align-items-center footer-links">
      <a href="/">
          {" "}
          <i className="fab fa-twitter"></i>{" "}
        </a>
        <a href="/">Privacy Policy</a>
        <a href="/">Terms of Use</a>
      </div>
    </div>
  );
};

export default Footer;
