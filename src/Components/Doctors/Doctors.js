import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const[doctors,setDoctors]=useState([]);
    useEffect(()=>{
        fetch('./doctors.JSON')
        .then(res=>res.json())
        .then(data=>setDoctors(data))
    },[])
    return (
        <div>
            <Container>
                <Row xs={1} md={3} direction="horizontal" gap={3} className="g-3">
                    {
                        doctors.map(doctor=><Doctor doctor={doctor}></Doctor>)
                    }
                </Row>

            </Container>
        </div>
    );
};

export default Doctors;