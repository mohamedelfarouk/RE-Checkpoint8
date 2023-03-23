import Card from "react-bootstrap/Card";

const MovieCard = ({ movie: { title, desc, rating, posterURL } }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={posterURL} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{desc}</Card.Text>
        <Card.Text>Rating:{rating}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
