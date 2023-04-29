import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <Container className="mt-5 d-flex justify-content-center">
      <Row>
        <Col md={12}>
          <Card>
            <Card.Body>
              <Card.Title>Dashboard</Card.Title>
              <Card.Text>
                the task is to implement a correct password reset flow with
                email verfication and proper update of the new password in the
                database for the web app
              </Card.Text>
              <Button
                variant="primary"
                type="button"
                onClick={() => navigate("/login")}
              >
                login
              </Button>
              <Button
                variant="primary"
                type="button"
                onClick={() => navigate("/signup")}
              >
                Signup
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
