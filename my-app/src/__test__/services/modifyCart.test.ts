import { modifyCart } from "../../services/modifyCart";
import { getProtectedResource } from "../../services/api/apiCallServise";

const getAccessTokenSilently = jest.fn();
jest.mock('../../services/api/apiCallServise', () => ({
  getProtectedResource: jest.fn(),
}));

describe('modify cart function', () => {
    const mockAccessToken = "abcd1234";
    getAccessTokenSilently.mockResolvedValue(mockAccessToken);

    const productId = 1;
    const quantity = 4;

    test('modify the cart when changing the quantity for given product id', async() => {
        const response = { data: { data: 'Success', error: 'An error occurred' } };
        (getProtectedResource as jest.Mock).mockResolvedValue(response);

        const result = await modifyCart(getAccessTokenSilently, productId, quantity);
        expect(result).toEqual('Success');
    })
})