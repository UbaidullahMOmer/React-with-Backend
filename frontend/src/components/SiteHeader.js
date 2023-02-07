import React from 'react'
import {Navbar,Nav} from "react-bootstrap"

function SiteHeader() {
  return (
    <>
    <Navbar sticky='top' collapseOnSelect expand="lg">
        <Navbar.Brand href='/'>React Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav'></Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
                <Nav.Link href='/'>Home</Nav.Link>
                <Nav.Link href='/'>Web</Nav.Link>
                <Nav.Link href='/'>Mobile</Nav.Link>
                <Nav.Link href='/'>Cloud</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
    </>
  )
}

export default SiteHeader
