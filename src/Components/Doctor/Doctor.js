// import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card,Button} from 'react-bootstrap';
import { Link ,NavLink} from 'react-router-dom';
import './Doctor.css';
const Doctor = (props) => {
    const {img,name,description}=props.doctor
    return (
        <div>
            <Card>
                <Card.Img variant='top' src={img}/>
                <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{description}
                </Card.Text>
                <NavLink to="/register"> <Button variant="outline-dark">Appoinment</Button> </NavLink>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Doctor;