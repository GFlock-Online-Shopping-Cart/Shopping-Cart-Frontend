import React from "react";
import { useNavigate } from "react-router-dom";

interface ItemProps {
    productItems: ProductType;
}

export const ProductCard: React.FC<ItemProps> = (productItems) => {
    const navigate = useNavigate();
    const handleDivClick = async (productId: number) => {
        navigate(`/single-product/${productId}`)
    }

    return (
        <>
        <div onClick={() => handleDivClick(productItems.productItems.id)} className="w-[15rem] h-[23rem] m-[1rem] rounded-lg shadow-lg shadow-black md:shadow-xl md:shadow-black-500 cursor-pointer dark:md:hover:bg-[#EEEEEE] transition-transform duration-100 ease-in-out transform hover:scale-105" data-testid="product-card">
            <img src={productItems.productItems.productImage} alt="" className="w-[15rem] h-[15rem] flex items-center"/>
            <div className="flex flex-col items-center px-[1rem]">
                <p className="text-[1.3rem] font-bold">{productItems.productItems.productName}</p>
                <p className="text-center px-[0.5rem]">{productItems.productItems.description}</p>
                <p className="text-[1.5rem] font-bold text-red-600">Rs.{productItems.productItems.price}.00</p>
            </div>
        </div>
        </>
    )
}