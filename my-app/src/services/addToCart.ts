import { getProtectedResource } from "./api/apiCallServise";

export const addToCart = async (getAccessTokenSilently: any, user: any) => {
    const accessToken = await getAccessTokenSilently();
    const { data, error } = await getProtectedResource(accessToken, "cart/add-to-cart", "POST", user as any);
    console.log("Access token", accessToken);

    if (data) {
        console.log("data: ", data.data);
        return data.data;
    } else if (error) {
        return error;
    }
}