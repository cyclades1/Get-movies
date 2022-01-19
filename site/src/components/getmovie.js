import React from 'react';
import '../App.css';
import {useParams} from 'react-router-dom';

const apikey = "eb7f19c3";
const url = "http://www.omdbapi.com/?";
var respose = "";

const fetchAndLog = async (url) => {
    const response = await fetch(url);
    const json = await response.json();
    respose = json;
}

export const GetMovie = () => {
    const params = useParams()
    var req_url = url + `apikey=${apikey}&i=${params.movie_id}`;
    fetchAndLog(req_url);
    console.log(respose);
    return (
        <>
        <div className='doc'>
            <h4> Get Movie {params.movie_id}</h4>
        </div>
        </>
       
    )
}
