import React, { useState } from 'react';
import"./signup.css";
import { Container, Form, Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import {url} from '../App';
import { toast } from "react-toastify";



const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  let navigate = useNavigate();

  const handleSignUp = async () => {
    let payload = { firstName,lastName,email, password };

    try {
      const response = await axios.post(`${url}/signup`, payload);
      toast.success(response.data.message);

      console.log(response.data);
      navigate("/login");
    } catch (error) {
      toast.error(error.response.data.message);

      console.error(error.response.data.message);
    }
  }

  return (
    <Container className="mt-5">
      <Form>
      <h2>Signup</h2>

        <Form.Group controlId="formBasicFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="Enter first name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="formBasicLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Enter last name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>

        <Button variant="primary" type="button" onClick={handleSignUp}>
          signup
        </Button>
        <Button variant="primary" type="button" onClick={() =>{navigate("/login")}}>
          login
        </Button>
      </Form>
    </Container>
  );
}

export default Signup;
