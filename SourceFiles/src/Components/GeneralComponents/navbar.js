//--------------------------------------------------
//Navbar for the application
//--------------------------------------------------

import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import { Container, Nav, Navbar, NavDropdown, Offcanvas }  from 'react-bootstrap';
import Gmail from '../../Images/gmail.svg'; 
import Linkedin from '../../Images/linkedin.svg'; 

const NavigationBar = ({}) => {
    return (
        <Fragment>
            {['lg'].map((expand) => (
            <Navbar key={expand} expand={expand} className="nav-bg">
            <Container fluid>
                <Navbar.Brand href="/">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
                backdrop={false}>
                    <Offcanvas.Header closeButton></Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Nav.Link href="/#/Projects" className='nav-text'>Projects</Nav.Link>
                            <Nav.Link href="/#/Account" className='nav-text'>About</Nav.Link>
                            <Nav.Link href="https://www.linkedin.com/in/brendon-whitford" target="_blank"><img className="nav-linkedin" src={Linkedin} alt="Linkedin Icon"/></Nav.Link>
                            <Nav.Link href="mailto:brendonwhitford@u.boisestate.edu"><img className="nav-gmail" src={Gmail} alt="Gmail Icon" /></Nav.Link>
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