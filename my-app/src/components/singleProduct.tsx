import React from "react";
import { ButtonComponent } from "./button";

interface ItemProps {
    productItem: ProductType;
}

export const SingleProduct: React.FC<ItemProps> = (productItem) => {
    return (
        <>
        <div className="flex gap-[4rem] p-[2rem] items-center justify-center screen-height">
            <div>
                <img className="items-center justify-center flex w-[20rem] h-[20rem]" src={productItem.productItem.productImage} alt="product-image" />
            </div>

            <div>
                <h1 className="text-[3rem] font-bold">{productItem.productItem.productName}</h1>
                <p className="text-[1.5rem]">{productItem.productItem.description}</p>
                <p className="text-[3rem] text-red-600 font-bold">Rs.{productItem.productItem.price}.00</p>
                <ButtonComponent
                buttonName="Add to Cart"
                />
            </div>
        </div>
        </>
    )
}