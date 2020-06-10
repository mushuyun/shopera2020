import React from "react";
import {
    Row,
    Col,
    Container,
  } from "reactstrap";
import "../../styles/payment.css";
import "../../styles/cart.css";
import Cookie from "js-cookie";
import { Link } from "react-router-dom";


const UserInfo = Cookie.getJSON("userInfo");

const Payment = (props) => {
        return <Container>
            <Col md={12}>
            <h2 id="userCO" style={{ marginTop: 15 }}>Thank you for Shopping! {UserInfo.name}</h2>
            </Col> 
            <Container style={{ textAlign: "center" }}>
            <Row>
            <Col md={12} id="ccLink">
                <Link to="./" id="payMC"><img src="https://img.icons8.com/officel/48/000000/mastercard.png"alt="MC"/>
                </Link>
            </Col>
            </Row>
            <Row>
            <Col md={12} id="ccLink">
                <Link to="./" id="payVisa"><img src="https://img.icons8.com/color/48/000000/visa.png" alt="Visa"/>
                </Link>
            </Col>
            </Row>
            <Row>
            <Col md={12} id="ccLink">   
                <Link to="./" id="payDisc"><img src="https://img.icons8.com/color/48/000000/discover.png" alt="Disc"/>
                </Link>
            </Col>
            </Row>
            <Row>
            <Col md={12} id="ccLink">
                <Link to="./" id="payAmex"><img src="https://img.icons8.com/officel/40/000000/amex.png"alt="Amex"/>
                </Link>
            </Col>
            </Row>
            <Row>
            <Col md={12} id="ccLink">
                <Link to="./" id="payPP"><img src="https://img.icons8.com/officel/40/000000/paypal.png" alt="PayPal"alt/>
                </Link>
            </Col>
            </Row>
            </Container>
        </Container>
  }

  export default Payment;