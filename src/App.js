import React, { useEffect } from "react";
import "./App.css";
import { Header } from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Checkout, Login, Payment } from "./pages";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { SET_USER } from "./redux/actionTypes";

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
          <Route path="/payment">
            <Header />
            <Payment />
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
