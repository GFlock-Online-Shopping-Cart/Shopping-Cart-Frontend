import React from "react";
import { getAllProducts } from "../../services/getAllProductsService";
import "@testing-library/jest-dom";
import { getPublicResource } from "../../services/api/apiCallServise";

jest.mock("../../services/api/apiCallServise", () => ({
  getPublicResource: jest.fn(),
}));

describe("get all prodcuts function", () => {
  const mockProductData = {
    data: {
      data: [
        {
          id: 1,
          productName: "White T-shirt",
          productImage: "whiteTshirt.jpg",
          price: 1000.00,
          description: "S, M sizes are available.",
        },
        {
          id: 2,
          productName: "Black T-shirt",
          productImage: "blackTshirt.jpg",
          price: 2000.0,
          description: "S, M, L sizes are available.",
        },
      ],
    },
  };

  test("should return all products", async () => {
    (getPublicResource as jest.Mock).mockResolvedValue(mockProductData);

    const result = await getAllProducts();
    expect(result).toEqual(mockProductData.data.data);
  });
});
