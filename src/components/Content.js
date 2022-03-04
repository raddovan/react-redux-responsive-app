import { Container, Row, Col } from 'react-grid-system';
import ai from "../assets/ai.png";

function Content() {
    return (
        <Container >
        <Row>
          <Col sm={6}>
            One of three columns
          </Col>
          <Col sm={6}>
          <img src={ai} alt="ai" height={600}/>
          </Col>
        </Row>
      </Container>
    );
  }


  
  export default Content;