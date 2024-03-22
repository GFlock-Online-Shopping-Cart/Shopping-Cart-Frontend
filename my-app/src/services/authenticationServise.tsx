import { callExternalApi } from "./externalApiService";

const apiServerUrl = process.env.REACT_APP_API_SERVER_URL;

export const getPublicResource = async () => {
    const config = {
        url: `${apiServerUrl}/api/product/products`,
        method: "GET",
        headers: {
            "content-type": "application/json",
        },
    };

    const { data, error } = await callExternalApi({ config });
    return {
        data: data || null,
        error,
    };
};

export const getProtectedResource = async (accessToken: string) => {
    const config = {
        url: `${apiServerUrl}/api/cart/add-to-cart`,
        method: "POST",
        headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${accessToken}`,
        },
    };

    const { data, error } = await callExternalApi({ config });

    return {
        data: data || null,
        error,
    }
}