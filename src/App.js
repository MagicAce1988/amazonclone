import React from "react";
import "./App.css";
import { Header } from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home, Checkout, Login } from "./pages";

function App() {
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
