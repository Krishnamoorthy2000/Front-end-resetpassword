import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./forgotpassword.css";
import { toast } from "react-toastify";
import {url} from '../App';
import axios from 'axios';



const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSend = async() => {
    const payload={email};
    try {
      const response = await axios.post(`${url}/forgotpassword`, payload);
      toast.success(response.data.message);

      console.log(response.data);
      
    } catch (error) {
      toast.error(error.response.data.message);

      console.error(error.response.data.message);
    }

  };

  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col >
          <Form >
            <h3>Forgot Password</h3>

            <Form.Group controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </Form.Group>
            <Button type="button" variant="primary" onClick={handleSend}>
              send
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ForgotPassword;
