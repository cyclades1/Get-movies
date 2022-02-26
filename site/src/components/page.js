import React from 'react';
import { MovieCard, SeriesCard } from './card';

export const MoviePage = (props) => {

    var m = props.response.Search || [];
    var movies = m.filter((movie)=> movie.Poster!=="N/A" )
        .filter((movie)=> parseInt(movie.Year)>=1980)
        .filter((movie)=> movie.Type=== "movie")
    return (
        <>
        <div className='cards'>
            {movies.map((movie, index)=><MovieCard key ={index} movie = {movie}/>)}
        </div>
       
        </>
        
    )
}

export const SeriesPage = (props) => {

    var m = props.response.Search || [];
    var movies = m.filter((movie)=> movie.Poster!=="N/A" )
        .filter((movie)=> parseInt(movie.Year)>=1980)
        .filter((movie)=> movie.Type=== "series")
    return (
        <>
        <div className='cards'>
            {movies.map((movie, index)=><SeriesCard key ={index} movie = {movie}/>)}
        </div>
       
        </>
        
    )
}


