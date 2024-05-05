import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { ButtonComponent } from "../../components/button";

describe("Button component", () => {
    test("render the Button component", () => {
        const buttonProps = {
            buttonName: "Done",
        };
        const mockOnClick = jest.fn();
    
        const { getByText } = render (
            <ButtonComponent 
                buttonName={buttonProps.buttonName}
                onClick={mockOnClick}
            />
        );

        fireEvent.click(getByText("Done"));
        expect(mockOnClick).toHaveBeenCalled();
    })

})