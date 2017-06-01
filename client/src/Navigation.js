import React from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import NavItem from 'react-bootstrap/lib/NavItem';
import SignIn from './SignIn';
import SignUn from './SignUp';
import logo from './logo.svg';
// import Button from 'react-bootstrap/lib/Button';
// import Input from 'react-bootstrap/lib/InputGroup';
import 'bootstrap/dist/css/bootstrap.css';

export default class Navigation extends React.Component {
    render () {
        var brand =<a href=''><img src={logo} />Carry Me</a>;
        return (
                <Navbar className="top-nav" inverse collapseOnSelect fixedTop>
                    <Navbar.Header>
                        <Navbar.Brand>
                            {brand}
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav className="nav" pullRight>
                            <NavItem eventKey={1} href='/I Carry'>I Carry</NavItem>
                            <NavItem eventKey={2} href='/Carry Me'>Carry Me</NavItem>
                            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                                <MenuItem eventKey={3.1}>Eng</MenuItem>
                                <MenuItem eventKey={3.2}>中文</MenuItem>
                            </NavDropdown>
                            <NavItem  eventKey={4}><SignIn /></NavItem>
                            <NavItem  eventKey={5}><SignUn /></NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
               );
    }
}
