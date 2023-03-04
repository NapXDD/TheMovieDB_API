import { useEffect, useState } from "react"
import { getTrendingMoviesToday } from "../../../utilities/apiClient"
import MovieCard from "../../MovieCard/MovieCard"
import ToggleButton from "../../ToggleButton/ToggleButton"
import "./trending.css"

export default function TrendingSection(){
    let [movieList, setMovieList ] = useState([])
    
    useEffect(() => {
        getTrendingMoviesToday().then(
            res => {
                let data = res.data.results
                setMovieList(movieList => [...data])
            }
        )
    }, [])

    return(
        <section className="section-container trending">
            <div className="column-wrapper">
                <div className="column">
                    <div className="column-header">
                        <h2>Trending</h2>
                        <ToggleButton />
                    </div>
                    <div id="trending-scroller" className="media-scroller">
                        <div className="item-list" >
                            <div className="scroll-wrapper">
                                {
                                    movieList.map((movie, index) => (
                                        <MovieCard data={movie} key={index}/>
                                    ))
                                } 
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </section>
    )
}