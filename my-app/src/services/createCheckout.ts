import { getProtectedResource } from "./api/apiCallServise";

export const createChcekout = async (getAccessTokenSilently: any, idToken: any) => {
    const accessToken = await getAccessTokenSilently();
    
    const requestBody = {
        idToken: idToken
    }

    const { data, error } = await getProtectedResource(accessToken, "checkout/createCheckout", "POST", requestBody);

    
    console.log("Access Token", accessToken); 
    console.log("Id token", requestBody.idToken);
    
    if (data) {
        return data.data;
        
    } else if (error) {
        return { message: error };
    }
}