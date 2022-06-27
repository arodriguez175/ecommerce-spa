import React from "react";
import ReactDOM from "react-dom/client";
import "./output.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import SignIn from "./components/header/signin/SignIn";
import Cart from "./components/header/cart/Cart";
import Men from "./components/header/men/Men";
import Women from "./components/header/women/Women";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="cart" element={<Cart />} />
        <Route path="men" element={<Men />} />
        <Route path="women" element={<Women />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
