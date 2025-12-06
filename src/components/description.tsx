import { useParams, NavLink } from "react-router-dom";
import {
    Card,
    CardContent,
    CardDescription,
} from "@/components/ui/card";
import { useCart } from "@/context-and-reducer/CartContext";
import { Plus, Minus, Trash2 } from "lucide-react"
// import { products } from "@/data/product";



function Description() {
    const { id } = useParams<{ id: string }>();

    const { product: productList, cart, removeFromCart, addToCart, reduceQuantity } = useCart();

    // find the product from the product list
    const product = productList.find((item) => item.id === Number(id));

    if (!product) {
        return <p className="text-center text-gray-500 mt-8">Product not found</p>;
    }

    // check if product is in the cart
    const cartItem = cart.find((item) => item.id === Number(id));
    const quantity = cartItem?.quantity ?? 0;

    const handleRemove = () => {
        if (cartItem) reduceQuantity(cartItem);
    };

    const handleAdd = () => {
        addToCart(product); // IMPORTANT: add the real product
    };

    const handleDelete = () => {
        if (cartItem) removeFromCart(cartItem);
    };

    return (
        <main className="bg-conic from-white to-[#d1d9ce] dark:bg-conic dark:from-black dark:to-[#809679] text-black flex min-h-screen items-start justify-center flex-col gap-2 pt-16 lg:pt-20">
            <div className="flex items-start justify-center mx-auto my-10">
                <Card
                    key={product.id}
                    className="w-[90%] sm:w-[400px] md:w-[500px] lg:w-[600px] bg-[#d1d9ce] dark:bg-[#809679] dark:text-[#1a1a1a] py-6 px-8 text-left ring-2 ring-[#d0d8cd]/50 hover:ring-[#d0d8cd]/80 transition-all duration-300"
                >
                    <CardContent>
                        <img src={product.image} alt={product.title} className="h-[270px] w-auto mx-auto" />
                        <CardDescription>
                            <p className="sm:text-lg font-bold">{product.title}</p>
                            <p className="sm:text-lg">
                                <span className="font-bold">Description:</span> {product.description}
                            </p>
                            <p className="text-black sm:text-lg font-bold my-2">{product.price}</p>
                        </CardDescription>

                        <button
                            onClick={handleAdd}
                            className="w-[100px] p-2 rounded-md border bg-black text-[#d1d9ce] my-4 cursor-pointer hover:scale-[1.05] font-bold"
                        >
                            Add to Cart
                        </button>

                        <div className="flex items-center justify-center gap-4 bg-black text-[#d1d9ce] rounded px-2 py-1 my-2">
                            <button onClick={handleRemove}>
                                <Minus size={18} />
                            </button>

                            <p className="font-bold text-lg">{quantity} pc</p>

                            <button onClick={handleAdd}>
                                <Plus size={18} />
                            </button>
                        </div>

                        <button onClick={handleDelete} className="cursor-pointer">
                            <Trash2 size={18} />
                        </button>
                    </CardContent>

                    <NavLink to="/product" className="mt-4 underline">
                        ← Back to Product
                    </NavLink>
                </Card>
            </div>
        </main>
    );
}

export default Description;
