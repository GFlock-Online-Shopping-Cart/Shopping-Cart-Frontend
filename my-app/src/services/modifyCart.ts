import { getProtectedResource } from "./api/apiCallServise";

export const modifyCart = async (getAccessTokenSilently: any, productId: number, quantity: number) => {
    const accessToken = await getAccessTokenSilently();
    const { data, error } = await getProtectedResource(accessToken, "cart/modify-cart", "PUT", {productId, quantity});
    console.log("Access token", accessToken);

    if (data) {
        return data.data;
    } else if (error) {
        return error;
    }
    
}