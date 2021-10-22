import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Doclist from '../Doclist/Doclist';

const Doctorlist = () => {
    const [doclists,setDoclists] = useState([]);
    useEffect(()=>{
        fetch('./docList.JSON')
        .then(res=>res.json())
        .then(data=>setDoclists(data))
    },[])
    return (
        <div>
            <h2 className="text-danger m-5"><i>Doctors List</i></h2>
            <Container>
            <Container>
                <Row xs={1} md={3} direction="horizontal" gap={3} className="g-3">

                    {
                        doclists.map(doclist=> <Doclist doclist={doclist}></Doclist> )
                    }

                </Row>

            </Container>
            </Container>
        </div>
    );
};

export default Doctorlist;