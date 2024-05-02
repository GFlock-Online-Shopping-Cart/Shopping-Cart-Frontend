import { createProfile } from "../../services/createProfile";
import { getProtectedResource } from "../../services/api/apiCallServise";

const getAccessTokenSilently = jest.fn();
jest.mock("../../services/api/apiCallServise", () => ({
  getProtectedResource: jest.fn(),
}));

describe("create profile function", () => {
  const mockAccessToken = "abcd1234";
  getAccessTokenSilently.mockResolvedValue(mockAccessToken);

  const newProfile = {
    firstName: "Randima",
    lastName: "Dias",
    mobileNumber: "0705642872",
    streetAddress: "No 50, Temple Road",
    city: "Galle",
    province: "Southern",
  };

  test('create profile makes a POST request and returnd data on success', async () => {
    const response = { data: { data: 'Success', error: "An error occurred," } };
    (getProtectedResource as jest.Mock).mockResolvedValue(response);

    const result = await createProfile(getAccessTokenSilently, newProfile);
    expect(result).toEqual('Success');
  });

  test ('handle error while adding the product to the cart', async () => {
    const mockError = 'An error occurred';
    (getProtectedResource as jest.Mock).mockRejectedValue(new Error(mockError));

    try {
        await createProfile(getAccessTokenSilently, newProfile);
    } catch (error: any) {
        expect(error.message).toEqual(mockError);
    }
});
});
