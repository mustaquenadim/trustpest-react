import React from 'react';
import classes from '../../styles/Header.module.css';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Header = () => {
  return (
    <div className={classes.header}>
      <div className={classes.topbar}>
        <Navbar bg='light'>
          <Container>
            <Link to='/' className={classes.link}>
              <Navbar.Brand>
                <h1>Trust Pest</h1>
                <p>পোকামাকড় থেকে মুক্ত থাকুন</p>
              </Navbar.Brand>
            </Link>
            <div className='ms-auto'>
              <div className={classes.socialLinks}>
                <a href='tel:+8801700000000'>+8801700000000</a>
                <br />
                <a href='mailto:trustpestbd@gmail.com'>trustpestbd@gmail.com</a>
              </div>
              <div className={classes.socialLinks}>
                <a href='https://facebook.com/trustpest'>
                  <FaFacebookF />
                </a>
                <a href='https://twitter.com/trustpest'>
                  <FaTwitter />
                </a>
                <a href='https://instagram'>
                  <FaInstagram />
                </a>
                <a href='https://youtube'>
                  <FaYoutube />
                </a>
              </div>
            </div>
          </Container>
        </Navbar>
      </div>
      <div className={classes.bottombar}>
        <Navbar bg='secondary' variant='dark'>
          <Container>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='me-auto'>
                <Link to='/' className={classes.link}>
                  <Nav.Link>Home</Nav.Link>
                </Link>
                <NavDropdown title='Services' id='basic-nav-dropdown'>
                  <Link to='/' className={classes.link}>
                    <NavDropdown.Item>Bed Bug Control</NavDropdown.Item>
                  </Link>
                  <Link to='/' className={classes.link}>
                    <NavDropdown.Item>Cockroach Control</NavDropdown.Item>
                  </Link>
                  <Link to='/' className={classes.link}>
                    <NavDropdown.Item>Termite Control</NavDropdown.Item>
                  </Link>
                  <Link to='/' className={classes.link}>
                    <NavDropdown.Item>Rodent Control</NavDropdown.Item>
                  </Link>
                  <Link to='/' className={classes.link}>
                    <NavDropdown.Item>Ant Control</NavDropdown.Item>
                  </Link>
                  <Link to='/' className={classes.link}>
                    <NavDropdown.Item>Fumigation Control</NavDropdown.Item>
                  </Link>
                  <Link to='/' className={classes.link}>
                    <NavDropdown.Item>Wood Borer Control</NavDropdown.Item>
                  </Link>
                </NavDropdown>
                <Link to='/' className={classes.link}>
                  <Nav.Link>Clients</Nav.Link>
                </Link>
                <Link to='/' className={classes.link}>
                  <Nav.Link>Testimonial</Nav.Link>
                </Link>
                <Link to='/' className={classes.link}>
                  <Nav.Link>Contact Us</Nav.Link>
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default Header;
