import React, { forwardRef } from "react";
import { REMOVE_FROM_BASKET } from "../../redux/actionTypes";
import { useStateValue } from "../../StateProvider";
import {
  ProductImage,
  ProductInfo,
  Container,
  Title,
  Price,
  Rating,
  Remove,
} from "./CheckoutProduct.styled";

const CheckoutProduct = forwardRef(
  ({ index, id, image, title, price, rating, orderId, ...props }, ref) => {
    const [, dispatch] = useStateValue();
    const removeFromBasket = () => {
      dispatch({ type: REMOVE_FROM_BASKET, payload: { orderId } });
    };
    return (
      <Container ref={ref} {...props}>
        <ProductImage src={image} />
        <ProductInfo>
          <Title>{title}</Title>
          <Price>
            <small>$</small>
            <strong>{price}</strong>
          </Price>
          <Rating>
            <p>{"🌟".repeat(rating)}</p>
          </Rating>
          <Remove onClick={removeFromBasket}>Remove from Basket</Remove>
        </ProductInfo>
      </Container>
    );
  }
);

export default CheckoutProduct;
