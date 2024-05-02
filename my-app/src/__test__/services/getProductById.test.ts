import React from "react";
import { getProductById } from "../../services/getProductById";
import "@testing-library/jest-dom";
import { getPublicResource } from "../../services/api/apiCallServise";

jest.mock("../../services/api/apiCallServise", () => ({
  getPublicResource: jest.fn(),
}));

describe("get product by id function", () => {
  const productId = 1;
  const mockProductData = {
    data: {
      data: [
        {
          id: productId,
          productName: "White T-shirt",
          productImage: "whiteTshirt.jpg",
          price: 1000.0,
          description: "S, M sizes are available.",
        },
      ],
    },
  };

  test("should return the product details for given product id", async () => {
    (getPublicResource as jest.Mock).mockResolvedValue(mockProductData);

    const result = await getProductById(productId);
    expect(result).toEqual(mockProductData.data.data);
  });

  test("should return an error when fetching the product details for given product id", async () => {
    const error = new Error("Network error");
    (getPublicResource as jest.Mock).mockRejectedValue(error);

    const result = await getProductById(productId);
    expect(result).toBeNull();
  })
});
