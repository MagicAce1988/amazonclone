import React from "react";
import { Container, Logo, Main, Register, SignIn } from "./Login.styled";
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
          <SignIn>Sign In</SignIn>
        </form>
        <p>
          By signing-in you agree to Amazon's Clone Conditions of Use & Sale.
          Please see our Privacy Notice, our Cookies Notice, and our
          Interest-Based Ads Notice.
        </p>
        <Register>Create your Amazon account</Register>
      </Main>
    </Container>
  );
};

export default Login;
