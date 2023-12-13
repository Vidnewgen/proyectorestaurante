import React from 'react'
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo1 from './logo1.png'

export const Menusito = () => {
    return (
        <Navbar expand="lg" className="custom-navbar"  sticky="top" >
          <Container >
            <img src={logo1} width={60}/>
            <Navbar.Brand><Link className='nav-link' to='/'>Restaurante Sazón</Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto" >
                <Nav><Link className='nav-link' to='/'>Inicio</Link></Nav>
                <Nav><Link className='nav-link' to='/menu'>Menu</Link></Nav>
                <Nav><Link className='nav-link' to='/bebidas'>Bebidas</Link></Nav>
                <Nav><Link className='nav-link' to='/videos'>Videos</Link></Nav>
                <Nav><Link className='nav-link' to='/blog'>Blog</Link></Nav>
                <NavDropdown title="Online-" id="basic-nav-dropdown">
                  <NavDropdown.Item><Link className='dropdown-item' to='/pedidoonline'>Pedidos online</Link></NavDropdown.Item>
                  <NavDropdown.Item ><Link className='dropdown-item' to='/reserva'>Reserva</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item><Link className='dropdown-item' to='/nosotros'>Nosotros</Link></NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item><Link className='dropdown-item' to='/acercade'>Acercade</Link>
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    
      );
}
