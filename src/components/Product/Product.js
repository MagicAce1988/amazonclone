import React from "react";
import {
  AddToCart,
  Container,
  Info,
  Price,
  ProductImage,
  Rating,
} from "./Product.styled";

const Product = ({ title, image, price, rating, ...props }) => {
  return (
    <Container {...props}>
      <Info>
        <p>{title}</p>
        <Price>
          <small>$</small>
          <strong>{price}</strong>
          <Rating>
            <p>{`🌟`.repeat(rating)}</p>
          </Rating>
        </Price>
      </Info>
      <ProductImage src={image} alt={title} />
      <AddToCart>Add to Basket</AddToCart>
    </Container>
  );
};

export default Product;
