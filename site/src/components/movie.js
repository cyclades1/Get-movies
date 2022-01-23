
import '../App.css';
import React from "react";
import { Footer } from './footer';

export const Movie = (props) => {
    var details = props.details;
    
    return (
        <>
            <div className='card' >
                <h4> {details.Title}</h4>
                <h3>{details.Year}</h3>
                <img className='cardImage' src={details.Poster}></img>
                <div>
                    <ul>
                        <li>Director: {details.Director}</li>
                    
                        <li>Genre: {details.Genre}</li>
                    
                        <li>Language: {details.Language}</li>
                    
                        <li>Country: {details.Country}</li>
                   
                        <li>IMDB: {details.imdbRating}</li>
                    
                        <li>Runtime: {details.Runtime}</li>
                    </ul>
                    

                    
                </div>
            <p>
                Plot:
                <br/>
                {details.Plot}
            </p>
            <br/>
            </div>
           <Footer/>
        </>
       
    )
}