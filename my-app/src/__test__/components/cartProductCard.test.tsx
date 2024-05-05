import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { CartProductCard } from "../../components/cartProductCard";
import '@testing-library/jest-dom';

describe("Cart product card component", () => {
    const cartItems = {
        userId: "abcd1234",
        productId: 1,
        quantity: 10, 
        product: {
            id: 1,
            productName: "White T-shirt",
            productImage: "white.jpg",
            description: "L, XL sizes are available.",
            price: 1000.00
        }
    }
    const mockDelete = jest.fn();
    const mockQuantityChange = jest.fn();
    const mockModify = jest.fn();

    test("render the Cart product card component",  () => {

        const { getByText } = render (
            <CartProductCard 
                cartItems={cartItems}
                onDelete={mockDelete}
                onModify={mockModify}
                onQuantityChange={mockQuantityChange}
            />
        );
        expect(getByText('White T-shirt')).toBeInTheDocument();
        expect(getByText('L, XL sizes are available.')).toBeInTheDocument();
        expect(getByText("Rs.1000.00")).toBeInTheDocument();
    });

    test("calls the delete function when trash icon is clicked", () => {
        const { getByTestId } = render (
            <CartProductCard 
                cartItems={cartItems}
                onDelete={mockDelete}
                onModify={mockModify}
                onQuantityChange={mockQuantityChange}
            />
        );
        fireEvent.click(getByTestId('delete-icon'));
        expect(mockDelete).toHaveBeenCalledWith(cartItems.productId)
    });

    test("calls the modify function when pencil icon is clicked", () => {
        const { getByTestId } = render (
            <CartProductCard 
                cartItems={cartItems}
                onDelete={mockDelete}
                onModify={mockModify}
                onQuantityChange={mockQuantityChange}
            />
        );
        fireEvent.click(getByTestId('modify-icon'));
        expect(mockModify).toHaveBeenCalledWith(cartItems.productId, cartItems.quantity);
    });

    test("increase the quantity when clicking the + button", () => {
        const { getByTestId } = render (
            <CartProductCard 
                cartItems={cartItems}
                onDelete={mockDelete}
                onModify={mockModify}
                onQuantityChange={mockQuantityChange}
            />
        );
        const increaseButton = getByTestId('increase-button');
        fireEvent.click(increaseButton);
        expect(mockQuantityChange).toHaveBeenCalledWith(cartItems.quantity + 1);
    });

    test("decrease the quantity when clicking the - button", () => {
        const { getByTestId } = render (
            <CartProductCard 
                cartItems={cartItems}
                onDelete={mockDelete}
                onModify={mockModify}
                onQuantityChange={mockQuantityChange}
            />
        );
        const decreaseButton = getByTestId('decrease-button');
        fireEvent.click(decreaseButton);
        expect(mockQuantityChange).toHaveBeenCalledWith(cartItems.quantity - 1);
    });
});