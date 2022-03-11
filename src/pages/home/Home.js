import React from "react";
import { Container, Row, Col } from "react-grid-system";
import ai from "../../assets/cube.png";
import Typography from "@mui/material/Typography";
import "./styling.css";

function Home() {
  return (
    <Container className="content">
      <Row align="center">
        <Col sm={6} className="right">
          <Typography variant="h8" component="h3" className="gradient__text">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </Typography>
        </Col>
        <Col sm={6} className="left_img">
          <img src={ai} alt="ai" height={"50%"} width={"100%"} />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
