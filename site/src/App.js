import './App.css';
import Body from './components/body';
import Navbar from './components/nav';
import {Doc} from './components/doc';
import {Footer} from './components/footer';
import {GetMovie} from './components/getmovie';

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

        <Navbar showdropdown ={false}/>
        <Routes>
          <Route exact path="/"  element = {<Body/> }/>
          <Route exact path ="/doc" element = {<Doc/>} />
          <Route exact path ="/movie/:movie_id" element = {<GetMovie/>} />
        </Routes>
        
        {/* <Right/> */}
        {/* <Footer/> */}

      </Router>
      
    </>
  );
}

export default App;
