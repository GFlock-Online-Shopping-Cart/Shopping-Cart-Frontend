import React from "react";
import { getProductsByCategoryId } from "../../services/getProductsByCategoryId";
import "@testing-library/jest-dom";
import { getPublicResource } from "../../services/api/apiCallServise";

jest.mock("../../services/api/apiCallServise", () => ({
  getPublicResource: jest.fn(),
}));

describe("get products by category id", () => {
  const categoryId = 1;

  const mockProductsData = {
    data: {
      data: [
        {
          categoryId: categoryId,
          productId: 1,
          productName: "White T-shirt",
          productImage: "whiteTshirt.jpg",
          price: 1000.0,
          description: "S, M sizes are available.",
        },
        {
          categoryId: categoryId,
          productId: 2,
          productName: "Black T-shirt",
          productImage: "BlackTshirt.jpg",
          price: 1000.0,
          description: "S, M sizes are available.",
        },
      ],
    },
  };

  test("should return the products for given category id", async () => {
    (getPublicResource as jest.Mock).mockResolvedValue(mockProductsData);

    const result = await getProductsByCategoryId(categoryId);
    expect(result).toEqual(mockProductsData.data.data);
  })
});
