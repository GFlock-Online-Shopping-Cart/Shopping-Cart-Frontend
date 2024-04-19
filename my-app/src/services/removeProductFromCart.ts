import { getProtectedResource } from "./api/apiCallServise";

export const removeProductFromCart = async (getAccessTokenSilently: any, user: any, productId: number) => {
    const accessToken = await getAccessTokenSilently();
    console.log("Access Token", accessToken);
    console.log("PRODUCT ID", productId);
    const { data, error } = await getProtectedResource(accessToken, `cart/remove-product/${productId}`, "DELETE", user);
    console.log("SERVER response", data);
    
    
    if (data) {
        console.log("data", data.data);
        return data.data;
    } else if (error) {
        console.log("EROR", error);
        return error;
    } else {
        return null;
    }
    
}