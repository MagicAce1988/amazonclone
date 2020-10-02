import React from "react";
import { Container, Logo, Main } from "./Login.styled";
import { Link } from "react-router-dom";

const Login = ({ ...props }) => {
  return (
    <Container {...props}>
      <Link to="/">
        <Logo src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" />
      </Link>
      <Main>
        <h1>Sign-In</h1>
        <form>
          <h5>Email</h5>
          <input type="text" />
          <h5>Password</h5>
          <input type="password" />
          <button>Sign In</button>
        </form>
        <p>By signing-in you agree to Amazon's Clone Conditions of Use</p>
      </Main>
    </Container>
  );
};

export default Login;
