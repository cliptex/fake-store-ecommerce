
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import BasketShop from './BasketShop';
import { NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavBar() {

  return (
    <Navbar
      expand="md"
      sticky='top'
      className="bg-body-tertiary fs-5 z-9">
      <Container >
      <Navbar.Brand className="me-auto fs-2 d-block d-md-none" as={Link} to="/">X Store</Navbar.Brand>
        <Navbar.Toggle className="ms-auto" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link  as={Link} to={"/"}>Home </Nav.Link>
              <NavDropdown title="Products" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/products/woman">Woman</NavDropdown.Item>
              <NavDropdown.Item  as={Link} to="/products/man">
                Man
              </NavDropdown.Item>
              <NavDropdown.Item  as={Link} to="/products/jawelery">Jewelery</NavDropdown.Item>
              <NavDropdown.Item  as={Link} to="/products/electronics">Electronics</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item  as={Link} to="/products">
                All
              </NavDropdown.Item>
            </NavDropdown>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          <Navbar.Brand className="me-auto fs-2 d-none d-md-block" as={Link} to="/">X Store</Navbar.Brand>
          
                <Nav.Link href='#' className='ms-auto basketIcon'> <BasketShop /> </Nav.Link>
          
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
  );
}

export default NavBar;