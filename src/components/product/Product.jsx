import { Button, Card } from "react-bootstrap";
// import Col from "react-bootstrap/Col";
// import Row from "react-bootstrap/Row";

function Product({ product }) {
  const { strMealThumb, strInstructions, strMeal } = product;
  return (
    <Card>
      <Card.Img variant="top" src={strMealThumb} />
      <Card.Body>
        <Card.Title>{strMeal}</Card.Title>
        <Card.Text title={strInstructions}>
          {strInstructions.split(".")[0]}. ...
        </Card.Text>
      </Card.Body>
      <Button>order now</Button>
    </Card>
  );
}

export default Product;
