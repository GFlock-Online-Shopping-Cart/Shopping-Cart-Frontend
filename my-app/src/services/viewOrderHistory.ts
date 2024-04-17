import { getProtectedResource } from "./api/apiCallServise";

export const viewOrderHistory = async (getAccessTokenSilently: any, user: any) => {
    const accessToken = await getAccessTokenSilently();
    const { data, error } = await getProtectedResource(accessToken, "checkout/viewOrderHistory", "GET", user as any);
    console.log("Access Token", accessToken);

    if (data) {
        console.log("data", data.data);
        return data.data;
    } else if (error) {
        return error;
    }
}