import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Container, ProgressBar } from 'react-bootstrap';

const About = () => {
    return (
        <div>
             <div>
                 <h1 className="text-primary m-3">About KH Medicare Hospital</h1>
            <h3 className='m-3'><i>
                KH Medicare Hospital has been in existence since 1989. It is approved by concerned authorities like Directorate General of Health Services, Dhaka City Corporation, Ministry of Environment, Ministry of Health and Family Welfare, Bangladesh Atomic Energy Commission.

                KH Medicare Hospital prides itself on its commitment to the patients and is constantlystriving to improve diagnostic performance and heightened satisfaction of patients and physicians delight.</i>
            </h3><br /> <br />
        </div>
        <div>
            <h2 className="text-primary m-3">Our Objective</h2>
            <h5 className='p-2 mb-5'><i>
                1) To provide world- class health care services at an affordable cost in General Medical Fields. <br />
                2) Diagnosis of Cancer and its prevention. <br />
                3) The treatment of cancer patients and management at an affordable cost. <br />
                4) To be socially responsible and accountable to each of the constituents with whom we interact namely, our clients, employees, fellow citizens, business associates and our Shareholders.</i>
            </h5>
        </div>

        <div>
            
        <div>
            <h3 className='text-primary m-5'>Our Progress (2017-2020)</h3>
            <Container className=''>
            <ProgressBar  variant="success" now={40} /> <br />
            <ProgressBar striped variant="info" now={20} /> <br />
            <ProgressBar striped variant="warning" now={60} /> <br />
            <ProgressBar striped variant="danger" now={80} />

            </Container>
        </div>
        </div>

        </div>
       
            

         


    );
};

export default About;