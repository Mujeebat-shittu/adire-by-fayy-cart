import Header from "../components/header"
import home from "../assets/home.jpg"


function Home() {
    return (
        <>
            <Header />
            <div className="bg-white text-black flex h-screen items-center justify-center flex-col gap-2">
                <h1 className="font-2xl border-[#d0d8cd] border-2 p-2">Home</h1>
                <p className="border-[#e5e5e5] border-2">hello</p>
                <p className="">I'm Fayy. The founder of Adire by fayy</p>
                <img src={home} alt="" className="w-[300px] h-[300px]" />
            </div>
        </>
    )

}

export default Home;