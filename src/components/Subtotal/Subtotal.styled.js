import styled from "styled-components";

const colors = (props) => props.theme.colors.subtotal;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 300px;
  height: 100px;
  padding: 20px;
  background-color: ${(props) => colors(props).bg};
  border: 1px solid ${(props) => colors(props).bg};
  border-radius: 3px;
`;

export const SubtotalGift = styled.small`
  display: flex;
  align-items: center;
  input {
    margin-right: 5px;
  }
`;

export const CheckoutButton = styled.button`
  background-color: ${(props) => colors(props).button.bg};
  border-radius: 2px;
  width: 100%;
  height: 30px;
  border: 1px solid;
  margin-top: 10px;
  color: ${(props) => colors(props).button.color};
  border-color: #a88734 #9c7e31 #846a29;
  cursor: pointer;
`;
