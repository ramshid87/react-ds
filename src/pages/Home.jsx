import searchIcon from "../assets/magnifying-glass.svg"
import homeIcon from "../assets/house-simple.svg"
import movieIcon from"../assets/film-slate.svg"
import monitorIcon from"../assets/monitor.svg"
import trendupIcon from"../assets/trend-up.svg"
import plusIcon from "../assets/plus.svg"
import shuffleIcon from"../assets/shuffle.svg"
import aadutitle from "../assets/aadu-title.png"
import onepiece from "../assets/onepiece.WEBP"
import odiyan from "../assets/odiyan.webp"
import oooo from "../assets/ooo.jpg"
import kasaba from "../assets/kasaba.jpg"
import rabi from "../assets/rabbi.jpg"
import ok from "../assets/ok.gif"
import'./home.css';

function Home() {
  return (
    <div className="netflix">
     <div className="sidebar">
    <img src={searchIcon} alt="" />
    <img src={homeIcon} alt="" />
    <img src={movieIcon} alt="" />
    <img src={monitorIcon} alt="" />
    <img src={trendupIcon} alt="" />
    <img src={plusIcon} alt="" />
    <img src={shuffleIcon} alt="" />
     </div>
     <div className="home-main">
        <div className="hero">
            <img src={aadutitle} alt="" />
            <p>Rating : 4/10</p>
            <p>2M Streams</p>
            <div className="hero-button">
                <button className="playbutton">Play</button>
                <button className="trailerbutton">Watch Trailer</button>  
            </div>

        </div>
        <div className="movies">
        <h1>new this week</h1>
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
     
    </div>
  )
}

export default Home