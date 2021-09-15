import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Expect = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1>What do you <br /> expect <br /> from our services?</h1>
          </Col>
          <Col>
            <ul>
              <li>24/7 Customer Service</li>
              <li>Free Assessment</li>
              <li>30 Days Money Back Guarantee</li>
              <li>Well Trained Technician</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Expect;
