import React from "react";
import { useNavigate } from "react-router-dom";

interface OrderHistoryItemProps {
    orderItems: OrderType
}

export const OrderHistoryCard: React.FC<OrderHistoryItemProps> = ({orderItems}) => {
    const navigate = useNavigate();
    const handleDivClick = async (checkoutId: number) => {
        navigate(`/single-checkout/${checkoutId}`)
    }
    return (
        <>
        <div onClick={() => handleDivClick(orderItems.c_id)} className="flex gap-5 text-[1.1rem] text-center justify-center px-[3rem] py-[0.4rem] my-[0.5rem] mx-[12rem] bg-[#f4f7f8] cursor-pointer">
            <p className="w-[15rem]">{orderItems.c_id}</p>
            <p className="w-[25rem]">{orderItems.c_checkoutDate}</p>
            <p className="w-[15rem]">Rs.{orderItems.c_checkoutPrice}.00</p>
        </div>
        </>
    )
}