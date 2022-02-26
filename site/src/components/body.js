import '../App.css';
import {MoviePage, SeriesPage} from './page';
import React, { useState, useEffect } from 'react';
import {movielist,serieslist, url, apikey, options} from '../config';
import { Footer } from './footer';


const callRestApiMovie = async (movie) => {
  var restEndpoint = url + `apikey=${apikey}&s=${movie}&type=movie`
  const response = await fetch(restEndpoint);
  const jsonResponse = await response.json();

  return jsonResponse;
};

const callRestApiSeries = async (series) => {
  var restEndpoint = url + `apikey=${apikey}&s=${series}&type=series`
  const response = await fetch(restEndpoint);
  const jsonResponse = await response.json();

  return jsonResponse;
};


export const Movies = (props) => {

  const [page, setpage] = useState("home");

  const [apiResponse, setApiResponse] = useState("*** now loading ***");

  var movies = movielist[page]
  useEffect(() => {
    movies.map((movie)=>callRestApiMovie(movie).then(
        result => setApiResponse(result)));
  },[page, movies]);


  return(
    <div className='body'>
        <div className='GenreBtn'>
          { options.map((option, index) => {return (
            <button className='btn' key = {index} onClick={()=>{setpage(option[0])}}> {option[1]}</button>)} 
          )}
        </div>
        
        <MoviePage response = {apiResponse}/>
        <Footer/>

    </div>
  );

}

export const Series = (props) => {

  const [page, setpage] = useState("home");

  const [apiResponse, setApiResponse] = useState("*** now loading ***");

  var series = serieslist[page]
  useEffect(() => {
    series.map((s)=>callRestApiSeries(s).then(
        result => setApiResponse(result)));
  },[page, series]);


  return(
    <div className='body'>
        <div className='GenreBtn'>
          { options.map((option, index) => {return (
            <button className='btn' key = {index} onClick={()=>{setpage(option[0])}}> {option[1]}</button>)} 
          )}
        </div>
        
        <SeriesPage response = {apiResponse}/>
        <Footer/>

    </div>
  );

}
