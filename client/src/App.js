import Badge from "react-bootstrap/esm/Badge";
import { Link, Outlet } from "react-router-dom";
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'


function App() {
  return (
    <div>
      {/* <nav
        style={{
          padding: "0 20px",
          borderBottom: "1px solid",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      > */}
        {/* <h1> Appointment App</h1> */}

        <Navbar sticky="top" variant="dark" bg="dark"  expand='lg'>
  <Container fluid>
    <Navbar.Brand href="/home">Appointment App</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbar-dark-example" />
    {/* <Navbar.Collapse id="navbar-dark-example"> */}

        <NavDropdown 
          id="nav-dropdown-dark-example"
          align={{ sm: 'end' }}
          title="Menu"
          menuVariant="dark"
        >
          <NavDropdown.Item href="#action/3.1"><Badge><Link style={{color: 'white'}} to="/home">Home</Link> {''}</Badge></NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2"><Badge><Link style={{color: 'white'}} to="/about">About</Link> {''}</Badge></NavDropdown.Item>
          <NavDropdown.Item href="#action/3.4"> <Badge><Link style={{color: 'white'}} to="/patients">Patients</Link> {''}</Badge></NavDropdown.Item>
          <NavDropdown.Item href="#action/3.5"><Badge><Link style={{color: 'white'}} to="/doctors">Doctors</Link> {''}</Badge></NavDropdown.Item>
          <NavDropdown.Item href="#action/3.6"><Badge><Link style={{color: 'white'}} to="/appointments">Appointments</Link> {''}</Badge></NavDropdown.Item>
          <NavDropdown.Item href="#action/3.7"><Badge><Link style={{color: 'white'}} to="/appointments/new">New Appointments</Link> {''}</Badge></NavDropdown.Item>
          {/* <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
        </NavDropdown>

    {/* </Navbar.Collapse> */}
  </Container>
</Navbar>


        {/* <nav>
          <Badge><Link style={{color: 'white'}} to="/home">Home</Link> {''}</Badge>

          <Badge><Link style={{color: 'white'}} to="/about">About</Link> {''}</Badge>

          <Badge><Link style={{color: 'white'}} to="/patients">Patients</Link> {''}</Badge>

          <Badge><Link style={{color: 'white'}} to="/doctors">Doctors</Link> {''}</Badge>

          <Badge><Link style={{color: 'white'}} to="/appointments">Appointments</Link> {''}</Badge>

          <Badge><Link style={{color: 'white'}} to="/appointments/new">New Appointments</Link> {''}</Badge>


         
        </nav> */}
      {/* </nav> */}
      <div
        style={{
          padding: "0 20px",
        }}
      >
        <Outlet />
      </div>
    </div>
  );
}

export default App;
