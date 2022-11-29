import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

describe("App component", () => {
  test("renders MensCatalog component", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByText("Men's Shoes")).toBeInTheDocument;
  });

  test("renders WomensCatalog component", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.getByText("Women's Shoes")).toBeInTheDocument;
  });
});
