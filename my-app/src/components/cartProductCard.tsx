import React, { useState } from "react";
import { FaTrash } from "react-icons/fa6";
import { FaPen } from "react-icons/fa6";
import { QuantityAdjuster } from "./quantityAdjuster";

interface CartItemProps {
    cartItems: CartType
    onDelete: (productId: number) => void
    onQuantityChange: (quantity: number) => void;
    onModify: (productId: number, quantity: number) => void
}

export const CartProductCard: React.FC<CartItemProps> = ({cartItems, onDelete, onQuantityChange, onModify}) => {
    const [quantity, setQuantity] = useState(cartItems.quantity);

    const handleDelete = async () => {
        onDelete(cartItems.productId);
    }

    const handleQuantityChange = (quantity: number) => {
        setQuantity(quantity);
        onQuantityChange(quantity);
    };

    const handleModify = async () => {
        onModify(cartItems.productId, quantity);
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
                <div className="flex gap-12 items-center cursor-pointer my-[0.5rem]" data-testid="quantity-change-icon">
                    <QuantityAdjuster 
                        quantity={cartItems.quantity}
                        onQuantityChange={handleQuantityChange}
                    />
                    <div onClick={handleModify} data-testid="modify-icon">
                        <FaPen/>
                    </div>
                    <div onClick={handleDelete} data-testid="delete-icon">
                        <FaTrash />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}