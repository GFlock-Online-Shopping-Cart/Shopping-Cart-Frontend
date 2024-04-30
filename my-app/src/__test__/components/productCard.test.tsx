import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { ProductCard } from "../../components/productCard";
import "@testing-library/jest-dom";
import { MemoryRouter, Route } from "react-router-dom";

describe("Product card component", () => {
  const productItems = {
    id: 1,
    productName: "White T-shirt",
    productImage: "whiteTshirt.jpg",
    price: 1000.0,
    description: "S, M sizes are available.",
  };

  // const navigateMock = jest.fn();
  // jest.mock("react-router-dom", () => ({
  //   ...jest.requireActual("react-router-dom"),
  //   useNavigate: () => navigateMock,
  // }));

  test("render the Product card component", () => {
    const { getByText } = render(
      <MemoryRouter>
        <ProductCard productItems={productItems} />
      </MemoryRouter>
    );

    expect(getByText("White T-shirt")).toBeInTheDocument();
    expect(getByText("Rs.1000.00")).toBeInTheDocument();
  });

//   test("calls the navigate function when clicking a card", () => {
//     const { getByTestId } = render(
//       <MemoryRouter>
//         <ProductCard productItems={productItems} />
//       </MemoryRouter>
//     );
//     const productCard = getByTestId("product-card");
//     fireEvent.click(productCard);
//     expect(navigateMock).toHaveBeenCalledWith(`/single-product/${productCard}`);
//   });
});
