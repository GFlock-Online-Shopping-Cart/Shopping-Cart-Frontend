import React from "react";

interface SingleOrderProps {
    orderDetails: SingleOrderType
}

export const SingleOrderCard: React.FC<SingleOrderProps> = ({orderDetails}) => {
    return (
        <>
        <div>
            <div className="flex gap-[22rem] mx-[7rem] px-[1rem] py-[0.5rem] rounded-lg items-center my-[1rem] justify-center bg-[#EEEEEE]">
                <div>
                    <p><span className="font-bold">Order No :</span> {orderDetails.id}</p>
                    <p><span className="font-bold">Placed on :</span> {orderDetails.checkoutDate}</p>
                </div>
                <p><span className="font-bold">Total Price :</span><span className="text-red-500 font-bold text-[1.5rem]"> Rs. {orderDetails.checkoutPrice}.00</span></p>
            </div>
            <div className="grid grid-cols-4 gap-4 mx-[7rem] px-[1rem] py-[0.5rem] rounded-lg items-center my-[1rem] justify-center bg-[#EEEEEE]">
                {orderDetails.checkoutItems.map((item: CheckoutItemType) => {
                    return (
                        <div className="bg-white p-[1rem] rounded-lg">
                            <p><span className="font-bold">Product Id :</span> {item.productId}</p>
                            <p><span className="font-bold">Quantity :</span> {item.quantity}</p>
                            <p><span className="font-bold">Product Price :</span> Rs. {item.price}.00</p>
                        </div>
                    )
                })}
            </div>
        </div>
        </>
    )
}