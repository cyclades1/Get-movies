import '../App.css';
import {Home, Doc} from './page'

function Body(props) {

  return (
    <div className='body'>
      <h3>Body</h3>
      {props.pageid ==="/doc" ?<Doc/>:<Home/>}
    </div>
  );
}

export default Body;
