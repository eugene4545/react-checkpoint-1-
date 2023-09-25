
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import download from './images/1082550.jpg'; // Corrected import path
import istockphoto from './images/1496231.jpg'; // Corrected import path

const CarouselComponent = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={download}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First Slide</h3> {/* Fix the typo here */}
          <p>This is the first slide of the carousel.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={istockphoto}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second Slide</h3>
          <p>This is the second slide of the carousel.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
