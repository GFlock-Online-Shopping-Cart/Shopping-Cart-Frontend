import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import { NavBarButtons } from "../components/navBar";
import { viewOrderHistory } from "../services/viewOrderHistory";
import { OrderHistoryCard } from "../components/orderHistoryCard";

export const OrderHistoryPage = () => {
    const [message, setMessage] = useState("");
    const [orderHistoryData, setOrderHistorydata] = useState<Array<OrderType>>([]);

    const { getAccessTokenSilently, user } = useAuth0();

    useEffect(() => {
        let isMounted = true;
        viewOrderHistory(getAccessTokenSilently, user).then((result: any) => {
            if (Array.isArray(result)) {
                const groupedOrders = result.reduce((acc, curr) => {
                    if (!acc[curr.c_id]) {
                        acc[curr.c_id] = {
                            c_id: curr.c_id,
                            c_checkoutDate: curr.c_checkoutDate,
                            c_checkoutPrice: curr.c_checkoutPrice,
                            products: []
                        };
                    }
                    acc[curr.c_id].products.push({
                        ci_productId: curr.ci_productId,
                        ci_price: curr.ci_price,
                        ci_quantity: curr.ci_quantity
                    });
                    return acc;
                }, {});
                setOrderHistorydata(Object.values(groupedOrders));
            } else {
                setMessage(JSON.stringify(result, null, 2));
            }
        });

        return () => {
            isMounted = false;
        };
    }, [getAccessTokenSilently])

    return (
        <>
        <div className="bg-black">
            <NavBarButtons />
        </div>
        <div>
            <div className="flex gap-5 text-[1.1rem] text-center justify-center font-bold bg-[#EEEEEE] px-[3rem] py-[0.5rem] my-[1rem] mx-[12rem]">
                <p className="w-[15rem]">Order Number</p>
                <p className="w-[25rem]">Placed on</p>
                <p className="w-[15rem]">Total Price</p>
            </div>
            {(orderHistoryData || []).map((orderHistoryData: OrderType) => (
                <OrderHistoryCard 
                    key={orderHistoryData.c_id}
                    orderItems={orderHistoryData}
                />
            ))}
        </div>
        </>
    )
}