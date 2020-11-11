import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
 
const Navigation = () => {
    return (
       <div>
           <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="/intervaler/">Stopwatch</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link className="navlinks" href="/intervaler/timer">Timer</Nav.Link>
                    </Nav>
                    <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <a target="_blank" href="https://www.youtube.com/watch?v=9Deg7VrpHbM">
                    <Button variant="outline-success">Search</Button>
                    </a>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
       </div>
    );
}
 
export default Navigation;