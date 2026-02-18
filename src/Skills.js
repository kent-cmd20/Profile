import React from 'react';
import { Container, Row, Col, Card, ProgressBar } from 'react-bootstrap';

function Skills() {
  const skills = [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "Java", level: 75 },
    { name: "C#", level: 70 }
  ];

  return (
    <section id="skills" className="py-5 bg-dark text-light">
      <Container>
        <h1 className="text-center mb-5 fw-bold">My Skills</h1>

        <Row className="justify-content-center">
          <Col md={8}>
            <Card className="shadow-lg border-0">
              <Card.Body className="p-4 bg-secondary rounded">
                {skills.map((skill, index) => (
                  <div key={index} className="mb-4">
                    <div className="d-flex justify-content-between">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <ProgressBar now={skill.level} variant="info" />
                  </div>
                ))}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Skills;
