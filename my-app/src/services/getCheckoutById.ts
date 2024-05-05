import { getProtectedResource } from "./api/apiCallServise";

export const getCheckoutById = async (getAccessTokenSilently: any, user: any, checkoutId: number) => {
    const accessToken = await getAccessTokenSilently();
    const { data, error } = await getProtectedResource(accessToken, `checkout/getCheckoutById/${checkoutId}`, "GET", user as any);
    console.log("Access token", accessToken);

    if (data) {
        return data.data;
    } else if (error) {
        return error;
    }
    
}