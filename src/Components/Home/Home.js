import React from 'react';
import Banner from '../Banner/Banner';
import Doctors from '../Doctors/Doctors';

const Home = () => {
    return (
        <div className="m-2">
            <Banner></Banner>
            <h1 className='text-primary m-5'>Our Doctors</h1>
            <Doctors></Doctors>
        </div>
    );
};

export default Home;