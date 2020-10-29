import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import './Header.css';
import logo from '../../icon/logo.png';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className="navbar" variant="light">
                <div className="container">
                <Navbar.Brand href="#home">
                    <img className="navbar-brand-logo" src={logo} alt=""/> <span className="brand-name">𝐊𝐚𝐥𝐚𝐮𝐳𝐚𝐧 𝐛𝐥𝐨𝐨𝐝 𝐝𝐨𝐧o𝐫’𝐬 𝐀𝐬𝐬𝐨𝐜𝐢𝐚𝐭𝐢𝐨𝐧</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="/about">About Us</Nav.Link>
                        <Nav.Link href="/blog">Blog</Nav.Link>
                        <Nav.Link href="/contact">Contact us</Nav.Link>
                        <Nav.Link href="/signin">Sign in</Nav.Link>
                        
                    </Nav>
                </Navbar.Collapse>
                </div>
            </Navbar>
        </div>
    );
};

export default Header;
