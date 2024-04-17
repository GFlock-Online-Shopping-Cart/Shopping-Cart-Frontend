import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import { NavBarButtons } from "../components/navBar";
import { SingleOrderCard } from "../components/singleOrderCard";
import { getCheckoutById } from "../services/getCheckoutById";
import { useParams } from "react-router-dom";

interface RouteParams {
    [key: string]: string | undefined;
    checkoutId: string;
}

export const SingleOrderPage = () => {
    const { checkoutId } = useParams<RouteParams>();

    const [singleOrderData, setSingleOrderData] =useState<SingleOrderType | undefined>();
    const [message, setMessage] = useState("");

    const { getAccessTokenSilently, user } = useAuth0();

    useEffect(() => {
        let isMounted = true;

        getCheckoutById(getAccessTokenSilently, user, Number(checkoutId)).then((result: any) => {
            if (!isMounted) {
                return;
            }

            setSingleOrderData(result);
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
            {singleOrderData ? (
               <SingleOrderCard 
                key={checkoutId}
                orderDetails={singleOrderData}
                /> 
            ) : (
                <div>Loading...</div>
            )}

        </div>


        {/* <div className="">
            {(singleOrderData || []).map((singleOrderData: SingleOrderType) => (
                <SingleOrderCard 
                    key={singleOrderData.id}
                    orderDetails={singleOrderData}
                />
            ))}
        </div> */}
        </>
    )
}