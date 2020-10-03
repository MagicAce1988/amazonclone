import React, { useState } from "react";
import { Container, Logo, Main, Register, SignIn } from "./Login.styled";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../firebase";

const Login = ({ ...props }) => {
  const history = useHistory();
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    //some fancy firebase login stuff
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => auth && history.push("/"))
      .catch((err) => alert(err.message));
    //some fancy firebase register stuff
  };

  return (
    <Container {...props}>
      <Link to="/">
        <Logo src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" />
      </Link>
      <Main>
        <h1>Sign-In</h1>
        <form>
          <h5>Email</h5>
          <input
            type="text"
            value={email}
            autocomplete="new-password"
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            autocomplete="new-password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <SignIn type="submit" onClick={signIn}>
            Sign In
          </SignIn>
        </form>
        <p>
          By signing-in you agree to Amazon's Clone Conditions of Use & Sale.
          Please see our Privacy Notice, our Cookies Notice, and our
          Interest-Based Ads Notice.
        </p>
        <Register onClick={register}>Create your Amazon account</Register>
      </Main>
    </Container>
  );
};

export default Login;
