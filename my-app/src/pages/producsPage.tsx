import { getPublicResource } from "../services/authenticationServise";

export const ProducsPage = () => {
    const getAllProducts = async () => {
        const { data, error } = await getPublicResource();
        
    }

    return (
        <h1>Products</h1>
    )
}