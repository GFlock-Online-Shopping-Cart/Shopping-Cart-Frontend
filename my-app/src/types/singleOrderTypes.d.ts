interface CheckoutItemType {
    productId: number,
    checkoutId: number,
    price: number,
    quantity: number
}

interface SingleOrderType {
    id: number,
    checkoutDate: string,
    checkoutPrice: number,
    userId: string,
    checkoutItems: CheckoutItemType[]
}