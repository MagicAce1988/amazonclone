import React from "react";
import "./App.css";
import { Header } from "./components";
import Home from "./pages/Home";

function App() {
  return (
    <div className="app">
      <Header />
      <Home />
    </div>
  );
}

export default App;
