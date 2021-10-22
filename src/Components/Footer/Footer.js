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
                </Col>
            </Row>
        </div>
    );
};

export default Footer;


// import React from "react";
// import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

// const FooterPage = () => {
//   return (
//     <MDBFooter color="blue" className="font-small pt-4 mt-4">
//       <MDBContainer fluid className="text-center text-md-left">
//         <MDBRow>
//           <MDBCol md="6">
//             <h5 className="title">Footer Content</h5>
//             <p>
//               Here you can use rows and columns here to organize your footer
//               content.
//             </p>
//           </MDBCol>
//           <MDBCol md="6">
//             <h5 className="title">Links</h5>
//             <ul>
//               <li className="list-unstyled">
//                 <a href="#!">Link 1</a>
//               </li>
//               <li className="list-unstyled">
//                 <a href="#!">Link 2</a>
//               </li>
//               <li className="list-unstyled">
//                 <a href="#!">Link 3</a>
//               </li>
//               <li className="list-unstyled">
//                 <a href="#!">Link 4</a>
//               </li>
//             </ul>
//           </MDBCol>
//         </MDBRow>
//       </MDBContainer>
//       <div className="footer-copyright text-center py-3">
//         <MDBContainer fluid>
//           &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> MDBootstrap.com </a>
//         </MDBContainer>
//       </div>
//     </MDBFooter>
//   );
// }

// export default FooterPage;





























