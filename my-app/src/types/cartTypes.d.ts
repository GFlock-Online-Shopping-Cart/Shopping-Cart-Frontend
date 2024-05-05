interface CartType {
    userId: string,
    productId: number,
    quantity: number,
    product: {
        id: number,
        productName: string,
        productImage: string,
        description: string,
        price: number
    }
}