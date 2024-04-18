import axios from "axios";

export const callExternalApi = async (options: any) => {
    try {
        const {url, method, body, headers} = options.config;
        const response = await axios({
            url,
            method,
            headers,
            data: body
        });
        const { data } = response;
        return {
            data,
            error: null,
        };
    } catch (error: any) {
        if (axios.isAxiosError(error)) {
            const axiosError = error;

            const { response } = axiosError;

            let message = "http request failed";

            if (response && response.statusText) {
                message = response.statusText;
            }

            if (axiosError.message) {
                message = axiosError.message;
            }

            if (response && response.data && response.data.message) {
                message = response.data.message;
            }

            return {
                data: null,
                error: {
                    message,
                },
            };
        }

        return { 
            data: null,
            error: {
                message: error.message,
            }
        }
    }
}