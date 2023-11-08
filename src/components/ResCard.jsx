import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ResCard({name, image}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default ResCard;






