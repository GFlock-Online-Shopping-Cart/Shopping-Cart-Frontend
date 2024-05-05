import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import { getProtectedResource } from "../services/apiCallServise";

export const CheckoutPage = () => {
    const [message, setMessage] = useState("");

    const { getAccessTokenSilently, user, getIdTokenClaims } = useAuth0();

    useEffect(() => {
        let isMounted = true;

        const createCheckout = async () => {
            const accessToken = await getAccessTokenSilently();
            const idToken = await getIdTokenClaims()
            const { data, error } = await getProtectedResource(accessToken, 'chcekout/create-checkout', 'POST', user as any);
            const options = {
                
            }
            console.log("Access Token", accessToken);
            console.log("Id token", idToken?.__raw);
            

            if(!isMounted) {
                return;
            }

            if (data) {
                setMessage(JSON.stringify(data, null, 2));
            }

            if (error) {
                setMessage(JSON.stringify(error, null, 2));
            }
        };
        
        createCheckout();

        return () => {
            isMounted = false;
        };
    }, [getAccessTokenSilently]);

    return (
        <h1>Checkout page</h1>
    )
}