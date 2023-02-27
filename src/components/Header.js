import React from "react";
import { NavbarBrand } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return(
    <Navbar className="bg-slate-600 text-slate font-bold">
        <NavbarBrand href="/" className="pl-4"><h2>Burrito Boys</h2></NavbarBrand>
        <Nav className="me-auto">
          <Nav.Link href="/"><h5>Home</h5></Nav.Link>
          <Nav.Link href="/add-spot"><h5>Add Spot</h5></Nav.Link>
          <Nav.Link href="/sign-in"><h5>Sign In</h5></Nav.Link>
        </Nav>
      </Navbar>
  );
}

export default Header;