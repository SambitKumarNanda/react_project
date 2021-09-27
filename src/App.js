import React from "react";
import { Route } from "react-router";
import ContactPage from "./Components/ContactPage";
import HomePage from "./Components/HomePage";

function App() {
  return (
  <>
    <Route  path="/" exact component={HomePage} />
    <Route  path="/contact" exact component={ContactPage} />
  </>
  );
}

export default App;