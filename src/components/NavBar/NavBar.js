import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import React from 'react';
import './NavBar.css';
import { Button } from '../Button/Button'

export const NavBar = ({ children, punk, primary, ...rest }) => {

    const style = punk ? 'punk' : '';
    const variant = punk ? 'dark' : 'light';
    return (
        <Navbar expand="md" sticky="top" variant={variant} className={style}>
        <Navbar.Brand></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="justify-content-end" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className={`justify-content-center`} style={{ backgroundColor: 'inherit' }}>
            <Nav.Item className="navigationItem">
              { punk ? <a className={style} href="/"><Button primary={primary} >Home</Button></a> : <a href="/">Home</a> }
            </Nav.Item>
            <Nav.Item className="navigationItem">
            { punk ? <Button primary={primary} >Projects</Button> : <a href="/projects">Projects</a> }
            </Nav.Item>
            <Nav.Item className="navigationItem">
              { punk ? <Button primary={primary} >About</Button> : <a href="/about">About</a> }
            </Nav.Item>
            <Nav.Item className="navigationItem">
              { punk ? <Button primary={primary} >Contact</Button> : <a href="/contact">Contact</a> }
            </Nav.Item>
            <Nav.Item className="themeToggleSeparator">
              |
        </Nav.Item>
            <Nav.Item className={style}>
              <button
                type="button"
                aria-label="Theme toggle"
              >
                <svg version="1.1" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M22 41C32.4934 41 41 32.4934 41 22C41 11.5066 32.4934 3 22 3C11.5066 3 3 11.5066 3 22C3 32.4934 11.5066 41 22 41ZM7 22C7 13.7157 13.7157 7 22 7V37C13.7157 37 7 30.2843 7 22Z" class="icon-module--icon--1ihz7"></path></svg>
              </button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
}