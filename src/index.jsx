import React from "react";
import "./styles/color.css";
import "./styles/font.css";
import ReactDOM from "react-dom";
import App from "./App";
import Footer from "./components/footer"
import "./styles/index.css";
import "./styles/tailwind.css";
import Nav from "./components/Navbar";
ReactDOM.render(
  <React.StrictMode>
    <Nav />
    <App />
    <Footer />
  </React.StrictMode>,
  document.getElementById("root"),
);
