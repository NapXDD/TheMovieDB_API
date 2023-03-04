import axiosClient from "./axiosClient"; 
import { apiKey } from "./api";

export function getTrendingMoviesToday(){
    return axiosClient.get(`trending/movie/day?api_key=${apiKey}`)
}

export function getTrendingMoviesWeek(){
    return axiosClient.get(`trending/movie/week?api_key=${apiKey}`)
}

export function getGernes(){
    return axiosClient.get(`genre/movie/list?api_key=${apiKey}&language=en-US`)
}

export function getLastestTrailersOnTheater(){
    return axiosClient.get(`movie/upcoming?api_key=${apiKey}&language=en-US&page=1`)
}

export function getLastestTrailersOnTV(){
    return axiosClient.get(``)
}


