
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import BasketShop from './BasketShop';
import './navbar.scss';
import { NavDropdown } from 'react-bootstrap';

function NavBar() {

  return (
    <Navbar
      expand="md"
      sticky='top'
      className="bg-body-tertiary fs-5 z-9">
      <Container >
      <Navbar.Brand className="me-auto fs-2 d-block d-md-none" href="#home">X Store</Navbar.Brand>
        <Navbar.Toggle className="ms-auto" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href={"/"}>Home </Nav.Link>
              <NavDropdown title="Products" id="basic-nav-dropdown">
              <NavDropdown.Item href="/products/woman">Woman</NavDropdown.Item>
              <NavDropdown.Item href="/products/man">
                Man
              </NavDropdown.Item>
              <NavDropdown.Item href="/products/jawelery">Jewelery</NavDropdown.Item>
              <NavDropdown.Item href="/products/electronics">Electronics</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/products">
                All
              </NavDropdown.Item>
            </NavDropdown>
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