import React, { useState } from 'react';
import { Row, Col, Form, Button, Toast, ToastContainer } from 'react-bootstrap';
import './Portfolio.css';

function Contact() {
  const [showToast, setShowToast] = useState(false);
  const [toastMsg, setToastMsg] = useState('');
  const [toastVariant, setToastVariant] = useState('success');

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form[0].value.trim();
    const email = form[1].value.trim();

    if (!name || !email) {
      setToastMsg('Name and Email are required!');
      setToastVariant('danger');
    } else {
      setToastMsg('Message sent successfully!');
      setToastVariant('success');
      form.reset(); // Clear form
    }

    setShowToast(true);
  };

  return (
    <div className="py-3 backg">
      <h2 className="text-center mb-2">Contact Me</h2>
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Form className="glass-card p-4 shadow rounded bg-light dark-bg" onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Your name here..." className='glass-card'/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" className='glass-card'/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPhone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="text" placeholder="03000000000" className='glass-card'/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label>Express Your Thoughts</Form.Label>
              <Form.Control as="textarea" rows={4} placeholder="Type your message..."className='glass-card' />
            </Form.Group>
            <div className="d-grid">
              <Button variant="primary" type="submit" size="lg">
                Send Message
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
      <ToastContainer position="top-end" className="p-3">
        <Toast bg={toastVariant} show={showToast} onClose={() => setShowToast(false)} delay={1000} autohide>
          <Toast.Header>
            <strong className="me-auto">{toastVariant === 'success' ? 'Success' : 'Error'}</strong>
          </Toast.Header>
          <Toast.Body className="text-white">{toastMsg}</Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
}

export default Contact;
