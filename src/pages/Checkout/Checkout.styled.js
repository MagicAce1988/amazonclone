import styled from "styled-components";

const colors = (props) => props.theme.colors.checkout;

export const Container = styled.div`
  display: flex;
  padding: 20px;
  background-color: ${(props) => colors(props).bg};
  height: max-content;
`;

export const CheckoutLeft = styled.div``;

export const CheckoutAd = styled.img`
  width: 100%;
  margin-bottom: 10px;
`;

export const CheckoutTitle = styled.h2`
  margin-right: 10px;
  padding: 10px;
  border-bottom: 1px solid ${(props) => colors(props).titleLine};
`;

export const CheckoutRight = styled.div``;
