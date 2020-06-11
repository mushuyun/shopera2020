import React from "react";
import CartCollapse from "./cartCollapse";
import { Link } from "react-router-dom";
import { Form, Row, Col, FormGroup, Label, 
  Input,
  FormFeedback,
  FormText,
  Button,
  Container
} from "reactstrap";



const ShippingForm = (props) => {
  return (
    <Container>
      <CartCollapse />
    <Form id="shippingForm">
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="First Name"></Label>
            <Input placeholder="First Name" required/>
            <FormFeedback invalid >Please Enter First Name</FormFeedback>
            <FormText></FormText>
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="Last Name"></Label>
            <Input placeholder="Last Name" required/>
            <FormFeedback invalid>Please Enter Last Name</FormFeedback>
            <FormText></FormText>
          </FormGroup>
        </Col>
      </Row>
      <Row form>
        <Col md={8}>
          <FormGroup>
            <Label for="Street Address"></Label>
            <Input placeholder="Street Address" required/>
            <FormFeedback invalid>
              Please Enter Street Address with Apt # if applicable
            </FormFeedback>
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="Apt Number"></Label>
            <Input placeholder="Apt Number"/>
            <FormFeedback></FormFeedback>
            <FormText>If no apt, leave blank.</FormText>
          </FormGroup>
        </Col>
      </Row>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="City"></Label>
            <Input placeholder="City" required/>
            <FormFeedback invalid>Please Enter City of Delivery</FormFeedback>
            <FormText></FormText>
          </FormGroup>
        </Col>
        <Col md={3}>
          <FormGroup>
            <Label for="State"></Label>
            <Input type="select" name="select" id="stateAbbrev" placeholder="Select State" required>
              <option value="AL">Alabama</option>
              <option value="AK">Alaska</option>
              <option value="AZ">Arizona</option>
              <option value="AR">Arkansas</option>
              <option value="CA">California</option>
              <option value="CO">Colorado</option>
              <option value="CT">Connecticut</option>
              <option value="DE">Delaware</option>
              <option value="DC">District Of Columbia</option>
              <option value="FL">Florida</option>
              <option value="GA">Georgia</option>
              <option value="HI">Hawaii</option>
              <option value="ID">Idaho</option>
              <option value="IL">Illinois</option>
              <option value="IN">Indiana</option>
              <option value="IA">Iowa</option>
              <option value="KS">Kansas</option>
              <option value="KY">Kentucky</option>
              <option value="LA">Louisiana</option>
              <option value="ME">Maine</option>
              <option value="MD">Maryland</option>
              <option value="MA">Massachusetts</option>
              <option value="MI">Michigan</option>
              <option value="MN">Minnesota</option>
              <option value="MS">Mississippi</option>
              <option value="MO">Missouri</option>
              <option value="MT">Montana</option>
              <option value="NE">Nebraska</option>
              <option value="NV">Nevada</option>
              <option value="NH">New Hampshire</option>
              <option value="NJ">New Jersey</option>
              <option value="NM">New Mexico</option>
              <option value="NY">New York</option>
              <option value="NC">North Carolina</option>
              <option value="ND">North Dakota</option>
              <option value="OH">Ohio</option>
              <option value="OK">Oklahoma</option>
              <option value="OR">Oregon</option>
              <option value="PA">Pennsylvania</option>
              <option value="RI">Rhode Island</option>
              <option value="SC">South Carolina</option>
              <option value="SD">South Dakota</option>
              <option value="TN">Tennessee</option>
              <option value="TX">Texas</option>
              <option value="UT">Utah</option>
              <option value="VT">Vermont</option>
              <option value="VA">Virginia</option>
              <option value="WA">Washington</option>
              <option value="WV">West Virginia</option>
              <option value="WI">Wisconsin</option>
              <option value="WY">Wyoming</option>
            </Input>
            <FormFeedback tooltip>Please Enter State of Delivery</FormFeedback>
            <FormText></FormText>
          </FormGroup>
        </Col>
        <Col md={3}>
          <FormGroup>
            <Label for="ZipCode"></Label>
            <Input placeholder="Zip Code"required/>
            <FormFeedback invalid tooltip>
              Please Enter a Valid Zip Code for Delivery
            </FormFeedback>
            <FormText></FormText>
          </FormGroup>
        </Col>
      </Row>
      <Link to="/placeorder">
        <Button size="lg" id="checkOutBtn">CheckOut</Button>
        </Link>
    </Form>
    </Container>
  );
};

export default ShippingForm;


