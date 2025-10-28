import Header from "../components/header";
// import pricelist from "../assets/pricelist.jpg";
import { useProducts } from "@/context/ProductContext";
import {
    Card,
    CardContent,
    CardDescription,
} from "@/components/ui/card";


function Product() {
    const {products, loading, error} = useProducts();


    if (error) return <p className="h-screen flex items-center justify-center">{error}</p>;
    if (loading) return <p className="h-screen flex items-center justify-center">Loading...</p>;


    return (
        <>
            <Header />
            <main className="bg-white text-black flex h-screen items-center justify-center flex-col gap-2 my-10">
                <h1 className="font-2xl border-[#d0d8cd] border-2">Products</h1>
                
                <div className="grid grid-cols-2 xl:grid-cols-3 justify-center gap-y-8 gap-x-6 mx-auto ">
                    {products?.slice (0, -2).map ((product) => (
                        <Card key={product.id}
                            className="w-[200px] md:w-[260px] lg:w-[300px] py-6 px-8 flex flex-col text-left hover:scale-[1.07] hover:translate-y-3 cursor-pointer ring-2 ring-[#d0d8cd]/50 hover:ring-[#d0d8cd]/80 transition-all duration-300"
                            >
                            <CardContent className="text-left space-y-2">
                                <img src={product.image_url} alt="" className="h-[270px] w-fit" />
                                <CardDescription className="text-normal">
                                    <p className="text-lg font-bold ">{product.title}</p>
                                    <p className="">{product.description}</p>       
                                    <p className="text-black text-lg">{product.price}</p>
                                    
                                </CardDescription>
                            </CardContent>

                        </Card>
                    ))
                    }

                    <div className="flex justify-center items-center col-span-2 xl:col-span-3 gap-y-8 gap-x-6"> 
                        {products?.slice (-2).map ((product) => (
                        <Card key={product.id}
                            className="w-[200px] md:w-[260px] lg:w-[300px] py-6 px-8 flex flex-col text-left hover:scale-[1.07] hover:translate-y-3 cursor-pointer ring-2 ring-[#d0d8cd]/50 hover:ring-[#d0d8cd]/80 transition-all duration-300"
                            >
                            <CardContent className="text-left space-y-2">
                                <img src={product.image_url} alt="" className="h-[270px] w-fit" />
                                <CardDescription className="text-normal">
                                    <p className="text-lg font-bold ">{product.title}</p>
                                    <p className="">{product.description}</p>       
                                    <p className="text-black text-lg">{product.price}</p>
                                    
                                </CardDescription>
                            </CardContent>

                        </Card>
                    ))
                    }
                    </div>

                    
                </div>

            </main>
        </>
    )

}

export default Product;