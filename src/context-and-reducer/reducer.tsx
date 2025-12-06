// import { useReducer } from "react";
import { products } from "@/data/product";
import { Product } from "@/data/product";


export type CartItem = {
    id: number;
    title: string;
    price: string;
    numericPrice: number; // 10000 — for calculation
    image: string;
    quantity: number;
    description: string;
};

export const initialState: {total:number; product: Product[], cart:CartItem[]} = {
    total: 0,
    cart: [] as CartItem[],
    product: products
}

type State = {
    total: number;
    cart: CartItem[];
    product: Product[];
};

type Action =
    | { type: "addItem"; payload: CartItem[] }
    | { type: "removeItem"; payload: CartItem[] }
    | { type: "reduceQuantity"; payload: CartItem[] }
    | { type: "updatePrice"; payload: number }
    | { type: "emptyCart" };


const cartReducer = (state: State, action: Action) => {
    switch (action.type) {
        case 'addItem':
            return {
                ...state,
                cart: action.payload
            };
        case 'removeItem':
            return {
                ...state,
                cart: action.payload
            };
        case 'updatePrice':
            return {
                ...state,
                total: action.payload
            };
        case 'emptyCart':
            return {
                ...state,
                cart: [],
                total: 0
            };
        case 'reduceQuantity':
            return {
                ...state,
                cart: action.payload
            };

        default:
            return state
    }
}

export default cartReducer;