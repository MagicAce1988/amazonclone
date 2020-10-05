import React, { useEffect } from "react";
import "./App.css";
import { Header } from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Checkout, Login, Payment, Orders } from "./pages";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { SET_USER } from "./redux/actionTypes";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51HYfNFBOE98GjPuiQY1zCPWsVehqKh9sY4iNwVy1NJMAIJc5kQtcLJi16S9bIdvvKFNhQ5gNZPVwG9eolCh9Joc600J7hJybnV"
);

function App() {
  const [, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({ type: SET_USER, payload: authUser });
      } else {
        dispatch({ type: SET_USER, payload: null });
      }
    });
  }, []);
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
