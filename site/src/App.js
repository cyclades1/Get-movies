import './App.css';
import {Movies, Series} from './components/body';
import Navbar from './components/nav';
import {Search} from './components/search';
// import {Footer} from './components/footer';
import {GetMovie, GetSeries} from './components/getdata'


import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  return (
    <>
      <Router>

        <Navbar/>
        <Routes>
          <Route exact path="/"  element = {<Movies/> }/>
          <Route exact path ="/search" element = {<Search/>} />
          <Route exact path ="/series" element = {<Series/>} />
          <Route exact path ="/movie/:movie_id" element = {<GetMovie/>} />
          <Route exact path ="/series/:series_id" element = {<GetSeries/>} />
        </Routes>

      </Router>
      
    </>
  );
}

export default App;
