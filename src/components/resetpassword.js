import { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { toast } from "react-toastify";
import {url} from '../App';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


function ResetPassword(props) {
  const [email, setEmail] = useState(props.email);
  const [password,setPassword]=useState("");

  let navigate = useNavigate();


  const handleResetPassword = async() => {
    // const payload ={password};
    
      try {
        const response = await axios.post(`http://localhost:3000/forgotpassword/resetpassword/:token`, password);
        toast.success(response.data.message);
  
        console.log(response.data);
        navigate("/login");
      } catch (error) {
        toast.error(error.response.data.message);
  
        console.error(error.response.data.message);
      }
    }
    

    
  


  return (
    <Container>
      <Row className="justify-content-md-center mt-5">
        <Col md={6}>
          <Form>
          <h2 className="text-center mb-3">Reset Password</h2>

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
          <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>

            <Button variant="primary" type="button" onClick={handleResetPassword}>
              resetpassword
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default ResetPassword;
