//--------------------------------------------------
//Navbar for the application
//--------------------------------------------------
import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { Container, Nav, Navbar, NavDropdown, Offcanvas }  from 'react-bootstrap';
import Gmail from '../../Images/gmail.svg'; 
import Linkedin from '../../Images/linkedin.svg'; 

const NavigationBar = ({}) => {
    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = (value) => {
      setMenuOpen(value)
    }
  
    const handleClose = () => setMenuOpen(false)

    return (
        <Fragment>
            {['lg'].map((expand) => (
            <Navbar key={expand} expand={expand} className="nav-bg">
            <Container fluid>
                <Navbar.Brand href="/">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} onClick={() => toggleMenu(true)} />
                <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
                backdrop={false}
                show={menuOpen}
                onHide={handleClose}
                >
                    <Offcanvas.Header closeButton></Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Nav.Link onClick={() => toggleMenu(false)} href="/#/Projects" className='nav-text'>Projects</Nav.Link>
                            <Nav.Link onClick={() => toggleMenu(false)} href="/#/Account" className='nav-text'>About</Nav.Link>
                            <Nav.Link onClick={() => toggleMenu(false)} href="https://www.linkedin.com/in/brendon-whitford" target="_blank"><img className="nav-linkedin" src={Linkedin} alt="Linkedin Icon"/></Nav.Link>
                            <Nav.Link onClick={() => toggleMenu(false)} href="mailto:brendonwhitford@u.boisestate.edu"><img className="nav-gmail" src={Gmail} alt="Gmail Icon" /></Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
            </Navbar>
        ))}
        </Fragment>
    )
};

function mapState(state) {

}

const actionCreators = {
};

const connection = connect(mapState, actionCreators)(NavigationBar);
export { connection as NavigationBar };