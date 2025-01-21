 export type Collection = {
    _id: string;
    name: string,
    description: string,
    image: string,
}

export type Product = {
    _id: string;
    collectionId: Collection;
    name: string,
    description: string,
    price: number,
    images: string[],
    // sizes: string[],
    inStock: boolean;
    createdAt: string;
}

export type Order = {
    _id: string;
    userId: User;
    products: {
        productId: Product;
        quantity: number;
    }[];    
    totalAmount: number;
    // createdAt: string;
};

export type CartItem = {
    product: Product;
    quantity: number;

}

export type User = {
    _id: number,
    name: string,
    email: string,
    avatar: string
    password: string;
}

export type WishlistItem = {
    userId: User;
    productId: Product;
}

