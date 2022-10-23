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
import SearchResultsPage from "./components/SearchResultsPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        {/* An npm component for scrolling to the top of the page. */}
        <ScrollToTop />
        <Routes>
          {/* Components nested in this parent route will be 
          displayed by the Layout component. Anything in the
          Layout component will also be rendered in all other pages,
          like the header or footer. */}
          <Route path="/" element={<Layout />}>
            {/* If there's nothing else inside the url, then
            this route index element will just show the App component
            within the Layout component. For example, just display the
            home page if the url is just wwww.blah.com/ */}
            <Route index element={<App />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="signin" element={<SignIn />} />
            <Route path="cart" element={<CartPage />} />
            {/* path="shoes/:shoeId" means the url path is shoes/specific shoe page */}
            <Route path="shoes/:shoeId" element={<ShoePage />} />
            <Route path="men" element={<MensCatalog />} />
            <Route path="women" element={<WomensCatalog />} />
            <Route path="saved" element={<SavedShoePage />} />
            <Route path="search" element={<SearchResultsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
