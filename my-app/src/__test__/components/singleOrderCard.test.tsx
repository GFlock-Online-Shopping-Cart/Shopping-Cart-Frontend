import React from "react";
import { render } from "@testing-library/react";
import { SingleOrderCard } from "../../components/singleOrderCard";
import "@testing-library/jest-dom";

describe("Single order card component", () => {
  const checkoutItems = {
    productId: 1,
    checkoutId: 12,
    price: 1000.0,
    quantity: 2,
  };
  const orderDetails = {
    id: 11,
    checkoutDate: "2024/05/01",
    checkoutPrice: 1000.0,
    userId: "abcd1234",
    checkoutItems: Array(checkoutItems)
  };

  test("render the single order card component", () => {
    const { getByText } = render(
        <SingleOrderCard orderDetails={orderDetails}/>
    );

    expect(getByText(1)).toBeInTheDocument();
    expect(getByText(2)).toBeInTheDocument();
  })
});
