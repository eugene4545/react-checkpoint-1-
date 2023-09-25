import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
//card component (bootstrap)
function Exc() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Header style={{color: 'magenta'}}>This is a card</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item >Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default Exc;