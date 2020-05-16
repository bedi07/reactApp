import React from "react";
import { Button, Form, Container,Row,Col } from "react-bootstrap";
import "./Login.css";

  function Login() {
     return (
       <Container style={{ marginTop:'15px'}}>
        <Form>
         <h4 className="wrapper hdg" >LOGIN</h4>
        <Form.Group controlId="formBasicEmail" className="inptWidth">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
         </Form.Group>
          <Form.Group controlId="formBasicPassword" className="inptWidth">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <div className="wrapper"> <Button className="buttonwidth" variant="primary" type="submit">
          Submit
        </Button></div>
      </Form>
      </Container>
  );
}

export default Login