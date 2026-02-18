import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-5 bg-light">
      <Container>
        <h1 className="text-center mb-5 fw-bold">Contact Me</h1>

        <Row className="justify-content-center">
          <Col md={8}>
            <Card className="shadow-lg border-0">
              <Card.Body className="p-4">
                {submitted && (
                  <Alert variant="success">
                    Thank you, {formData.name}! Your message has been sent.
                  </Alert>
                )}

                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      required
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      required
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      name="message"
                      required
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <div className="d-grid">
                    <Button type="submit" variant="primary" size="lg">
                      Send Message
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
