import React from "react";
import ReactDOM from "react-dom/client";
import "./output.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import SignIn from "./components/SignIn";
import Cart from "./components/Cart";
import Men from "./components/Men";
import Women from "./components/Women";
import Layout from "./components/Layout";
import ShoePage from "./components/ShoePage";
import store from "./store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<App />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="signin" element={<SignIn />} />
            <Route path="cart" element={<Cart />} />
            <Route path="shoes/:shoeId" element={<ShoePage />} />
            <Route path="men" element={<Men />} />
            <Route path="women" element={<Women />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
