import React from 'react';
import { Container, ProgressBar } from 'react-bootstrap';
import Banner from '../Banner/Banner';
import Doctors from '../Doctors/Doctors';

const Home = () => {
    return (
        <div className="m-2">
            <Banner></Banner>
            <h1 className="font-bold text-3xl my-5" style={{color:'red'}}>Our Doctors</h1>
            <Doctors></Doctors>
            <div>
            <h3 className="font-bold text-2xl my-5" style={{color:'purple'}}>Our Progress (2017-2020)</h3>
            <Container className=''>
            <ProgressBar  variant="success" now={40} /> <br />
            <ProgressBar striped variant="info" now={20} /> <br />
            <ProgressBar striped variant="warning" now={60} /> <br />
            <ProgressBar striped variant="danger" now={80} />

            </Container>
        </div>

        </div>
    );
};

export default Home;