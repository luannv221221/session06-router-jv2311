import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'
import Product from './Product';
import { products } from '../data/product';
export default function Detail() {
    const params = useParams();
    let id = params.id;
    const product = products.find((pro)=>pro.id == id);
    console.log(product);
    const handleBack = useNavigate();
  return (
    <>
        <Container>
            <button onClick={()=>handleBack(-1)}  className='btn btn-outline-secondary'>Back</button>
            <Row>
                <Col lg={6}>
                    <img
                        src={product.image}
                        className="img-fluid rounded-top"
                        alt=""
                    />
                    
                </Col>
                <Col lg={6}>
                    <h3>Tên sản phẩm : {product.name} </h3>
                    <h3>gái sản phẩm : {product.price}</h3>
                    <input type="text" className=''/>
                    <a className='btn btn-primary'>Mua ngay</a>
                </Col>
            </Row>
        </Container>
    </>
  )
}
