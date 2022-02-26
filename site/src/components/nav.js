import '../App.css';
import {Nav} from 'react-bootstrap';
import {Link} from "react-router-dom";


function Navbar(props) {


  return (
      <>

       <Nav variant="pills" >
        <Nav.Item>
            <Nav.Link as={Link} to="/" > Movies </Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link as={Link} to="/series"> Series</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link as={Link} to="/search"> Search</Nav.Link>
        </Nav.Item>
        </Nav>
      </>
   
  );
}

export default Navbar;
