import React from 'react';
import { MovieCard } from './moviecard';

export const MoviePage = (props) => {

    var m = props.response.Search || [];
    var movies = m.filter((movie)=> movie.Poster!=="N/A" )
        .filter((movie)=> parseInt(movie.Year)>=1990)
        .filter((movie)=> movie.Type=== "movie")
        .sort(function(a, b) { 
        return -(parseInt(a.Year) - parseInt(b.Year));
    })
    return (
        <>
        <div className='cards'>
            {movies.map((movie, index)=><MovieCard key ={index} movie = {movie}/>)}
        </div>
       
        </>
        
    )
}

export const Home = (props) => {
    return (
        <>
        <h4>Home Page</h4>
        </>
    )
}


