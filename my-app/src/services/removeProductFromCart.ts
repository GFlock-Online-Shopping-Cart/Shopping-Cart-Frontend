import { getProtectedResource } from "./api/apiCallServise";

export const removeProductFromCart = async (getAccessTokenSilently: any, user: any, productId: number) => {
    const accessToken = await getAccessTokenSilently();
    console.log("Access Token", accessToken);
    const { data, error } = await getProtectedResource(accessToken, `cart/remove-product/${productId}`, "DELETE", user);
    
    
    if (data) {
        return data.data;
    } else if (error) {
        return error;
    } else {
        return null;
    }
    
}