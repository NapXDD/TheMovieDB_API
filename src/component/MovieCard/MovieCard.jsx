import s from "./moviecard.module.css"
import { Link} from 'react-router-dom'
import CirclrProgressing from "./CircleProgressing/CircleProgressing"

export default function MovieCard({data}){
    return(
        <div className={s.cardContainer}>
            <div className={s.image}>
                <div className={s.wrapper}>
                    <Link to={`/movie/${data.id}`}>
                        <img src={`public/assets/trending/movies` + data.poster_path} />
                    </Link>
                    <CirclrProgressing data={data}/>
                </div>  
            </div>
            <div className={s.cardContent}>
                <div className="movie-title">{data.title}</div>
                <div className="realease-date">{data.release_date}</div>
            </div>
        </div>
    )
}