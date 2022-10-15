import React from "react";
import ReactStars from "react-rating-stars-component";
import { Navbar, Form, FormControl, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./NavMenu.css";

function NavBar({ setTitleSearch, setRateSearch, titleSearch, match }) {
  return (
    <div>
      <Navbar bg="light" variant="drak" className="navMenu ">
        <Navbar.Brand to="/"> </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link>
            {" "}
            <Link to="/">Home</Link>
          </Nav.Link>
          <Nav.Link>
            {" "}
            <Link to="/movies">Movies</Link>
          </Nav.Link>
        </Nav>

        <Form inline id="searchInput">
          <FormControl
            id="searchNav"
            type="text"
            placeholder="Search"
            className="mr-sm-2"
            value={titleSearch}
            onChange={(event) => {
              setTitleSearch(event.target.value);
            }}
          />
          <ReactStars
            count={5}
            onChange={setRateSearch}
            size={24}
            isHalf={true}
            emptyIcon={<i className="far fa-star"></i>}
            halfIcon={<i className="fa fa-star-half-alt"></i>}
            fullIcon={<i className="fa fa-star"></i>}
            activeColor="#ffd700"
          />
        </Form>
      </Navbar>
    </div>
  );
}

export default NavBar;
