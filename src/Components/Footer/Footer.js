import React from 'react';
import { Col, Row } from 'react-bootstrap';


const Footer = () => {
    return (
        <div>
              <Row className='bg-dark text-danger p-5 mt-5'>
                <Col>
                    <h4>KH Medicare Hospital</h4>
                    <p>We are providing best care in this town</p>
                </Col>
                <Col xs={5}>
                    <p>Home</p>
                    <p>Service</p>
                    <p>Contact</p>
                    <p>About Medicare</p>
                </Col>
                <Col>
                    <p>Copyright © 2021 KH IT-Tech. All Rights Reserved</p>
                    <p>We promise to our clients and is constantlystriving to improve diagnostic performance and heightened satisfaction of clients and developer.</p>
                </Col>
            </Row>
        </div>
    );
};

export default Footer;































