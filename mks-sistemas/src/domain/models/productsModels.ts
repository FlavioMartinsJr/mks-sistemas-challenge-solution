export type ProductsModel = {
    id: number;
    name: string;
    brand: string;
    description: string;
    photo: string;
    price: number;
};

export type ProductsBuyModel = {
    id: number;
    name: string;
    brand: string;
    description: string;
    photo: string;
    price: number;
    amount: number;
};
