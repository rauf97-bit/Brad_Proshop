import React, {useState, useEffect} from "react";
import axios from 'axios';
import Product from '../components/Product';
import { Row, Col } from "react-bootstrap";


const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchDatas = async () =>{
      const {data} = await axios.get('/api/products')
      setProducts(data)
    }
    fetchDatas()
  }, []);
  
  return (
    <>
      <div className="py-2">
        <h2 className="text-center">Latest Products...</h2>
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4}>
              <Product product={product} key={product._id} />
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default HomeScreen;
