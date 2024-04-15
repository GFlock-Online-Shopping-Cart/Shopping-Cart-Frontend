import React, { useState } from "react";

interface QuantityProps {
    quantity: number
    minValue?: number
    maxValue?: number
}

export const QuantityAdjuster: React.FC<QuantityProps> = ({ minValue = 0, maxValue = 100 }, quantity) => {
    const [count, setCount] = useState(minValue);

    const handleIncrementCounter = () => {
        if (count < maxValue) {
            setCount((prevState) => prevState + 1);
        }
    };

    const handleDecrementCounter = () => {
        if (count > minValue) {
            setCount((prevState) => prevState - 1);
        }
    };

    return (
        <div className="flex gap-3 w-[7rem]">
            <button className="bg-[#EEEEEE] w-[2rem] h-[2rem] rounded-md" onClick={handleIncrementCounter}>
                <span className="font-bold text-[1.2rem]">+</span>
            </button>

            <p className="flex items-center justify-center font-semibold w-[1rem]">{count}</p>

            <button className="bg-[#EEEEEE] w-[2rem] h-[2rem] rounded-md" onClick={handleDecrementCounter}>
                <span className="font-bold text-[1.2rem]">-</span>
            </button>
        </div>
    )
}