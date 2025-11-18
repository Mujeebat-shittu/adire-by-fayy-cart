// import { useReducer } from "react";
// import { products } from "@/data/product";


export type CartItem = {
    id: number;
    title: string;
    price: string;
    numericPrice: number; // 10000 — for calculation
    image: string;
    quantity: number;
};

export const initialState: {total:number; products: CartItem[]} = {
    total: 0,
    products: [],
}

type State = {
    total: number;
    products: CartItem[];
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
                products: action.payload
            };
        case 'removeItem':
            return {
                ...state,
                products: action.payload
            };
        case 'updatePrice':
            return {
                ...state,
                total: action.payload
            };
        case 'emptyCart':
            return {
                ...state,
                products: [],
                total: 0
            };
        case 'reduceQuantity':
            return {
                ...state,
                products: action.payload
            };
        // case 'isEmpty':
        //     return {
        //         ...state,
        //         products: action.payload
        //     };
        // case 'totalItems':
        //     return {
        //         ...state,
        //         products: action.payload
        //     };

        default:
            return state
    }
}

export default cartReducer;