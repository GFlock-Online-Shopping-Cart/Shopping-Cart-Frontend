import { createChcekout } from "../../services/createCheckout";
import { getProtectedResource } from "../../services/api/apiCallServise";
import { error } from "console";

const getAccessTokenSilently = jest.fn();
jest.mock('../../services/api/apiCallServise', () => ({
  getProtectedResource: jest.fn(),
}));



describe('create checkout function', () => {
    const mockAccessToken = "abcd1234";
    getAccessTokenSilently.mockResolvedValue(mockAccessToken);

    const mockRequestBody = {
        mockIdToken: "q1w2e3r4"
    }

    
    test('create checkout makes POST request return data on success', async () => {
        const response = { data: { data: 'Success', error: 'An error occurred.' } };
        (getProtectedResource as jest.Mock).mockResolvedValue(response);
        const result = await createChcekout(getAccessTokenSilently, mockRequestBody.mockIdToken);

        expect(result).toEqual('Success');
    });

    test('handle error while creating the checkout', async () => {
        const mockError = 'An error occurred';
        (getProtectedResource as jest.Mock).mockRejectedValue(new Error(mockError));
    
        try {
            await createChcekout(getAccessTokenSilently, mockRequestBody.mockIdToken);
        } catch (error: any) {
            expect(error.message).toEqual(mockError);
        }
    })
})
