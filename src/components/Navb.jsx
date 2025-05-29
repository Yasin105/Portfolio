import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from 'react-router-dom';
import './Portfolio.css';
import Logo from '../assets/Logo.png';


function Navb() {
  return (
    <Navbar expand="lg" className="shadow-sm" style={{ backgroundColor: '#27548A' }}>
      <Container>
         <img
                    src={Logo}
                    style={{ maxHeight: '25px', width: '150px', marginLeft: '-25px' }}
                  />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/" style={{ color: 'white', textDecoration: 'none' }}>About</Nav.Link>
            <Nav.Link as={Link} to="/Skills" style={{ color: 'white', textDecoration: 'none' }}>Skills</Nav.Link>
            <Nav.Link as={Link} to="/Experience" style={{ color: 'white', textDecoration: 'none' }}>Experience</Nav.Link>
            <Nav.Link as={Link} to="/Projects" style={{ color: 'white', textDecoration: 'none' }}>Projects</Nav.Link>
            <Nav.Link as={Link} to="/Contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Button variant="outline-success"><Link to={'/Resume'} style={{ color: 'white', textDecoration: 'none' }}><i className="bi bi-file-earmark-person"></i>  Resume</Link></Button>
      </Container>
    </Navbar>
  );
}

export default Navb;