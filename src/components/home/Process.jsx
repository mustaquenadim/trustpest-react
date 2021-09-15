import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Process = () => {
  return (
    <div>
      <h2>Our Process</h2>
      <Container>
        <Row>
          <Col md={4}>
            <img src="https://www.carepestbd.com/careIt/process_cover_images/1612940222.webp" alt="" />
          </Col>
          <Col md={4}>
            <img src="https://www.carepestbd.com/careIt/process_cover_images/1612940195.webp" alt="" />
          </Col>
          <Col md={4}>
            <img src="https://www.carepestbd.com/careIt/process_cover_images/1612940166.webp" alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Process;