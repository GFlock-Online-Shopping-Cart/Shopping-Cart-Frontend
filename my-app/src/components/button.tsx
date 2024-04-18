import React from "react";

interface ButtonProps {
    buttonName: string
    onClick?: () => Promise<void>;
}

export const ButtonComponent: React.FC<ButtonProps> =({buttonName, onClick}) => {
    return (
        <button onClick={onClick} className="px-[1rem] py-[0.5rem] w-[15rem] my-[1.5rem] rounded-md bg-black font-semibold text-white">
            {buttonName}
        </button>
    )
}