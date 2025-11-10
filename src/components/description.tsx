import { useParams, NavLink } from "react-router-dom";
import {
    Card,
    CardContent,
    CardDescription,
} from "@/components/ui/card";
import {products} from "@/data/product"



function Description() {
    const { id } = useParams<{ id: string }>();
    const product = products.find((item) => item.id === Number(id));

    if (!product) {
        return <p className="text-center text-gray-500 mt-8">Product not found</p>;
    }

    return (
        <>
            <main className="bg-conic from-white to-[#d1d9ce] dark:bg-conic dark:from-black dark:to-[#809679] text-black flex min-h-screen items-start justify-center flex-col gap-2 pt-16 lg:pt-20">


                <div className="flex items-start justify-center gap-y-8 gap-x-6 mx-auto my-10 space-y-4 space-x-4 ">
                    <Card key={product.id}
                        className="w-[90%] sm:w-[400px] md:w-[500px] lg:w-[600px] bg-[#d1d9ce] dark:bg-[#809679] dark:text-[#1a1a1a] py-6 px-8 text-left ring-2 ring-[#d0d8cd]/50 hover:ring-[#d0d8cd]/80 transition-all duration-300"
                    >
                        <CardContent className="text-left">
                            <img src={product.image} alt="" className="h-[270px] w-auto mx-auto" />
                            <CardDescription className="text-normal">
                                <p className="text-lg font-bold ">{product.title}</p>
                                <p className="text-lg"> <span className="font-bold">Description:</span> {product.description}</p>
                                <p className="text-black text-lg font-bold">{product.price}</p>

                            </CardDescription>
                            <button
                                className="w-[100px] p-2 rounded-md border bg-black dark:hover:bg-[#d1d9ce]/60 dark:hover:text-gray-700 text-[#d1d9ce] my-4 cursor-pointer hover:scale-[1.05] font-bold"
                            >
                                <a
                                    href="https://wa.me/2348126458317"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Order Here</a>
                            </button>
                        </CardContent>

                        <div className="">
                            <NavLink
                            to="/product"
                            className="mt-4 transition underline"
                        >
                            ← Back to Product
                        </NavLink>
                        </div>

                        


                    </Card>

                </div>

            </main>
        </>
    )

}

export default Description