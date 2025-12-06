import { createContext, useContext, useReducer } from "react";
import reducer, { initialState } from "./reducer"
import { Product } from "@/data/product";


export const CartContext = createContext<CartContextType | null>(null);

export type CartItem = {
    id: number;
    title: string;
    price: string;        // "$10,000" — for display
    numericPrice: number; // 10000 — for calculation
    image: string;
    quantity: number;
    description: string;
};

type CartItemDescription = {
  id: number,
    title: string,
    price: string,
    numericPrice: number,
    image: string,
    quantity: number,
    description: string,
    category: string,
    note: string
}

export type CartContextType = {
    total: number;
    product: Product[];
    cart: CartItem[] ;
    addToCart: (product: Product | CartItem) => void;
    removeFromCart: (product: CartItem) => void;
    reduceQuantity: (product: CartItem) => void;
    updatePrice: (products: CartItem[]) => void;
    emptyCart: () => void;
};

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const addToCart = (product: Product | CartItem) => {
        const existingItem = state.cart.find(item => item.id === product.id)

        let updatedBasket: CartItem[] | CartItemDescription;

        if (existingItem) {
            updatedBasket = state.cart.map(item =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );
        } else {
            const newProduct = { ...product, quantity: 1 };
            updatedBasket = [...state.cart, newProduct]
        }

        dispatch({
            type: "addItem",
            payload: updatedBasket
        })

        updatePrice(updatedBasket);
    }
    

    const reduceQuantity = (product: CartItem) => {
        const existingItem = state.cart.find(item => item.id === product.id);

        if (!existingItem) return; // nothing to remove

        let updatedBasket: CartItem[];

        if (existingItem.quantity > 1) {
            // Decrease quantity by 1
            updatedBasket = state.cart.map(item =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            );
        } else {
            // Remove item completely if quantity becomes 0
            updatedBasket = state.cart.filter(item => item.id !== product.id);
        }

        dispatch({
            type: "removeItem",
            payload: updatedBasket
        });

        updatePrice(updatedBasket);
    };

    const removeFromCart = (product: CartItem) => {
        const updatedBasket = state.cart.filter(
            (currentProduct: CartItem) => currentProduct.title !== product.title);

        updatePrice(updatedBasket);

        dispatch({
            type: "removeItem",
            payload: updatedBasket
        })
    }


    const updatePrice = (products: CartItem[]) => {

        const total = products.reduce((sum, p) => sum + p.numericPrice * p.quantity, 0);

        dispatch({
            type: "updatePrice",
            payload: total
        })
    }

    const emptyCart = () => {

        dispatch({
            type: "emptyCart",
        })

    }

//     const totalQuantity = state.cart.reduce(
//   (acc, item) => acc + item.quantity,
//   0
// );



    const value: CartContextType = {
        total: state.total,
        product: state.product,
        cart: state.cart,
        addToCart,
        removeFromCart,
        updatePrice,
        emptyCart,
        reduceQuantity,
    };


    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);

    if (!context) {
        throw new Error("useCart must be used inside <CartProvider>");
    }

    return context;
};
