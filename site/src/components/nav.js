import '../App.css';
import {Nav, NavDropdown} from 'react-bootstrap';
import {Link} from "react-router-dom";


function Navbar(props) {


  return (
      <>
       <Nav variant="pills" >
        <Nav.Item>
            <Nav.Link as={Link} to="/" > Movies </Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link as={Link} to="/doc"> Documentation </Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link as={Link}  to="/movie/tt9389998"> Get Movie  </Nav.Link>
        </Nav.Item>

        {props.showdropdown ?
        <NavDropdown title="Dropdown" id="nav-dropdown">
            <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
        </NavDropdown>:""}
        </Nav>
      </>
   
  );
}

export default Navbar;
