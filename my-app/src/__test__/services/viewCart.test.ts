import { viewCart } from "../../services/viewCart";
import { getProtectedResource } from "../../services/api/apiCallServise";

const getAccessTokenSilently = jest.fn();
jest.mock('../../services/api/apiCallServise', () => ({
  getProtectedResource: jest.fn(),
}));


describe('view cart fucntion', () => {
    const mockAccessToken = "abcd1234";
    const user = {
        email : "randimadias@gmail.com"
    }

    getAccessTokenSilently.mockResolvedValue(mockAccessToken);

    test("view the cart for relevant user", async() => {
        const response = { data: { data: 'Success', error: 'An error occurred' } };
        (getProtectedResource as jest.Mock).mockResolvedValue(response);

        const result = await viewCart(getAccessTokenSilently, user);
        expect(result).toEqual('Success');
    });

})