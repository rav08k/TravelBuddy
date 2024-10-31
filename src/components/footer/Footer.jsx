import React from 'react'

function Footer() {
  return (
    <footer className="footer">
  <div className="container">
    <div className="footer-logo">
      <img src={require("../../assets/icons/logo.png")} alt="Logo" />
    </div>
    <div className="footer-links">
      <a href="">Terms &amp; Conditions</a>
      <span>|</span>
      <a href="">Privacy Policy</a>
    </div>
    <div className="footer-copyright">
      <p>© 2024 TravelBuddy. All rights reserved.</p>
    </div>
    <div className="footer-social">
      <a href="https://facebook.com" target="_blank">
        <img src={require("../../assets/socials/facebook.png")} alt="Facebook" />
      </a>
      <a href="https://twitter.com" target="_blank">
        <img src={require("../../assets/socials/twitter.png")} alt="Twitter" />
      </a>
      <a href="https://instagram.com" target="_blank">
        <img src={require("../../assets/socials/instagram.png")} alt="Instagram" />
      </a>
      <a href="https://linkedin.com" target="_blank">
        <img src={require("../../assets/socials/linkedin.png")} alt="LinkedIn" />
      </a>
    </div>
  </div>
</footer>

  )
}

export default Footer