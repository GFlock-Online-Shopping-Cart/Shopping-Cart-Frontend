import { callExternalApi } from "./externalApiService";

const apiServerUrl = process.env.REACT_APP_API_SERVER_URL;

export const getPublicResource = async (route: string, method: string) => {
    const config = {
        url: `${apiServerUrl}/${route}`,
        method: method,
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

export const getProtectedResource = async (accessToken: string, route: string, method: string, user: {}) => {
    const config = {
        url: `${apiServerUrl}/${route}`,
        method: method,
        headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(user),
    };

    const { data, error } = await callExternalApi({ config });

    return {
        data: data || null,
        error,
    }
}
