
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import BasketShop from './BasketShop';
import './navbar.scss';

function NavBar() {

  return (
    <Navbar
      expand="md"
      sticky='top'
      className="bg-body-tertiary fs-5 z-99">
      <Container >
        <Navbar.Toggle className="ms-auto" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href={"/"}>Home </Nav.Link>
              <Nav.Link href={"/products"}>Products </Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          <Navbar.Brand className="me-auto fs-2 d-none d-md-block" href="#home">X Store</Navbar.Brand>
          
                <Nav.Link href='#' className='ms-auto basketIcon'> <BasketShop /> </Nav.Link>
          
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
  );
}

export default NavBar;