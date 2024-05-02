import React from "react";
import { getAllCategories } from "../../services/getAllCategories";
import "@testing-library/jest-dom";
import { getPublicResource } from "../../services/api/apiCallServise";

jest.mock("../../services/api/apiCallServise", () => ({
  getPublicResource: jest.fn(),
}));

describe("get all categories function", () => {
  const mockCategoryData = {
    data: {
      data: [
        {
          id: 1,
          categoryName: "T-shirt",
        },
        {
            id: 2, 
            categoryName: "Shirt"
        }
      ],
    },
  };

  test("should return all categories", async () => {
    (getPublicResource as jest.Mock).mockResolvedValue(mockCategoryData);

    const result = await getAllCategories();
    expect(result).toEqual(mockCategoryData.data.data);
  })
});
