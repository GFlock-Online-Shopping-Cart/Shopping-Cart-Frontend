import { render } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom";
import { OrderHistoryCard } from "../../components/orderHistoryCard";
import { MemoryRouter } from "react-router-dom";

describe("Order history card component", () => {
  const orderItems = {
    c_id: 1,
    c_checkoutDate: "2024/05/01",
    c_checkoutPrice: 1000.0,
    ci_productId: 12,
    ci_price: 500.0,
    ci_quantity: 2,
  };

  test("render the order history card component", () => {
    const { getByText } = render(
      <MemoryRouter>
        <OrderHistoryCard orderItems={orderItems} />
      </MemoryRouter>
    );

    expect(getByText(1)).toBeInTheDocument();
    expect(getByText("2024/05/01")).toBeInTheDocument();
    expect(getByText("Rs.1000.00")).toBeInTheDocument();
  });
});
