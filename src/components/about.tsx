import Header from "../components/header";
import Logo from "@/assets/logo.jpg";
import BrandBox from "@/assets/brand-box.jpg";
import { Dot } from "lucide-react";

function About() {
    return (
        <>
            <Header />
            <div className="bg-white dark:bg-[#1a1a1a] text-black flex h-screen items-center justify-center flex-col gap-2 overflow-hidden">
                <div className="flex absolute flex-col max-w-[350px] sm:max-w-[400px] md:max-w-[500px] h-[600px] sm:h-[400px] items-center justify-center shadow-2xl bg-[#d0d8cd] dark:bg-[#809679] text-[#1a1a1a] rounded-lg">             
                        <h1 className="font-bold text-2xl">ABOUT</h1>
                    <img src={Logo} alt="" className="w-20 h-20 sm:w-30 sm:h-30 absolute left-0 top-0 rounded-lg" />
                    <div className="p-4 leading-8 sm:text-lg ">
                      <p className="inline-flex">
                        <Dot size={45} color="green"/>Our dresses are made to order, each one created with care, precision, and the artistic touch that defines Adire.
                        </p>
                        <p className="inline-flex">
                        <Dot size={45} color="green"/>This approach allows us to preserve the individuality of every design while ensuring the best quality for you.
                        </p>
                        <p className="inline-flex">
                        <Dot size={45} color="green"/>We’re working towards launching a full ready-to-wear collection soon, so you can easily shop your favourite styles. 
                        </p>
                        <p className="inline-flex">
                        <Dot size={35} color="green"/>Until then, thank you for your love, patience, and constant support.
                        </p>
                    </div>
                    <img src={BrandBox} alt="" className="w-30 h-30 absolute right-0 bottom-0 rounded-lg" />
                </div>
            </div>
        </>
    )

}

export default About;