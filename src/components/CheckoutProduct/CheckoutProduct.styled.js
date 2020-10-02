import styled from "styled-components";
import { CheckoutButton } from "../Subtotal/Subtotal.styled";

const colors = (props) => props.theme.colors.checkoutProduct;

export const Container = styled.div`
  display: flex;
  margin-top: 30px;
  margin-bottom: 30px;
`;

export const ProductImage = styled.img`
  width: 180px;
  height: 180px;
  object-fit: contain;
`;

export const ProductInfo = styled.div`
  padding-left: 10px;
  width: 350px;
`;

export const Title = styled.p`
  font-size: 17px;
  font-weight: 800;
`;

export const Price = styled.p``;

export const Rating = styled.div``;

export const Remove = styled(CheckoutButton)`
  width: 150px;
`;
