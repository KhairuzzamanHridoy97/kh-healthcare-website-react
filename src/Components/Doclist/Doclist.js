// import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card ,Button} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Doclist = (props) => {
    const {img,name,description}=props.doclist
    return (
        <div>
            <Card>
                <Card.Img variant='top' src={img}/>
                <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{description}
                </Card.Text>
                {/* <Button className='appoinment' href='/appoinment'>Appoinment</Button> */}
                <NavLink to="/appoinment"> <Button variant="outline-dark">Appoinment</Button> </NavLink>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Doclist;