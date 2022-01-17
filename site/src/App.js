import './App.css';
import Body from './components/body';
import Navbar from './components/nav';
import Right from './components/right';

function App() {
  let pathname = window.location.pathname;
  console.log(pathname)
  return (
    <>
      <Navbar showdropdown ={false}/>
      <Body pageid ={pathname}/>
      <Right/>
    </>
  );
}

export default App;
