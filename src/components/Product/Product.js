import React from "react";
import { Container, Info, Price, Rating } from "./Product.styled";

const Product = ({ ...props }) => {
  return (
    <Container {...props}>
      <Info>
        <p>The lean startup</p>
        <Price>
          <small>$</small>
          <strong>19.99</strong>
          <Rating>
            <p></p>
          </Rating>
        </Price>
      </Info>
    </Container>
  );
};

export default Product;
