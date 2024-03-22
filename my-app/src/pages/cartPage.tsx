import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect, useState } from "react";
import { getProtectedResource } from "../services/authenticationServise";
import { useNavigate } from "react-router-dom";

export const CartPage = () => {
    const [message, setMessage] = useState("");

    const { getAccessTokenSilently } = useAuth0();

    useEffect(() => {
        let isMounted = true;

        const addToCart = async () => {
            const accessToken = await getAccessTokenSilently();  //fetch a new access token from the Auth0
            const { data, error } = await getProtectedResource(accessToken);
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