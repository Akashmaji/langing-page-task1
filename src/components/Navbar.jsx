
import '../styles/new.css'
import { Container, Navbar, Nav, Form, FormControl, Button, NavDropdown } from 'react-bootstrap';

import {  Img, Input, Line, SeekBar, Text } from "components";

function MyHeader() {
  return (
    <Navbar bg="white" className="shadow" expand="md">
      <Container className="navbar-container">
        <Navbar.Brand>
          <img
            src="images/img_hobbycuelogov2.png"
            alt="hobbycuelogovTwo"
            height={60}
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <t/>
        {/*<div className="search-bar-container">
          <Form className="bg-gray-50 border border-blue_gray-50 border-solid flex-row items-center justify-between rounded-lg ml-3">
            <FormControl
              type="text"
              placeholder="Search here..."
              className="search-input text-xs border-0"
            />
            <Button variant="deep_purple-400" className="search-button bg-deep_purple-400">
              <img
                src="images/img_search.svg"
                alt="search"
                height={20}
                className="rounded-[50%]"
              />
            </Button>
          </Form>
  </div>*/}

<div className="bg-gray-50 border border-blue_gray-50 border-solid flex md:flex-1 flex-row items-center justify-between md:ml-[0] ml-[34px] md:mt-0 my-5 pl-3 rounded-lg w-[21%] md:w-full">
            <Text className="text-gray-500 text-xs" size="txtPoppinsLight12">
              Search here...
            </Text>
            <div className="bg-deep_purple-400 flex flex-col h-10 items-center justify-start p-3 rounded-br-lg rounded-tr-lg w-10">
              <Img
                className="h-4 rounded-br-[50%] rounded-tr-[50%] w-4"
                src="images/img_search.svg"
                alt="search"
              />
            </div>
          </div>


        <Nav className="nav-items-container">
          <NavDropdown title="Explore" id="explore-dropdown" className="nav-link">
            <NavDropdown.Item href="#people">People Community</NavDropdown.Item>
            <NavDropdown.Item href="#places">Places Venue</NavDropdown.Item>
            <NavDropdown.Item href="#programs">Programs Events</NavDropdown.Item>
            <NavDropdown.Item href="#products">Product Store</NavDropdown.Item>
            <NavDropdown.Item href="#blogs">Blogs</NavDropdown.Item>
          </NavDropdown>
            
          <NavDropdown title="Hobbies" id="explore-dropdown" className="nav-link2">
            <NavDropdown.Item href="#people">People Community</NavDropdown.Item>
            <NavDropdown.Item href="#places">Places Venue</NavDropdown.Item>
            <NavDropdown.Item href="#programs">Programs Events</NavDropdown.Item>
            <NavDropdown.Item href="#products">Product Store</NavDropdown.Item>
            <NavDropdown.Item href="#blogs">Blogs</NavDropdown.Item>
          </NavDropdown>

          {/* Add more navigation items as needed */}

          <Button
            className="sign-in-button border-deep_purple-400 font-semibold min-w-[112px] text-center text-sm"
            variant="fill"
          >
            Sign In
          </Button>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default MyHeader;
