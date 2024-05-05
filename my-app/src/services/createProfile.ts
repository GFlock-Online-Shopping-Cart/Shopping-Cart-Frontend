import { getProtectedResource } from "./api/apiCallServise";

interface CreateProfileRequest {
    firstName: string
    lastName: string
    mobileNumber: string
    streetAddress: string
    city: string
    province: string
}

export const createProfile = async (getAccessTokenSilently: any, newProfile: CreateProfileRequest) => {
    const accessToken = await getAccessTokenSilently();
    const { data, error } = await getProtectedResource(accessToken, "user/create-profile", "POST", newProfile);
    console.log("Access Token", accessToken);    
    
    if (data) {
        return data.data;
    } else if (error) {
        return error;
    }
}
