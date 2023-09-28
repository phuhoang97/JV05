import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./DemoBootstrap.css";
import Carousel from "react-bootstrap/Carousel";
// import ExampleCarouselImage from "components/ExampleCarouselImage";

function DemoBootstrap() {
  return (
    <>
      {/*  Navbar */}
      <Navbar expand='lg' className='bg-body-tertiary'>
        <Container>
          <Navbar.Brand href='#home'>React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link href='#home'>Home</Nav.Link>
              <Nav.Link href='#link'>Link</Nav.Link>
              <Nav.Link href='#link'>About</Nav.Link>
              <Nav.Link href='#link'>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Carouse */}
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            // className='d-block w-100'
            src='https://cdnimg.vietnamplus.vn/t660/uploaded/bokttj/2023_01_02/avatar_the_way_of_water.jpg'
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            // className='d-block w-100'
            src='https://cdnimg.vietnamplus.vn/t660/uploaded/bokttj/2023_01_02/avatar_the_way_of_water.jpg'
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            // className='d-block w-100'
            src='https://cdnimg.vietnamplus.vn/t660/uploaded/bokttj/2023_01_02/avatar_the_way_of_water.jpg'
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default DemoBootstrap;
