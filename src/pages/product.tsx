import Header from "../components/header";
import { useState} from "react";
import { NavLink } from "react-router-dom";
import { useProducts } from "@/context/ProductContext";
import {
    Card,
    CardContent,
    CardDescription,
} from "@/components/ui/card";



function Product() {
    const { products, loading, error } = useProducts();
    const [filterStatus, setFilterStatus] = useState("all"); // all | skirt | pants | gowns

    

    if (error) return <p className="h-screen flex items-center justify-center text-lg">{error} <br /> Go back to <NavLink to="/">Home</NavLink></p>;
    if (loading) return <p className="h-screen flex items-center justify-center">Loading...</p>;

    const filteredProducts = products.filter((product) => {
        if (filterStatus === "all") return true;

        // Match based on category (assuming product.category holds that info)
        return product.category?.toLowerCase() === filterStatus.toLowerCase();
        
    });


    return (
        <>
            <Header />
            <main className="bg-white dark:bg-black text-black flex min-h-screen items-center justify-center flex-col gap-2 pt-16 lg:pt-20">

                <div className="flex gap-2 my-2  ">
                    <button
                        onClick={() => setFilterStatus("all")}
                        className={`px-3 py-1 rounded ${filterStatus === "all" ? "bg-black text-[#d0d8cd]" : "bg-[#d0d8cd] text-black"}`}
                    >
                        All  Categories
                    </button>
                    <button
                        onClick={() => setFilterStatus("gowns")}
                        className={`px-3 py-1 rounded ${filterStatus === "gowns" ? "bg-black text-[#d0d8cd]" : "bg-[#d0d8cd] text-black"}`}
                    >
                        Gowns
                    </button>
                    <button
                        onClick={() => setFilterStatus("pants")}
                        className={`px-3 py-1 rounded ${filterStatus === "pants" ? "bg-black text-[#d0d8cd]" : "bg-[#d0d8cd] text-black"}`}
                    >
                        Pants
                    </button>
                    <button
                        onClick={() => setFilterStatus("skirts")}
                        className={`px-3 py-1 rounded ${filterStatus === "skirts" ? "bg-black text-[#d0d8cd]" : "bg-[#d0d8cd] text-black"}`}
                    >
                        Skirts
                    </button>
                </div>

                

                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 place-content-center gap-y-8 gap-x-6 mx-auto my-10 space-y-4 space-x-4 ">
                    {filteredProducts?.map((product) => (
                        <Card key={product.id}
                            className="w-[200px] md:w-[260px] lg:w-[300px] bg-[#d1d9ce] dark:bg-[#809679] dark:text-[#1a1a1a] py-6 px-8 flex flex-col text-left hover:scale-[1.07] hover:translate-y-3 cursor-pointer ring-2 ring-[#d0d8cd]/50 hover:ring-[#d0d8cd]/80 transition-all duration-300"
                        >
                            <CardContent className="text-left">
                                <img src={product.image_url} alt="" className="h-[270px] w-auto mx-auto" />
                                <CardDescription className="text-normal">
                                    <p className="text-lg font-bold ">{product.title}</p>
                                    <p className="">{product.description}</p>
                                    <p className="text-black text-lg font-bold">{product.price}</p>

                                </CardDescription>
                            </CardContent>

                        </Card>
                    ))
                    }
                </div>

            </main>
        </>
    )

}

export default Product;