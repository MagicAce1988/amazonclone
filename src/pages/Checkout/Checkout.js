import React from "react";
import { Link } from "react-router-dom";
import { Subtotal } from "../../components";
import CheckoutProduct from "../../components/CheckoutProduct/CheckoutProduct";
import { useStateValue } from "../../StateProvider";
import {
  CheckoutLeft,
  Container,
  CheckoutAd,
  CheckoutTitle,
  CheckoutRight,
} from "./Checkout.styled";
import FlipMove from "react-flip-move";

const Checkout = ({ ...props }) => {
  const [{ basket }] = useStateValue();

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
          <FlipMove>
            {basket?.map((basketItem) => (
              <CheckoutProduct key={basketItem.orderId} {...basketItem} />
            ))}
          </FlipMove>
        </div>
      </CheckoutLeft>
      <CheckoutRight>
        <Subtotal />
      </CheckoutRight>
    </Container>
  );
};

export default Checkout;
