import { getProtectedResource } from "./api/apiCallServise";

export const viewCart = async (getAccessTokenSilently: any, user: any) => {
    const accessToken = await getAccessTokenSilently(); //fetch a new access token from the Auth0
    const { data, error } = await getProtectedResource(accessToken, "cart/view-cart", "GET", user as any);
    console.log("Access Token", accessToken);    

    if (data) {
      console.log("data :", data.data);
      return data.data;
    }else if (error) {
      return error;
    }
};
