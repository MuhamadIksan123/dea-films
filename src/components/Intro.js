import { Container, Col, Row, Button } from 'react-bootstrap';

const Intro = () => {
  return (
    <div class="intro">
      <Container className="text-white d-flex text-center justify-content-center align-items-center">
        <Row>
          <Col >
            <div className="title">NONTON GRATIS</div>
            <div className="title">GAK PAKE KARCIS</div>
            <div class="intoButton mt-4 text-center">
              <Button variant="dark">List Semua Film</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Intro;
