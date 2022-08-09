import React from 'react'
import './style.scss'

function Creations() {
  return (
    <section className="CreationSection">
      <div className="head">
        <h1 className="heading">our creations</h1>
        <button className="seeAllBtn">see all</button>
      </div>

      <div className="gallery">
        <div className="deepEarth">
          <h2>deep earth</h2>
        </div>
        <div className="nightArcade">
          <h2>night arcade</h2>
        </div>
        <div className="soccerTeamVR">
          <h2>soccer team vr</h2>
        </div>
        <div className="theGrid">
          <h2>the grid</h2>
        </div>
        <div className="fromUpAbove">
          <h2>from up above vr</h2>
        </div>
        <div className="pocketBorealis">
          <h2>pocket borealis</h2>
        </div>
        <div className="curiosity">
          <h2>the curiosity</h2>
        </div>
        <div className="fisheye">
          <h2>make if fisheye</h2>
        </div>
      </div>

      <div className="foot">
        <button className="seeAllBtn">see all</button>
      </div>
    </section>
  )
}

export default Creations
