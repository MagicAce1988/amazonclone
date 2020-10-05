import styled from "styled-components";
import { CheckoutProduct } from "..";

const colors = (props) => props.theme.colors.orderSummary;

export const Container = styled.div`
  padding: 40px;
  margin: 20px 0;
  position: relative;
  background-color: ${(props) => colors(props).bg};
  border: 1px solid ${(props) => colors(props).border};
`;

export const OrderId = styled.p`
  position: absolute;
  top: 40px;
  right: 20px;
`;

export const Product = styled(CheckoutProduct)`
  button {
    display: none;
  }
`;

export const OrderTotal = styled.h3`
  font-weight: 500;
  text-align: right;
`;
