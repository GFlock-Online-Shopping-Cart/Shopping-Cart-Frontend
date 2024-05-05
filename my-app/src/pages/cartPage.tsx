import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import { getProtectedResource } from "../services/apiCallServise";

export const CartPage = () => {
    const [message, setMessage] = useState("");

    const { getAccessTokenSilently, user } = useAuth0();

    useEffect(() => {
        let isMounted = true;

        const addToCart = async () => {
            const accessToken = await getAccessTokenSilently();  //fetch a new access token from the Auth0
            const { data, error } = await getProtectedResource(accessToken, 'cart/add-to-cart', 'POST', user as any);
            console.log("Access Token", accessToken);
         
            if (!isMounted) {
                return;
            }

            if (data) {
                setMessage(JSON.stringify(data, null, 2));
            }

            if (error) {
                setMessage(JSON.stringify(error, null, 2));
            }
        };

        addToCart();

        return () => {
            isMounted = false;
        };
    }, [getAccessTokenSilently]);

    return (
        <>
        <h1>Cart</h1>
        </>
    )
}