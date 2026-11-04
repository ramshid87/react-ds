import React from 'react'
import onepiece from "../assets/onepiece.WEBP"
import odiyan from "../assets/odiyan.webp"
import oooo from "../assets/ooo.jpg"
import kasaba from "../assets/kasaba.jpg"
import rabi from "../assets/rabbi.jpg"
import ok from "../assets/ok.gif";
import './moviecard.css'

function MovieCard({Mtitle}) {
  return (
    <div>
        <div className="movies">
        <h1>{Mtitle}</h1>
        <div className="list">
            <img src={onepiece} alt="" />
            <img src={odiyan} alt="" />
            <img src={oooo} alt="" />
            <img src={kasaba} alt="" />
            <img src={rabi} alt="" />
            <img src={ok} alt="" />
        </div>

        
     </div>
     
    </div>
  )
}

export default MovieCard