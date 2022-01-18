import '../App.css';
import {Home, Bio} from './page'

function Body(props) {

  return (
    <div className='body'>
      <h3>Body</h3>
      <button onClick={()=>{props.changepage("home")}} > Home</button>
      <button onClick={()=>{props.changepage("bio")}} > Bio</button>

      {props.pageid ==="bio" ?<Bio />:<Home/>}
    </div>
  );
}

export default Body;
