import '../App.css';
import {MoviePage} from './page';
import React, { useState, useEffect } from 'react';
import {movielist, url, apikey, options} from '../config';
import { Footer } from './footer';


const callRestApi = async (movie) => {
  var restEndpoint = url + `apikey=${apikey}&s=${movie}`
  const response = await fetch(restEndpoint);
  const jsonResponse = await response.json();

  return jsonResponse;
};


function Body(props) {

  const [page, setpage] = useState("home");

  const [apiResponse, setApiResponse] = useState("*** now loading ***");

  var movies = movielist[page]
  useEffect(() => {
    movies.map((movie)=>callRestApi(movie).then(
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

export default Body;
