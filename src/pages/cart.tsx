import Header from "../components/header";

function Cart () {
    return(
        <>
        <div className="bg-white text-black flex h-screen items-center justify-center flex-col gap-2">
            <Header/>
            <h1 className="font-2xl border-[#d0d8cd] border-2 p-2">Cart</h1>
            <p className="border-[#e5e5e5] border-2">hello</p>
            <p className="">check products you've added to your cart here</p>
        </div>
        </>
    )

}

export default Cart;