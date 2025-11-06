import Header from "../components/header"
import Logo from "@/assets/logo.jpg";
import BrandBox from "@/assets/brand-box.jpg";
import { Dot } from "lucide-react";


function Home() {
    return (
        <>
            <Header />
            <div className="bg-white dark:bg-[#1a1a1a] text-[#1a1a1a] flex h-screen items-center justify-center flex-col gap-2">
                <div className="flex absolute flex-col max-w-[300px] sm:max-w-[400px] md:max-w-[500px] h-[400px] overflow-hidden sm:h-[350px] items-center justify-center shadow-2xl bg-[hsl(104,12%,83%)] dark:bg-[#809679] text-black rounded-lg">             
                        <h1 className="font-bold text-2xl">HOME</h1>
                    <img src={Logo} alt="" className="w-20 h-20 sm:w-30 sm:h-30 absolute left-0 top-0 rounded-lg" />
                    <div className="p-4 leading-8 text-lg ">
                      <p className="inline-flex">
                        <Dot size={23} color="green"/>Adire by Fayy is a brand that makes ready to wear handmade adire designs.
                        </p>
                      <p className="inline-flex">
                        <Dot size={35} color="green"/>Each Adire piece is made to order, created just for you with care and intention.
Handcrafted, expressive, and rooted in tradition.
                        </p>
                    </div>
                    <img src={BrandBox} alt="" className="w-20 h-20 sm:w-30 sm:h-30 absolute right-0 bottom-0 rounded-lg" />
                </div>
            </div>
        </>
    )

}

export default Home;