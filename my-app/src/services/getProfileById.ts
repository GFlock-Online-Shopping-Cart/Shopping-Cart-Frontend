import { getProtectedResource } from "./api/apiCallServise";

export const getProfileById = async (getAccessTokenSilently: any, user: any, userId: string) => {
    const accessToken = await getAccessTokenSilently();
    const { data, error } = await getProtectedResource(accessToken, `user/get-profile/${userId}`, "GET", user);

    if(data) {
        return data.data;
    } else if (error) {
        return error;
    }
}