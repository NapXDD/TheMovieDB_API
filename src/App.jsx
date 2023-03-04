import { useEffect, useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.css'
import HomePage from './component/HomePage/HomePage'
import Navbar from './component/navbar/Navbar'
import MovieDetail from "./component/MovieDetail/MovieDetail"
import { getLastestTrailersOnTV, getTrendingMoviesToday } from './utilities/apiClient'

function App() {

  const [trend, setTrend] = useState([])

  useEffect(() => {
    getTrendingMoviesToday().then(
      res => {
        let data = res.data.results
        setTrend((trend) => [...data])
      }
    )
  }, [])

  console.log(trend)

  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        {
          trend.map((movie, index) => (
            <Route path={`/movie/${movie.id}`} key={index} element={<MovieDetail data={movie}/>}></Route>
          ))
        }
      </Routes>
    </div>
  )
}

export default App
