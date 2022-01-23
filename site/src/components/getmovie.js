import React, { useState } from 'react';
import '../App.css';
import {useParams} from 'react-router-dom';
import { Movie } from './movie';
import { useEffect } from 'react'
import { apikey, url } from '../config';


export const GetMovie = () => {
    const [movie , setmovie] = useState('');
    const params = useParams()
    var req_url = [url + `apikey=${apikey}&i=${params.movie_id}`];
    useEffect(() => {
        Promise.all(req_url.map((request) => {
            return fetch(request).then((response) => {
                return response.json();
            }).then((data) => {
                return data;
            });
        })).then((values) => {
            setmovie(values[0]);
        }).catch(console.error.bind(console));
        

        
    }, [params, req_url])
    console.log(movie)
    return (
        <>
            <div className='body'>
                <Movie details = {movie}/>
            </div>
           
        </>
       
    )

}
