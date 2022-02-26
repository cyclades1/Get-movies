import React,{useState, useEffect} from 'react';
import '../App.css';
import {Card,Button,Navbar, Container} from 'react-bootstrap';
import {Link} from "react-router-dom";
import {url, apikey} from '../config';
import { Footer } from './footer';

const callRestApi = async (movie, type, year,page) => {

    var restEndpoint = url + `apikey=${apikey}&s=${movie}&type=${type}&y=${year}&page=${page}`

    const response = await fetch(restEndpoint);
    const jsonResponse = await response.json();
  
    return jsonResponse;
  };


export const Search = () => {
    const [query , setquery] = useState('');
    const [year , setyear] = useState('');
    const [page , setpage] = useState(1);

    const [type , settype] = useState('movie');
    const [apiResponse, setApiResponse] = useState('**no query**')
    
    useEffect(() => {
        callRestApi(query, type, year,page).then(
            result => setApiResponse(result));
      },[query, type, year,page]);
      

    return (
        <>
        <Navbar bg="light" expand="lg">
        <Container fluid>

            <form className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }}>
                <input
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                id = 'query'
                name = 'query'
                required='1'
                value = {query}
                onChange= {e=> setquery(e.target.value.replace(' ', '+'))}
                
                />
                <select onChange= {e=> settype(e.target.value)} style={{ height: '32px', width:'120px', marginRight:"8px", border:"light"}}  name="type" id="type">
                    <option value="movie">Movie</option>
                    <option value="series">Series</option>
                </select>
                <input
                style={{ width:'120px', marginRight:"8px", border:"light"}} 
                    type="number"
                    placeholder="Year"
                    className="me-2"
                    aria-label="Search"
                    id = 'year'
                    name = 'year'
                    value = {year}
                    onChange= {e=> setyear(e.target.value)}
                
                />
                <input
                style={{ width:'50px', marginRight:"8px", border:"light"}} 
                    type="number"
                    placeholder="Page"
                    className="me-2"
                    aria-label="Search"
                    id = 'page'
                    name = 'page'
                    value = {page}
                    onChange= {e=> setpage(e.target.value)}
                
                />
            
               
            </form>
                
                

        </Container>
        </Navbar>
       <div>
            <SearchResult result = {apiResponse}/>
       </div>
       <Footer/>
       </>
    )
}


export const SearchResult = (props) => {
    var result = props.result;
    var data = "";
    if (result.Response==='False'){
        data = "Search for valid query";
        return (
            <>
           <code>  
               {data}
           </code>
           </>
        )
    }
    else {
        var movies = result.Search || [];
        var result_cnt = result.totalResults;   
        return (
            <>
            <p style={{ margin:"5px" }} >{result_cnt} Results found..</p>
            <div className='cards'>
                {movies.map((movie, index)=><SearchCard key ={index} movie = {movie}/>)}
            </div>
           
            </>
            
        )
    }

    
}

export const SearchCard = (props) => {
    var movie = props.movie;
    var tourl = `/${movie.Type}/${movie.imdbID}`
    if(movie.Poster=="N/A"){
        movie.Poster = "https://www.reelviews.net/resources/img/default_poster.jpg";
    }
    return (
        <>    
            <div className='card'>
            <img alt="poster" className='cardImage' variant="top" src={movie.Poster} />
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
