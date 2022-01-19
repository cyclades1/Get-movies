import './App.css';
import Body from './components/body';
import Navbar from './components/nav';
import Right from './components/right';
import {Doc} from './components/doc';
import {Footer} from './components/footer';
import {GetMovie} from './components/getmovie';

import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const changepage = (newpage)=>{
    console.log(newpage);
    setpage(newpage);
  }

  const [page, setpage] = useState("home");
  return (
    <>
      <Router>

        <Navbar showdropdown ={false}/>
        <Routes>
          <Route exact path="/"  element = {<Body changepage={changepage} pageid ={page}/> }/>
          <Route exact path ="/doc" element = {<Doc/>} />
          <Route exact path ="/movie/:movie_id" element = {<GetMovie/>} />
        </Routes>
        
        <Right/>
        <Footer/>

      </Router>
      
    </>
  );
}

export default App;
