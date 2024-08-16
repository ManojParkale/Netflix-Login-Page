import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, FormGroup, FormLabel, FormControl, FormText, Card, CardBody } from 'react-bootstrap';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:3000/signup')
      .then(response => response.json())
      .then(data => {
        const user = data.find(user => user.email === email && user.password === password);
        if (user) {
          setLoginSuccess(true);
          setLoginError('');
        } else {
          setLoginError('Email-id or password is incorrect');
          setLoginSuccess(false);
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div style={{ backgroundImage: `url(${require('./netflix.jpg')})`, height: '100vh' }}><br></br>
      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col md={12}>
            <h1 className="text-center mb-5" style={{ fontSize: 40, fontWeight: 700, color: 'red' }}>Netflix</h1>
            <Card style={{
              backgroundColor: 'rgba(0, 0, 0, 0.8)', // black transparent background
              borderRadius: 10,
              padding: 20,
              margin: '40px auto', // add this to center the card
              width: 400
            }}>
              <CardBody>
                <h2 className="text-center mb-5" style={{ fontSize: 24, fontWeight: 700, color: 'white' }}>Sign In</h2>
                <Form onSubmit={handleSubmit}>
                  <FormGroup className="d-flex align-items-center">
                    <FormControl
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email or phone number"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      style={{ width: 330, height: 20, fontSize: 14, padding: 10, flex: 1,color:'white', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
                    />
                  </FormGroup><br></br>
                  <FormGroup className="d-flex align-items-center">
                    <FormControl
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      style={{ width: 330, height: 20, fontSize: 14, padding: 10,color:'white', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
                    />
                  </FormGroup><br></br>
                  <Button variant="Primary" type="submit" className="w-100" style={{ width: 350, height: 40, fontSize: 16, padding: 10, color: 'white', backgroundColor: 'red' }}>
                    Sign In
                  </Button>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Form.Check type="checkbox" label="Remember me" style={{marginLeft:"20px", fontSize: 14, color: 'white' }} />
                  <span style={{ width: 20 }} />
                  <FormText style={{ marginRight: "20px", fontSize: 14, color: 'red' }}><a href="https://help.netflix.com/en"  style={{ textDecoration: 'none', color: 'red' }}>Need help?</a>
                  </FormText>
                  </div>
                  {loginError && <div style={{ color: 'red' }}>{loginError}</div>}
                  {loginSuccess && <div style={{ color: 'green' }}>Successfully login!</div>}
                </Form>
                <h4 className="text-center mt-4" style={{ fontSize: 16, fontWeight: 500, color: 'white' }}>New to Netflix? <a href="/signup" style={{ textDecoration: 'none', color: 'red' }}>Sign up now</a></h4>
                <p className="text-center" style={{ fontSize: 14, color: 'white' }}>
                  This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="https://help.netflix.com/en" style={{ textDecoration: 'none', color: 'red' }}>Learn more.</a>
                </p>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;