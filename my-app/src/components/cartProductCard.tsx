import React from "react";

interface CartItemProps {
    cartItems: CartType
}

export const CartProductCard: React.FC<CartItemProps> = ({cartItems}) => {
    return (
        <>
        <div className="flex gap-6 rounded-lg shadow-lg shadow-black md:shadow-xl md:shadow-black-500 m-[2rem]">
            <div>
                <img src={cartItems.product.productImage} alt="cart-item" className="w-[10rem] h-[10rem] "/>
            </div>
            <div>
                <p className="text-[1.3rem] font-bold">{cartItems.product.productName}</p>
                <p>{cartItems.product.description}</p>
                <p className="text-[1.3rem] font-bold text-red-500">Rs.{cartItems.product.price}.00</p>
                <p>{cartItems.quantity}</p>
            </div>
        </div>
        </>
    )
}