import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function About() {
  return (
    <section id="about" className="py-5 bg-light">
      <Container>
        <h1 className="text-center mb-5 fw-bold">About Me</h1>

        <Row className="justify-content-center">
          <Col md={8}>
            <Card className="shadow-lg border-0">
              <Card.Body className="p-4">
                <h4 className="mb-3 text-primary">Background & Education</h4>
                <p>
                  I am currently a 3rd year BSIT student at Pamantasan ng Cabuyao.
                  I am building a strong foundation in Information Technology,
                  focusing on web development and modern UI design.
                </p>

                <h4 className="mt-4 text-primary">Hobbies & Interests</h4>
                <ul>
                  <li>Exploring new frameworks and technologies</li>
                  <li>Contributing to open-source projects</li>
                  <li>Playing video games</li>
                  <li>Reading tech blogs</li>
                  <li>Photography & editing</li>
                </ul>

                <h4 className="mt-4 text-primary">Experience</h4>
                <p>
                  I have completed several academic and personal projects
                  focused on responsive web development. I am currently seeking
                  internship opportunities to apply my skills in real-world projects.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
