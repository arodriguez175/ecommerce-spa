import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../store";
import CartPage from "./CartPage";

describe("CartPage component", () => {
  test("renders the cart page", () => {
    render(
      <Provider store={store}>
        <CartPage />
      </Provider>
    );

    expect(screen.getByText(/bag/i)).toBeInTheDocument;
  });
});
