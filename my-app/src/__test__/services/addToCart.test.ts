import { addToCart } from '../../services/addToCart';
import { getProtectedResource } from '../../services/api/apiCallServise';

const getAccessTokenSilently = jest.fn();
jest.mock('../../services/api/apiCallServise', () => ({
  getProtectedResource: jest.fn(),
}));

describe('add to cart function', () => {
    const mockAccessToken = "abcd1234"
    getAccessTokenSilently.mockResolvedValue(mockAccessToken);

    const newCartItem = { 
        productId: 1, 
        quantity: 2 
    };
    
    test('addToCart makes a POST request and returns data on success', async () => {
        const response = {data: { data: 'Success', error: "An error occurred." } };
        (getProtectedResource as jest.Mock).mockResolvedValue(response);
        const result = await addToCart(getAccessTokenSilently, newCartItem);
        
        expect(result).toEqual('Success');
    });

    test ('handle error while adding the product to the cart', async () => {
        const mockError = 'An error occurred';
        (getProtectedResource as jest.Mock).mockRejectedValue(new Error(mockError));

        try {
            await addToCart(getAccessTokenSilently, newCartItem);
        } catch (error: any) {
            expect(error.message).toEqual(mockError);
        }
    });
});

