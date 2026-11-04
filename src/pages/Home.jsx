import searchIcon from "../assets/magnifying-glass.svg"
import homeIcon from "../assets/house-simple.svg"
import movieIcon from"../assets/film-slate.svg"
import monitorIcon from"../assets/monitor.svg"
import trendupIcon from"../assets/trend-up.svg"
import plusIcon from "../assets/plus.svg"
import shuffleIcon from"../assets/shuffle.svg"
import aadutitle from "../assets/aadu-title.png"
import'./home.css';
import MovieCard from "../components/MovieCard"


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
        <MovieCard Mtitle="New This Week"/>
        <MovieCard Mtitle="Trending"/>
        <MovieCard Mtitle="Recently Watched"/>
        <MovieCard Mtitle="joor sanam"/>
        <MovieCard Mtitle="kidilan"/>
        
        
     </div>
     
    </div>
  )
}

export default Home