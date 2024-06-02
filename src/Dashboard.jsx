// src/Dashboard.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AlertBarChart from './components/AlertBarChart';
import SeverityPieChart from './components/SeverityPieChart';
import Ip from './components/Ip';
import New from './components/New';

const Dashboard = () => {
  return (
    <Container fluid className="bg-dark text-light py-4">
      <Row className="mb-4">
        <Col md={6}>
          <div className="bg-secondary p-3 rounded">
            <AlertBarChart />
          </div>
        </Col>
        <Col md={6}>
          <div className="bg-secondary p-3 rounded">
            <SeverityPieChart />
          </div>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col md={6}>
          <div className="bg-secondary p-3 rounded">
            <New/>
          </div>
        </Col>
        <Col md={6}>
          <div className="bg-secondary p-3 rounded">
            <Ip/>
          </div>
        </Col>
      </Row>
     
    </Container>
  );
};

export default Dashboard;
