import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import {
  ListGroup,
  Button,
  Row,
  Col,
  Image,
  ListGroupItem,
  Card,
} from "react-bootstrap";
import Rating from "../components/Rating";

const ProductScreen = ({ params }) => {
  
  params = useParams();
  const [currentProduct, setCurrentProduct] = useState({});
  useEffect(() => {
      const fetchData = async () =>{
        const {data} = await axios.get(`/api/products/${params.id}`)
        setCurrentProduct(data)
      }
      fetchData()
    },[params]);
    
  return (
    <>
      <Button className="btn btn-dark rounded my-2 ">Go Back</Button>
      <Row>
        <Col md={6}>
          <Image
            src={`${currentProduct.image}`}
            alt={`${currentProduct.name}`}
            fluid
          />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroupItem>
              <h2>{currentProduct.name}</h2>
            </ListGroupItem>
            <ListGroupItem>
              <Rating
                value={currentProduct.rating}
                text={`${currentProduct.numReviews} reviews`}
              />
            </ListGroupItem>
            <ListGroupItem>Price: ${currentProduct.price}</ListGroupItem>
            <ListGroupItem>
              Description: {currentProduct.description}
            </ListGroupItem>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card className="p-2">
            <ListGroup variant="flush">
              <ListGroupItem>
                <Row>
                  <Col>Price: </Col>
                  <Col>${currentProduct.price}</Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Row>
                  <Col>Status: </Col>
                  <Col>
                    $
                    {currentProduct.countInStock > 0
                      ? "In Stock"
                      : "Out of Stock"}{" "}
                  </Col>
                </Row>
              </ListGroupItem>
              <Button
                type="button"
                className="my-2 btn btn-block"
                disabled={currentProduct.countInStock === 0}
              >
                Add To Cart
              </Button>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default ProductScreen;
