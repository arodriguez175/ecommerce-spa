import React from "react";
import ReactDOM from "react-dom/client";
import "./output.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import SignIn from "./components/SignIn";
import CartPage from "./components/CartPage";
import MensCatalog from "./components/MensCatalog";
import WomensCatalog from "./components/WomensCatalog";
import Layout from "./components/Layout";
import ShoePage from "./components/ShoePage";
import store from "./store";
import { Provider } from "react-redux";
import SavedShoePage from "./components/SavedShoePage";
import ScrollToTop from "./components/ScrollToTop";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<App />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="signin" element={<SignIn />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="shoes/:shoeId" element={<ShoePage />} />
            <Route path="men" element={<MensCatalog />} />
            <Route path="women" element={<WomensCatalog />} />
            <Route path="saved" element={<SavedShoePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
