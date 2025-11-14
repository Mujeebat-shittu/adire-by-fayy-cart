import Header from "../components/header"
import Logo from "@/assets/logo.jpg";
import BrandBox from "@/assets/brand-box.jpg";
import { Dot } from "lucide-react";
import { SiInstagram } from "react-icons/si";
import { SiTiktok } from "react-icons/si";


function Home() {
    return (
        <>
            <Header />
            <div className="bg-linear-to-r to-white from-[#d1d9ce] dark:bg-linear-to-r dark:to-[#1a1a1a] dark:from-[#809679] text-[#1a1a1a] flex min-h-screen items-center justify-center flex-col gap-2 ">
                <div className="flex absolute flex-col max-w-[350px] md:max-w-[500px] h-[450px] sm:h-[350px] items-center justify-center shadow-2xl bg-[hsl(104,12%,83%)] dark:bg-[#809679] text-black rounded-lg">
                    <h1 className="font-bold text-2xl">HOME</h1>
                    <img src={Logo} alt="" className="w-20 h-20 sm:w-30 sm:h-30 absolute left-0 top-0 rounded-lg" />
                    <div className="p-4 leading-8 text-lg slide-in-left">
                        <p className="inline-flex ">
                            <Dot className="w-15" color="green" />Adire by Fayy is a brand that makes ready to wear handmade adire designs.
                        </p>
                        <p className="inline-flex">
                            <Dot className="w-25" color="green" />Each Adire piece is made to order, created just for you with care and intention.
                            Handcrafted, expressive, and rooted in tradition.
                        </p>
                    </div>
                    <img src={BrandBox} alt="" className="w-20 h-20 sm:w-30 sm:h-30 absolute right-0 bottom-0 rounded-lg" />
                </div>
                

                {/* Stay Connected section */}
                <div className="relative z-10 mt-[600px] sm:mt-[520px] flex flex-col items-center text-center gap-2 px-6 slide-in-bottom">
                    <div className="w-12 h-0.5 bg-[#809679]/40 dark:bg-[#d1d9ce]/30 my-3"></div>

                    <p className="text-[#2f2f2f] dark:text-[#d1d9ce] text-lg font-medium tracking-wide">
                        Stay Connected
                    </p>
                    <p className="text-[#4a4a4a] dark:text-[#aab5a4] text-sm italic">
                        Follow us across all platforms
                    </p>

                    <div className="flex gap-4 mt-4">
                        {/* TikTok */}
                        <a
                            href="https://www.tiktok.com/@oghenefayjiro?_t=ZS-90xGfzGFpTE&_r=1"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full border border-gray-600 dark:border-[#aab5a4] hover:bg-[#1a1a1a] hover:text-[#d1d9ce] dark:hover:bg-[#d1d9ce]/40 dark:hover:text-[#1a1a1a] transition-all duration-300 shadow-sm"
                        >
                            <SiTiktok className="text-xl" />
                        </a>

                        {/* Instagram */}
                        <a
                            href="https://www.instagram.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full border border-gray-600 dark:border-[#aab5a4] hover:bg-[#1a1a1a] hover:text-[#d1d9ce] dark:hover:bg-[#d1d9ce]/40 dark:hover:text-[#1a1a1a] transition-all duration-300 shadow-sm"
                        >
                            <SiInstagram className="text-xl" />
                        </a>
                    </div>


                </div>
            </div>
        </>
    )

}

export default Home;