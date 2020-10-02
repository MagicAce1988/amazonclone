import React from "react";
import "./App.css";
import { Header } from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Checkout, Login } from "./pages";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
