import React from 'react'
import logo from 'assets/images/icons/logo.svg'
import facebook from 'assets/images/icons/icon-facebook.svg'
import twitter from 'assets/images/icons/icon-twitter.svg'
import pinterest from 'assets/images/icons/icon-pinterest.svg'
import instagram from 'assets/images/icons/icon-instagram.svg'
import './style.scss'

function Footer() {
  return (
    <footer className="FooterSection">
      <div className="top">
        <img src={logo} alt="loopstudios logo" className="logo" />

        <nav className="footerNav">
          <a className="link" href="#about">
            About
          </a>
          <a className="link" href="#careers">
            Careers
          </a>
          <a className="link" href="#events">
            Events
          </a>
          <a className="link" href="#products">
            Products
          </a>
          <a className="link" href="#support">
            Support
          </a>
        </nav>
      </div>

      <div className="bottom">
        <div className="social-links">
          <a href="https://www.facebook.com/" className="link">
            <img src={facebook} alt="facebook" />
          </a>
          <a href="https://twitter.com/" className="link">
            <img src={twitter} alt="twitter" />
          </a>
          <a href="https://www.pinterest.com/" className="link">
            <img src={pinterest} alt="pinterest" />
          </a>
          <a href="https://www.instagram.com/" className="link">
            <img src={instagram} alt="instagram" />
          </a>
        </div>
        <p className="copyright">&copy; 2021 Loopstudios. All right reserved. </p>
      </div>
    </footer>
  )
}

export default Footer
