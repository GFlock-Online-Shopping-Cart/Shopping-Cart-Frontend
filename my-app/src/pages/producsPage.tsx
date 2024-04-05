import { getPublicResource } from "../services/apiCallServise";

export const ProducsPage = () => {
    const getAllProducts = async () => {
        const getProducts = await getPublicResource('product/products', 'GET');
        console.log(getProducts);
        
    }

    getAllProducts();
    
    return (
        <>
        <h1>Products</h1>
        </>
    )
}