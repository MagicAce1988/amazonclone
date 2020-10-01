import React from "react";
import { ADD_TO_BASKET } from "../../redux/actionTypes";
import { useStateValue } from "../../StateProvider";
import {
  AddToCart,
  Container,
  Info,
  Price,
  ProductImage,
  Rating,
} from "./Product.styled";

const Product = ({ id, title, image, price, rating, ...props }) => {
  const [, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: ADD_TO_BASKET,
      payload: { title, image, price, rating, id },
    });
  };
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
      <AddToCart onClick={addToBasket}>Add to Basket</AddToCart>
    </Container>
  );
};

export default Product;
