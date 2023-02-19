import { Card, Container, Row, Col, Image } from 'react-bootstrap';
import duneImage from '../assets/images/trending/dune.jpg';
import everything from '../assets/images/trending/everything.jpg';
import infinte from '../assets/images/trending/infinite.jpg';
import joker from '../assets/images/trending/joker.jpg';
import lightyear from '../assets/images/trending/lightyear.jpg';
import morbius from '../assets/images/trending/morbius.jpg';


const Trending = () => {
  return (
    <div>
      <Container>
        <br/>
        <h1 className='text-white'>Trending Movies</h1>
        <br/>
        <Row>
          <Col md={4} id='trending'>
            <Card className="imageMovie">
              <Image src={duneImage} alt="Image Dune" className="Image" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">DUNE</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with supporting text below as a content
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="imageMovie">
              <Image src={everything} alt="Image Dune" className="Image" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">Everything Everywhere</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with supporting text below as a content
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="imageMovie">
              <Image src={infinte} alt="Image Dune" className="Image" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">INFINITE</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with supporting text below as a content
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="imageMovie">
              <Image src={joker} alt="Image Dune" className="Image" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">JOKER</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with supporting text below as a content
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="imageMovie">
              <Image src={lightyear} alt="Image Dune" className="Image" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">LIGHT YEAR</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with supporting text below as a content
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="imageMovie">
              <Image src={morbius} alt="Image Dune" className="Image" />
              <div className="bg-dark">
                <div className="p-2 m-1 text-white">
                  <Card.Title className="text-center">MORBIUS</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with supporting text below as a content
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Trending;
