import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Dashboard = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Card 1</Card.Title>
              <Card.Text>
                This is a card component from React Bootstrap.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Card 2</Card.Title>
              <Card.Text>
                This is a card component from React Bootstrap.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Card 3</Card.Title>
              <Card.Text>
                This is a card component from React Bootstrap.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;
