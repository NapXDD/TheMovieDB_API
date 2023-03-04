import Navbar from "../navbar/Navbar"
import HeroSection from "./Hero/HeroSection"
import TrendingSection from "./Trending/TrendingSection"
import "./homepage.css"

export default function HomePage(){
    return(
        <div className="Homepage-wrapper">
            <HeroSection />
            <TrendingSection />
        </div>
    )
}