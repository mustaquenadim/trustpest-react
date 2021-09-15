import React from 'react';
import classes from '../../styles/About.module.css';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <div className={classes.about}>
      <h1 className='text-center mt-5'>About Us</h1>
      <Container>
        <Row>
          <Col md={6} className='my-auto'>
            <p>Trust Pest is one of the most popular government approved pest control services in Bangladesh. It's also leading brand of pest control services field in Bangladesh. We provide all kinds of pest control services such as: Rodent Control Service, Cockroach Control Service, Termite Control Service, Bedbug Control Service, Ants Control Service, Spider Control Service, Mosquitoes Control Service and Container Fumigation Services etc. We provide our services in all over Bangladesh.</p>
          </Col>
          <Col md={6}>
            <iframe title='Trust Pest' src='https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Ftrustpestcontrolbd%2Fvideos%2F202123717773090%2F&show_text=false&width=560&t=0' width='560' height='314' style={{ border: 'none', overflow: 'hidden' }} scrolling='no' frameborder='0' allowfullscreen='true' allow='autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share' allowFullScreen='true'></iframe>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
