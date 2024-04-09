import React, { useState } from "react"
import Select from 'react-select';

interface ItemProps {
    categoryItems: CategoryType[];
}

export const Dropdown: React.FC<ItemProps> = ({categoryItems}) => {
    const options = categoryItems.map(item => ({
        value: item.id, 
        label: item.categoryName
    }));

    const [selectedOption, setSelectedOption] = useState(null);
    const handleChange = (selected: any) => {
        setSelectedOption(selected);
    }

    return (
        <div className="justify-center p-[1rem] items-center gap-[1rem] cursor-pointer">
            <Select options={options} value={selectedOption} onChange={handleChange} className="bg-[#EEEEEE] w-[15rem] cursor-pointer"/>
            {selectedOption && (
                <p className="cursor-pointer">You selected: {selectedOption}</p>
            )}
        </div>

    )
}