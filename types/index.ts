import { StaticImageData } from "next/image";

export type Product = {
    id: number;
    name: string;
    image: StaticImageData;
    price: number;
    description: string;
    stock: number;
    sizes: string[];
    discount: number;
    rating: number;
};

export type CartItem = {
    id: number;
    name: string;
    image: StaticImageData;
    price: number;
    description: string;
    stock: number;
    sizes: string[];
    discount: number;
    rating: number;
    cartQuantity: number;
};
