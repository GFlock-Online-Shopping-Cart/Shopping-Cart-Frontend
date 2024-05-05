import { getProtectedResource } from "./api/apiCallServise";

interface AddToCartRequest {
    productId: number;
    quantity: number;
}

export const addToCart = async (getAccessTokenSilently: any, newCartItem: AddToCartRequest) => {
    const accessToken = await getAccessTokenSilently();    
    const { data, error } = await getProtectedResource(accessToken, "cart/add-to-cart", "POST", newCartItem);
    console.log("Access token", accessToken);    

    if (data) {
        return data.data;
    } else if (error) {
        return error;
    }
}