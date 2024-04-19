import React, { useState } from "react";
import { FaTrash } from "react-icons/fa6";
import { QuantityAdjuster } from "./quantityAdjuster";
import { removeProductFromCart } from "../services/removeProductFromCart";
import { viewCart } from "../services/viewCart";
import { useAuth0 } from "@auth0/auth0-react";

interface CartItemProps {
    cartItems: CartType
    onDelete: (productId: number) => void
}

export const CartProductCard: React.FC<CartItemProps> = ({cartItems, onDelete}) => {
    console.log("QUANTITY",cartItems.quantity);

    const handleDelete = async () => {
        onDelete(cartItems.productId);
    }
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
                    <div onClick={handleDelete}>
                        <FaTrash/>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}