import React, { useState, useMemo } from 'react';
import '../App.css';
import {useParams} from 'react-router-dom';
import { Movie, Series } from './details';
import { useEffect } from 'react'
import { apikey, url } from '../config';

export const GetSeries = () => {
    const [series , setseries] = useState('');
    const params = useParams()
    var req_url = useMemo(() =>  [url + `apikey=${apikey}&i=${params.series_id}`] , [params]);
    useEffect(() => {
        Promise.all(req_url.map((request) => {
            return fetch(request).then((response) => {
                return response.json();
            }).then((data) => {
                return data;
            });
        })).then((values) => {
            setseries(values[0]);
        }).catch(console.error.bind(console));
        

        
    }, [params, req_url])
    return (
        <>
            <div className='body'>
                <Series details = {series}/>
            </div>
           
        </>
       
    )

}

export const GetMovie = () => {
    const [movie , setmovie] = useState('');
    const params = useParams()
    var req_url = useMemo(() =>  [url + `apikey=${apikey}&i=${params.movie_id}`] , [params]);
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
    return (
        <>
            <div className='body'>
                <Movie details = {movie}/>
            </div>
           
        </>
       
    )

}
