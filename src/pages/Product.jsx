import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { products } from '../data/product'
import { Link } from 'react-router-dom'
import { HeartOutlined } from '@ant-design/icons'
export default function Product() {
    return (
        <>
            <Container className='mt-5'>
                <Row>
                    {products.map((item,index) => {
                        return (
                            <Col lg={4} key={item.id} className='mb-5'>
                                <div className="card">
                                        <Link to={'detail/'+item.id}>
                                            <img className="card-img-top" src={item.image} alt="Title" />
                                        </Link>
                                        <div className="card-body d-flex justify-content-between">
                                            <div>
                                                <h4 className="card-title">{item.name}</h4>
                                                <p className="card-text">{item.price}</p>
                                            </div>
                                            <div>
                                                <a href="" className='btn btn-success'>Add cart</a>
                                                <HeartOutlined style={{fontSize:30}} />
                                            </div>
                                        </div>
                                    
                                </div>
                                
                                
                            </Col>
                        )
                    })}

                </Row>
            </Container>
        </>
    )
}
