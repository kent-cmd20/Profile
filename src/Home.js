import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';

function Home() {
  return (
    <section id="home" className="bg-dark text-light d-flex align-items-center" style={{ minHeight: "100vh" }}>
      <Container>
        <Row className="align-items-center text-center text-lg-start">
          <Col lg={6}>
            <h1 className="display-4 fw-bold">
              Hi, I'm <span className="text-info">Kent Justine Asilo</span>
            </h1>
            <p className="lead mt-3">
              3rd Year BSIT Student at Pamantasan ng Cabuyao <br />
              Passionate about Web Development & UI/UX Design
            </p>
            <Button variant="info" size="lg" className="mt-3" href="#contact">
              Contact Me
            </Button>
          </Col>

          <Col lg={6} className="text-center mt-4 mt-lg-0">
            <Image
              src="https://scontent.fmnl8-3.fna.fbcdn.net/v/t39.30808-1/493981012_2072824209895702_2459456114366993257_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=105&ccb=1-7&_nc_sid=1d2534&_nc_ohc=b41FBImXPRcQ7kNvwGVuzBn&_nc_oc=Adns5Jmq6M1yuwxD7rX6HYQDNOwU-P0vdgXgwtdi1Gsy6KB_k0JZsO6nbVA6gKiWGcw&_nc_zt=24&_nc_ht=scontent.fmnl8-3.fna&_nc_gid=fIDzVJGHFBsLy8hTvqlIzg&oh=00_AftvDjsHmIsBr_UjtAhD5q2mzMaNt2aeMcI-nR6AHDGm0Q&oe=699B2032"
              roundedCircle
              fluid
              className="shadow-lg"
              style={{ width: "250px", height: "250px", objectFit: "cover" }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Home;
