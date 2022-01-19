import '../App.css';
import {Home, Bio, Help} from './page'

function getpage(pageid){
  if(pageid==="bio")
  {
    return <Bio/>
  }
  else if(pageid==="home")
  {
    return <Home/>
  }
  return <Help/>
}

function Body(props) {
  var options= [["home", "Home"], ["bio", "Bio"], ["help", "Help"]];

  return (
    <div className='body'>
      <h3>Body</h3>
      { options.map((option, index) => {return (
      <button key = {index} onClick={()=>{props.changepage(option[0])}}> {option[1]}</button>)
      } ) }
      
      {getpage(props.pageid)}
      
    </div>
  );
}

export default Body;
