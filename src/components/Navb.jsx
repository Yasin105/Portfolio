import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import './Portfolio.css';


function Navb() {
  return (
    <Navbar expand="lg" className="shadow-sm" style={{ backgroundColor: '#27548A' }}>
      <Container>
        <Navbar.Brand><div className='nam'>Muhammad Yasin</div></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link as={Link} to="/" style={{ color: 'black', textDecoration: 'none' }}>About</Nav.Link>
            <Nav.Link as={Link} to="/Skills" style={{ color: 'black', textDecoration: 'none' }}>Skills</Nav.Link>
            <Nav.Link as={Link} to="/Experience" style={{ color: 'black', textDecoration: 'none' }}>Experience</Nav.Link>
            <Nav.Link as={Link} to="/Projects" style={{ color: 'black', textDecoration: 'none' }}>Projects</Nav.Link>
            <Nav.Link as={Link} to="/Contact" style={{ color: 'black', textDecoration: 'none' }}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <ThemeToggle />
        <Button variant="outline-success"><Link to={'/Resume'} style={{ color: 'black', textDecoration: 'none' }}><i className="bi bi-file-earmark-person"></i>  Resume</Link></Button>
      </Container>
    </Navbar>
  );
}

export default Navb;