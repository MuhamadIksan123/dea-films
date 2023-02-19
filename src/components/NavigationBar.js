import { Navbar, Container, Nav } from "react-bootstrap";
function NavigationBar() {
  return (
    <Navbar variant="dark" >
      <Container>
        <Navbar.Brand href='/'>Deafilms</Navbar.Brand>
        <Nav>
          <Nav.Link href='#trending'>Trending</Nav.Link>
          <Nav.Link href='#superhero'>Superhero</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;