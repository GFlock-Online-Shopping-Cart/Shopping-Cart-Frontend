import React, { useState } from "react";

interface QuantityProps {
    quantity: number
    minValue?: number
    maxValue?: number
    onQuantityChange?: (quantity: number) => void;
}

export const QuantityAdjuster: React.FC<QuantityProps> = ({ quantity, minValue = 1, maxValue = 100, onQuantityChange }) => {
    const [count, setCount] = useState(quantity);

    const handleIncrementCounter = () => {
        if (count < maxValue) {
            quantity = count + 1;
            setCount(quantity);
            if (onQuantityChange) {
                onQuantityChange(quantity);
            }
            
        }
    };

    const handleDecrementCounter = () => {
        if (count > minValue) {
            quantity = count - 1;
            setCount(quantity);
            if (onQuantityChange) {
                onQuantityChange(quantity);
            }

        }
    };

    return (
        <div className="flex gap-3 w-[7rem]">
            <button className="bg-[#EEEEEE] w-[2rem] h-[2rem] rounded-md" onClick={handleDecrementCounter}>
                <span className="font-bold text-[1.2rem]">-</span>
            </button>
            
            <p className="flex items-center justify-center font-semibold w-[1rem]">{count}</p>

            <button className="bg-[#EEEEEE] w-[2rem] h-[2rem] rounded-md" onClick={handleIncrementCounter}>
                <span className="font-bold text-[1.2rem]">+</span>
            </button>
        </div>
    )
}