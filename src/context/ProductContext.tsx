import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import supabase from "../config/supabaseClient";
import toast from "react-hot-toast"

type Product = {
    id: number;
    title: string;
    description: string;
    price: number;
    image_url?: string;
};

type ProductContextType = {
    products: Product[]
    loading: boolean;
    error: string | null
};

const ProductContext = createContext<ProductContextType | undefined>(
//     products: [],
//     loading: true,
//     error: null
// }
undefined
)

export const ProductProvider = ({ children }: { children: ReactNode }) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    
    useEffect(() => {
    const fetchData = async () => {
        setLoading(true);
        const { data, error } = await supabase
        .from("products")
            .select('*');
            

            if (error) {
            toast.error(error.message)
            setError(error.message)
            console.log(error)
        }

        if (data) {
            setProducts(data);
            setError(null)
        }
        setLoading(false);
    };
    
    
    fetchData();
}, []);

return (
    <ProductContext.Provider value={{ products, loading, error }}>
        {children}
    </ProductContext.Provider>
);
}


 export const useProducts = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProducts must be used within a ProductProvider");
  }
  return context;
};
