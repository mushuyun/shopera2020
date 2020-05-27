import React, { useState } from "react";
import Cart from "./Cart";
import { Collapse, Button, CardBody, Card 
  } from "reactstrap";

  const CartCollapse = (props) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
  
    return (
      <div className="container">
        <Button size="lg" id="collapseBtn" onClick={toggle} style={{ marginBottom: '1rem' }}>Cart Items</Button>
        <Collapse isOpen={isOpen}>
          <Cart />
            
        </Collapse>
      </div>
    );
  }
  
  export default CartCollapse;