import './App.css';
import Body from './components/body';
import Navbar from './components/nav';
import Right from './components/right';
import React, { useState } from 'react';

function App() {
  const clicknav = (newpath)=>{
    console.log(newpath);
    setpage(newpath);
  }

  const [page, setpage] = useState("home");
  return (
    <>
      <Navbar showdropdown ={false} clicknav = {clicknav}/>
      <Body pageid ={page}/>
      <Right/>
    </>
  );
}

export default App;
