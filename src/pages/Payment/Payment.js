import React from "react";
import {
  Address,
  Container,
  Details,
  Info,
  Items,
  Section,
  Title,
} from "./Payment.styled";
import { useStateValue } from "../../StateProvider";
import { CheckoutProduct } from "../../components";
import { Link } from "react-router-dom";

const Payment = ({ ...props }) => {
  const [{ basket, user }] = useStateValue();
  return (
    <Container {...props}>
      <Info>
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>
        <Section>
          <Title>
            <h3>Delivery Address</h3>
          </Title>
          <Address>
            <p>{user?.email}</p>
            <p>23 React Lane</p>
            <p>Los Angeles, CA</p>
          </Address>
        </Section>
        <Section>
          <Title>
            <h3>Review items and delivery</h3>
          </Title>
          <Items>
            {basket.map((item, index) => (
              <CheckoutProduct key={item.id + index} {...item} />
            ))}
          </Items>
        </Section>
        <Section>
          <Title>
            <h3>Payment Method</h3>
          </Title>
          <Details>{/* stripe magic here */}</Details>
        </Section>
      </Info>
    </Container>
  );
};

export default Payment;
