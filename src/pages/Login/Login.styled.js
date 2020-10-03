import styled from "styled-components";
import { CheckoutButton } from "../../components/Subtotal/Subtotal.styled";

const colors = (props) => props.theme.colors.login;

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
`;

export const Logo = styled.img`
  margin-top: 20px;
  margin-bottom: 20px;
  object-fit: contain;
  width: 100px;
  margin-right: auto;
  margin-left: auto;
  margin-top: -50px;
`;

export const Main = styled.div`
  width: 300px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  border: 1px solid ${(props) => colors(props).main.border};
  padding: 20px;
  h1 {
    font-weight: 500;
    margin-bottom: 20px;
  }

  h5 {
    margin-bottom: 5px;
  }

  input {
    height: 30px;
    margin-bottom: 10px;
    background-color: ${(props) => colors(props).input.bg};
    width: 98%;
    outline: none;
    border: 1px solid;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px white inset !important;
  }

  p {
    margin-top: 15px;
    font-size: 12px;
  }
`;

export const SignIn = styled(CheckoutButton)``;

export const Register = styled.button`
  border-radius: 2px;
  width: 100%;
  height: 30px;
  border: 1px solid;
  margin-top: 10px;
  border-color: ${(props) => colors(props).register.border};
`;
