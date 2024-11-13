import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import './Nav.css'

function myNav() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
        <Navbar.Brand className='photo'>PHOTO</Navbar.Brand>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success" className='btn'>Search</Button>
          </Form>
    </Navbar>
  );
}

export default myNav;
