
import '../App.css';
import React from "react";
// import { Footer } from './footer';

export const Movie = (props) => {
    var details = props.details;
    
    return (
        <>
            <div className='card' >
                <h4> {details.Title}</h4>
                <h3>{details.Year}</h3>
                <img alt = "movieposter" className='cardImage' src={details.Poster}></img>
                <div>
                    <ul>
                        <li>Director: {details.Director}</li>
                    
                        <li>Genre: {details.Genre}</li>
                    
                        <li>Language: {details.Language}</li>
                    
                        <li>Country: {details.Country}</li>
                   
                        <li>IMDB: {details.imdbRating}</li>
                    
                        <li>Runtime: {details.Runtime}</li>
                        
                        <li>Awards: {details.Awards}</li>
                       
                    </ul>
                    

                    
                </div>
            <p>
                Plot:
                <br/>
                {details.Plot}
            </p>
            <br/>
            </div>
           {/* <Footer/> */}
        </>
       
    )
}


export const Series = (props) => {
    var details = props.details;
    
    return (
        <>
            <div className='card' >
                <h4> {details.Title}</h4>
                <h3>{details.Year}</h3>
                <img alt = "movieposter" className='cardImage' src={details.Poster}></img>
                <div>
                    <ul>
                        <li>Director: {details.Director}</li>
                    
                        <li>Genre: {details.Genre}</li>
                    
                        <li>Language: {details.Language}</li>
                    
                        <li>Country: {details.Country}</li>
                   
                        <li>IMDB: {details.imdbRating}</li>
                    
                        <li>Runtime: {details.Runtime}</li>

                        <li>Seasons: {details.totalSeasons}</li>

                        <li>Awards: {details.Awards}</li>
                    </ul>
                   
                    

                    
                </div>
            <p>
                Plot:
                <br/>
                {details.Plot}
            </p>
            <br/>
            </div>
           {/* <Footer/> */}
        </>
       
    )
}

