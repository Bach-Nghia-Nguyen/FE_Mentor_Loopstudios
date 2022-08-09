import React, { useState } from 'react'
import logo from 'assets/images/icons/logo.svg'
import hamburger from 'assets/images/icons/icon-hamburger.svg'
import close from 'assets/images/icons/icon-close.svg'
import './style.scss'

function Hero() {
  const [showSideMenu, setShowSideMenu] = useState(false)

  const handleCloseSideMenu = () => {
    setShowSideMenu(false)
  }

  const handleOpenSideMenu = () => {
    setShowSideMenu(true)
  }

  return (
    <section className="HeroSection">
      <div className="header">
        <img src={logo} alt="loopstudios logo" className="logo" />

        <nav className="navbar">
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

        <img
          src={hamburger}
          alt="hamburger icon"
          className="hamburger"
          onClick={handleOpenSideMenu}
        />
      </div>

      <div className="message">immersive experiences that deliver</div>

      <div className={`side-menu ${showSideMenu && 'show'}`}>
        <div className="head">
          <img src={logo} alt="loopstudios logo" className="logo" />
          <img src={close} alt="close icon" className="close" onClick={handleCloseSideMenu} />
        </div>

        <nav className="navbar">
          <a className="link" href="#about" onClick={handleCloseSideMenu}>
            About
          </a>
          <a className="link" href="#careers" onClick={handleCloseSideMenu}>
            Careers
          </a>
          <a className="link" href="#events" onClick={handleCloseSideMenu}>
            Events
          </a>
          <a className="link" href="#products" onClick={handleCloseSideMenu}>
            Products
          </a>
          <a className="link" href="#support" onClick={handleCloseSideMenu}>
            Support
          </a>
        </nav>
      </div>
    </section>
  )
}

export default Hero
