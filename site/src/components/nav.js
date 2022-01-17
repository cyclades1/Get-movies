import '../App.css';
import {Nav, NavDropdown} from 'react-bootstrap';

function changeurl(url)
{
    window.history.replaceState(null, "React", url)
}

function Navbar(props) {
    // const handleSelect = (eventKey) =>  ${eventKey};
    console.log(props.showdropdown);

  return (
    //   <h1>nav</h1>
      <>
       <Nav variant="pills" >
        <Nav.Item>
            <Nav.Link eventKey="home" href="home">
                Home
            </Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="doc" title="Item" href ="doc">
                Documentation
            </Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="user" disabled onClick={() => changeurl("doc")}>
                Check Users
            </Nav.Link>
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
