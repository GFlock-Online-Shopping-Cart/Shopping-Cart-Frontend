import { removeProductFromCart } from "../../services/removeProductFromCart";
import { getProtectedResource } from "../../services/api/apiCallServise";
import exp from "constants";

const getAccessTokenSilently = jest.fn();
jest.mock('../../services/api/apiCallServise', () => ({
  getProtectedResource: jest.fn(),
}));

describe('remove product from cart function', () => {
    const mockAccessToken = "abcd1234";
    getAccessTokenSilently.mockResolvedValue(mockAccessToken);

    const productId = 1;
    const user = {
        emailAddress: "randimadias@gmail.com",
    }

    test('remove a cart item from the cart for given productId', async () => {
        const response = { data: {data: 'Success', error: "An error occurred" } };
        (getProtectedResource as jest.Mock).mockResolvedValue(response);

        const result = await removeProductFromCart(getAccessTokenSilently, user, productId);
        expect(result).toEqual('Success');
    });
});