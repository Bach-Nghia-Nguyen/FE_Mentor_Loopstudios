import React from 'react'
import interactive from 'assets/images/desktop/image-interactive.jpg'
import './style.scss'

function About() {
  return (
    <section className="AboutSection">
      <div className="wrapper">
        <img src={interactive} alt="interactive vr" className="interactive" />

        <div className="info">
          <div className="infoInnerWrapper">
            <h1 className="heading">the leader in interactive vr</h1>
            <p className="description">
              Founded in 2011, Loopstudios has been producing world-class virtual reality projects
              for some of the best companies around the globe. Our award-winning creations have
              transformed businesses through digital experiences that bind to their brand.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
