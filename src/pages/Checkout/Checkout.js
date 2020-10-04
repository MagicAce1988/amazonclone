import React, { useEffect, useState } from "react";
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

const Checkout = ({ ...props }) => {
  const [localBasket, setLocalBasket] = useState([]);

  const [state] = useStateValue();

  useEffect(() => {
    setLocalBasket(state.basket);
  }, [state]);
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
          {localBasket?.map((basketItem) => (
            <CheckoutProduct key={basketItem.orderId} {...basketItem} />
          ))}
        </div>
      </CheckoutLeft>
      <CheckoutRight>
        <Subtotal />
      </CheckoutRight>
    </Container>
  );
};

export default Checkout;
