import styled from "styled-components";

const colors = (props) => props.theme.colors.product;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  margin: 10px;
  padding: 20px;
  width: 100%;
  min-width: 100px;
  max-height: 400px;
  background: ${(props) => colors(props).bg};
  z-index: 1;
`;

export const Info = styled.div`
  max-height: 100px;
  margin-bottom: 15px;
`;

export const Price = styled.div`
  margin-top: 5px;
`;

export const Rating = styled.div``;

export const ProductImage = styled.img`
  max-height: 200px;
  width: 100%;
  object-fit: contain;
  margin-bottom: 15px;
`;

export const AddToCart = styled.button`
  background-color: ${(props) => colors(props).button.bg};
  border: 1px solid;
  margin-top: 10px;
  color: ${(props) => colors(props).button.text};
  border-color: #a88734 #9c7e31 #846a29;
  cursor: pointer;
`;
