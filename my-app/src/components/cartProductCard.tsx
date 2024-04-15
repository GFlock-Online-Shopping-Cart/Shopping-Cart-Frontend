import React from "react";
import { FaTrash } from "react-icons/fa6";
import { QuantityAdjuster } from "./quantityAdjuster";

interface CartItemProps {
    cartItems: CartType
}

export const CartProductCard: React.FC<CartItemProps> = ({cartItems}) => {
    return (
        <>
        <div className="flex gap-6 rounded-lg shadow-lg items-center shadow-black md:shadow-xl md:shadow-black-500 m-[2rem]">
            <div>
                <img src={cartItems.product.productImage} alt="cart-item" className="w-[10rem] h-[10rem] "/>
            </div>
            <div>
                <p className="text-[1.3rem] font-bold">{cartItems.product.productName}</p>
                <p>{cartItems.product.description}</p>
                <p className="text-[1.3rem] font-bold text-red-500">Rs.{cartItems.product.price}.00</p>
                <div className="flex gap-12 items-center cursor-pointer my-[0.5rem]">
                    <QuantityAdjuster 
                        quantity={cartItems.quantity}
                    />
                    {/* <p>{cartItems.quantity}</p> */}
                    <FaTrash/>
                </div>
            </div>
        </div>
        </>
    )
}