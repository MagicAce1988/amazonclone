import React from "react";
import { Link } from "react-router-dom";
import { Subtotal } from "../../components";
import {
  CheckoutLeft,
  Container,
  CheckoutAd,
  CheckoutTitle,
  CheckoutRight,
} from "./Checkout.styled";

const Checkout = ({ ...props }) => {
  return (
    <Container {...props}>
      <CheckoutLeft>
        <Link to="/">
          <CheckoutAd
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
            alt="checkout ad"
          />
        </Link>
        <div>
          <CheckoutTitle>Your Shopping Basket</CheckoutTitle>
        </div>
      </CheckoutLeft>
      <CheckoutRight>
        <Subtotal />
      </CheckoutRight>
    </Container>
  );
};

export default Checkout;
