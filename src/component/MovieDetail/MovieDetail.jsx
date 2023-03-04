import "./moviedetail.css"

export default function MovieDetail({data}){
    return(
        <div className="movie-detail-container">
            <div className="detail-card-container">
                <div className="card-image">
                    <img src={`../public/assets/trending/movies` + data.poster_path} alt="poster" />
                </div>
                <div className="card-info">
                    <div className="movie-name">{data.title}</div>
                    <div className="movie-release-date"></div>
                </div>
            </div>
        </div>
    )
}