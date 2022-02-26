import React from 'react';
import {Card, Button} from 'react-bootstrap';
import '../App.css';
import {Link} from "react-router-dom";

export const MovieCard = (props) => {
    var movie = props.movie;
    var tourl = `/movie/${movie.imdbID}`
    return (
        <>    
            <div className='card'>
            <img alt="movieposter" className='cardImage' variant="top" src={movie.Poster} />
            <Card.Body>
                <Card.Title>{movie.Title} ({movie.Year})</Card.Title>
                <Card.Text>
                <p>{movie.Type}</p>
                </Card.Text>
                <Button as={Link}  to={tourl}>Get More Information</Button>
            </Card.Body>
            </div>      

            
        </>
        
    )
}



export const SeriesCard = (props) => {
    var movie = props.movie;
    var tourl = `/series/${movie.imdbID}`
    return (
        <>    
            <div className='card'>
            <img alt="seriesposter" className='cardImage' variant="top" src={movie.Poster} />
            <Card.Body>
                <Card.Title>{movie.Title} ({movie.Year})</Card.Title>
                <Card.Text>
                <p>{movie.Type}</p>
                </Card.Text>
                <Button as={Link}  to={tourl}>Get More Information</Button>
            </Card.Body>
            </div>      

            
        </>
        
    )
}
