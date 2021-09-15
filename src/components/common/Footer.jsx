import React from 'react';
import classes from '../../styles/Footer.module.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className={classes.footer} bg='secondary'>
      <Container>
        <Row>
          <Col md={5}>
            <h2>Trust Pest</h2>
            <p>Care Pest control services is one of the most popular government approved pest control services in Bangladesh.</p>
            <p>Address: House#42, Road#02, Block-A, Mirpur-6, Dhaka 1216</p>
            <p>
              Mobile: <a href='tel:+8801742550005'>+8801742550005</a>
            </p>
            <p>
              Email: <a href='mailto:info@carepestbd.com'>info@carepestbd.com</a>
            </p>
          </Col>
          <Col md={3}>
            <h3>Company</h3>
            <ul>
              <li><Link to='/'>About Us</Link></li>
              <li><Link to='/'>Career</Link></li>
              <li><Link to='/'>Blog</Link></li>
              <li><Link to='/'>Certificate</Link></li>
              <li><Link to='/'>Packages</Link></li>
            </ul>
          </Col>
          <Col md={4}>
            <h3>Payment Method</h3>
            <img className='w-100' src='https://www.bdshopee.com/uploads/large_image/190626122310_SSLCommerz-Pay-With-logo-All-Size-05.png' alt='' />
          </Col>
        </Row>
        <div className={classes.copyright}>
          <p className='text-center'>&copy; Trust Pest | All rights reserved</p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
