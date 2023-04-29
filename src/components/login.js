import React, { useState, useEffect } from "react";
import "./login.css";
import axios from "axios";
import { toast } from "react-toastify";
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { url } from "../App";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  useEffect(() => {
    sessionStorage.clear();
  }, []);

  const handleLogin = async () => {
    let payload = { email, password };
    try {
      let response = await axios.post(`${url}/login`, payload);
      toast.success(response.data.message);
      sessionStorage.setItem("token", response.data.token);
      navigate("/");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <Container className="mt-5">
      <Form>
        <h2>login</h2>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button
          className="loginbutton"
          variant="primary"
          type="button"
          onClick={handleLogin}
        >
          login
        </Button>
        <Button
          className="signupbutton"
          variant="primary"
          type="button"
          onClick={() => navigate("/signup")}
        >
          signup
        </Button>
        <Button
          className="forgotbutton"
          variant="primary"
          type="button"
          onClick={() => navigate("/forgotpassword")}
        >
          ForgotPassword
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
