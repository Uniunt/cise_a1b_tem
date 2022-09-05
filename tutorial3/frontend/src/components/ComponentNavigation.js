import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import CreateBook from "./CreateBook";
import ShowBookList from "./ShowBookList";
import ShowBookDetails from "./ShowBookDetails";
import SearchBook from "./SearchBook";
import SearchingComponent from "./SearchingComponent";

function ComponentNavigation() {
    return (
        <Router>
            <div>
                <Navbar bg="light" expand="lg">
                    <Container className="container" fluid>
                        <Navbar.Brand href="/book-list"><h4 className="store">Book Store</h4></Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll"/>
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{maxHeight: '100px'}}
                                navbarScroll
                            >
                                <Nav.Link as={Link} to={"/add-book"}><h4 className="linkText">Add Book</h4></Nav.Link>
                                <Nav.Link as={Link} to={"/book-list"}><h4 className="linkText">Book List</h4></Nav.Link>
                            </Nav>
                            <SearchingComponent />
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
            <div>
                <Routes>
                    <Route exact path='/' element={<ShowBookList/>} />

                    <Route path="/add-book" element={<CreateBook/>}>
                    </Route>

                    <Route path="/book-list" element={<ShowBookList/>}>
                    </Route>

                    <Route path="/update/:id" element={<ShowBookDetails/>}>
                    </Route>

                    <Route path="/search/:keyword" element={<SearchBook/>}>
                    </Route>
                </Routes>
            </div>
        </Router>
    );
}

export default ComponentNavigation;