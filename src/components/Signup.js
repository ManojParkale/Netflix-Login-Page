import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, FormGroup, FormLabel, FormControl, FormText, Card, CardBody } from 'react-bootstrap';

function Signup() {
  const [name, setName] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessageColor, setSuccessMessageColor] = useState('green');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Validation
    if (name === '') {
      setErrorMessage('Please enter your name');
      return;
    }
    if (mobileNo === '') {
      setErrorMessage('Please enter your mobile number');
      return;
    }
    if (email === '') {
      setErrorMessage('Please enter your email');
      return;
    }
    if (password === '') {
      setErrorMessage('Please enter your password');
      return;
    }

    // Send data to server
    fetch('http://localhost:3000/signup', {
      method: 'POST',
      body: JSON.stringify({ name, mobileNo, email, password }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log('Response:', data);
        setErrorMessage('Your account registered successfully!');
        setSuccessMessageColor('green');
      })
      .catch(error => {
        console.error('Error:', error);
        setErrorMessage('An error occurred. Please try again later.');
        setSuccessMessageColor('red');
      });
  };

  return (
    <div style={{ backgroundImage: `url(${require('./netflix.jpg')})`, height: '100vh' }}>
      <br></br>
      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col md={12}>
            <h1 className="text-center mb-5" style={{ fontSize: 40, fontWeight: 700, color: 'red' }}>Netflix</h1>
            <Card style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', borderRadius: 10, padding: 20, margin: '40px auto', width: 400 }}>
              <CardBody>
                <h2 className="text-center mb-5" style={{ fontSize: 24, fontWeight: 700, color: 'white' }}>Register</h2>
                <Form onSubmit={handleSubmit}>
                  <FormGroup className="d-flex align-items-center">
                    <FormControl 
                    type="text" 
                    name="name" 
                    id="name" 
                    placeholder="Name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    style={{ width: 330, height: 20, fontSize: 14, padding: 10, flex: 1,color:'white', backgroundColor: 'rgba(0, 0, 0, 0.5)' }} />
                  </FormGroup><br></br>
                  <FormGroup className="d-flex align-items-center">
                    <FormControl 
                    type="tel" 
                    name="mobileNo" 
                    id="mobileNo" 
                    placeholder="Phone Number" 
                    value={mobileNo} 
                    onChange={(e) => setMobileNo(e.target.value)} 
                    style={{ width: 330, height: 20, fontSize: 14, padding: 10, flex: 1,color:'white', backgroundColor: 'rgba(0, 0, 0, 0.5)' }} />
                  </FormGroup><br></br>
                  <FormGroup className="d-flex align-items-center">
                    <FormControl 
                    type="email" 
                    name="email" 
                    id="email" 
                    placeholder="Email Id" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    style={{ width: 330, height: 20, fontSize: 14, padding: 10, flex: 1,color:'white', backgroundColor: 'rgba(0, 0, 0, 0.5)' }} />
                  </FormGroup><br></br>
                  <FormGroup className="d-flex align-items-center">
                    <FormControl 
                    type="password" 
                    name="password" 
                    id="password" 
                    placeholder="Password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    style={{ width: 330, height: 20, fontSize: 14, padding: 10,color:'white', backgroundColor: 'rgba(0, 0, 0, 0.5)' }} />
                  </FormGroup><br></br>
                  <Button variant="Primary" type="submit" className="w-100" style={{ width: 350, height: 40, fontSize: 16, padding: 10, color: 'white', backgroundColor: 'red' }}>Sign Up</Button>
                  {errorMessage && <p style={{ color: successMessageColor }}>{errorMessage}</p>}
                  <p className="text-center" style={{ fontSize: 14, color: 'white' }}>account already exist? <a href="/signin" style={{ textDecoration: 'none', color: 'red' }}>Sign In</a></p>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Signup;
