import React from "react";
import { render } from "@testing-library/react";
import { CategoryProductsCard } from "../../components/categoryProductsCard";
import "@testing-library/jest-dom"
import { MemoryRouter } from "react-router-dom";

describe("Category products card component", () => {
    const categoryItems = {
        category_id: 1,
        product_id: 12,
        product_description: "S, M, L sizes are available.",
        product_price: 1000.00,
        product_productImage: "tshirt.jpg",
        product_productName:  "White T-shirt"
    }

    test("render the category products card component", () => {
        const { getByText } = render(
            <MemoryRouter>
                <CategoryProductsCard productCategoryItems={categoryItems}/>
            </MemoryRouter>
        );

        expect(getByText("White T-shirt")).toBeInTheDocument();
        expect(getByText("S, M, L sizes are available.")).toBeInTheDocument();
        expect(getByText("Rs.1000.00")).toBeInTheDocument();
    })
})