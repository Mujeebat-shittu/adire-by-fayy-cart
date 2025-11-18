// import { useContext, useState } from "react";
import { useCart } from "@/context-and-reducer/CartContext";
import Header from "./header";
import { CartItem } from "@/context-and-reducer/CartContext";
// import { ShoppingCart } from "lucide-react";
import { Trash2 } from "lucide-react";
import { Plus, Minus } from "lucide-react";
import toast from "react-hot-toast";
// import 


export default function Cart() {

  const { products, total } = useCart();

  const { removeFromCart, addToCart, reduceQuantity } = useCart()

  const handleRemove = (product: CartItem) => {
    reduceQuantity(product);
    // toast.success(`You've added ${product.title} to cart `)
  }

  const handleAdd = (product: CartItem) => {
    addToCart(product);
    toast.success(`You've added ${product.title} to cart `)
  }

  const handleDelete = (product: CartItem) => {
    removeFromCart(product)
  }


  //   const handleCheckout = () => {
  //     emptyCart();
  //     setMessage("You'll be redirected to make payment in a few seconds…");

  //     setTimeout(() => {
  //       window.location.reload();
  //     }, 3000);
  //   };




  return (
    <>
      <Header />
      <div className="bg-linear-to-r from-white to-[#d1d9ce] dark:bg-linear-to-r dark:from-[#1a1a1a] dark:to-[#809679] dark:text-[#d1d9ce] flex min-h-screen items-center justify-center flex-col gap-2">
        <div className="flex gap-5 justify-center items-center">
          <h3 className="font-bold text-xl">Your Cart</h3>
        <p className="font-bold text-lg">Total: {total}</p>
        </div>
        


        {products.map((product, index) => (
          <div key={index} className="flex flex-row gap-5 my-4 items-center justify-center p-4 rounded-2xl">
            <div className="">
              <img src={product.image} alt={product.title} className="w-30 rounded-2xl" />
            </div>
            <div className="">
              <div>
                <h3 className="text-left text-lg font-bold text-(--dark-grayish-blue)">{product.title}</h3>
              </div>
              <div className="text-lg font-semibold text-(--dark-grayish-blue)">
                    <p>Price: {product.numericPrice}.00</p>
                <p className="text-lg font-semibold text-(--dark-grayish-blue)">Subtotal: {product.numericPrice * product.quantity}.00</p>
              </div>
              <div className="text-right">

                <div className="flex items-center justify-center gap-4 dark:bg-[#809679] bg-[#d1d9ce] rounded px-2 py-1 my-2">
                  <button
                    onClick={() => handleAdd(product)}
                    className="cursor-pointer">
                      <Plus  size={18} className="dark:text-[#d1d9ce] text-black" />
                  </button>

                <p className="font-bold text-lg text-(--dark-grayish-blue)">{product.quantity}pc</p>


                  <button onClick={() => handleRemove(product)}
                    className="cursor-pointer">
                      <Minus size={18} className="dark:text-[#d1d9ce] text-black" />
                  </button>
                </div>
                <button
                  onClick={() => handleDelete(product)}
                  className="cursor-pointer">
                  <Trash2 size={18} className="dark:text-[#d1d9ce] text-black" />
                  </button></div>
            </div>
          </div>

        ))}
      </div>

    </>
  )


  {/*

    <div className="relative flex items-center justify-center">

    //    Cart Icon 
      <div className="relative">
        <ShoppingCart
          size={28}
          className="cursor-pointer text-(--dark-grayish-blue)"
          onClick={() => setIsOpen(true)}
        />
        <div className="absolute text-[10px] -top-2 right-0 rounded-lg w-6 h-5 px-1 font-bold text-white bg-[#ff7d1a]">({totalItems})</div>
      </div>


      {isOpen && (
        <>
        //    Overlay 
          <div
            className="fixed inset-0 bg-black/90 z-40 pointer-events-auto"
            onClick={() => setIsOpen(false)}
            onTouchStart={() => setIsOpen(false)}

          ></div>


        //   Dropdown
          <div className="absolute top-0 -right-20 w-[280px] md:w-lg h-fit bg-white shadow-lg rounded-lg p-4 z-50 mx-auto">
            <h1 className="text-lg font-bold text-left">Cart</h1>
            <div className="h-0.5 w-full bg-(--dark-grayish-blue) my-4"></div>


            {message ? (
              <p className="my-10 text-center text-[rgb(255,106,26)] font-semibold">{message}</p>
            ) : isEmpty ? (
              <p className="my-10 text-gray-500 font-semibold text-center">Your cart is empty.</p>
            ) : (

              // Cart with items
              <>

                // cart header
                <div className="flex flex-row px-4 justify-between my-2">
                  <div className=" flex gap-4">
                    <h5 className="font-bold text-lg text-(--dark-grayish-blue)">Cart ({totalUniqueItems})</h5>
                    <h5 className="font-bold text-lg text-(--dark-grayish-blue)">Total items: ({totalItems})</h5>
                  </div>
                  <div className="">
                    <h2 className="text-lg font-bold text-(--dark-grayish-blue)">Total Price: ${cartTotal}.00</h2>
                  </div>
                </div>

                {products.map((product, index) => (
                  <div key={index} className="flex flex-row gap-5 my-4 items-center justify-center p-4 rounded-2xl">
                    <div className="">
                      <img src={item.images[0].img} alt={item.name} className="w-30 rounded-2xl" />
                    </div>
                    <div className="">
                      <div>
                        <h3 className="text-left text-lg font-bold text-(--dark-grayish-blue)">{item.name}</h3>
                      </div>
                      <div className="">
                        <p className="text-lg font-bold text-(--dark-grayish-blue)">${item.price}.00</p>
                        <p className="font-bold text-lg text-(--dark-grayish-blue)">{item.quantity}pc</p>
                      </div>
                      <div className="text-right">
                        <button onClick={() => removeItem(item.id)} className="cursor-pointer">
                          <Trash2 color="#68707d" size={18} /></button></div>
                    </div>
                  </div>

                ))}

                // checkout button
                <div className="block items-center justify-center m">
                  <button
                    onClick={() => emptyCart()}
                    className="px-8 py-2 border-none w-full bg-[#ff7d1a] text-lg text-black rounded-lg font-bold cursor-pointer mb-4">
                    Clear Cart
                  </button>

                  <button
                    onClick={handleCheckout}
                    className="px-8 py-2 border-none w-full bg-[#ff7d1a] text-lg text-black rounded-lg font-bold cursor-pointer mb-4">
                    Checkout</button>

                  {message && (
                    <p className="mt-4 text-center text-lg text-green-500 font-semibold">
                      {message}
                    </p>
                  )}
                </div>
              </>
            )}
          </div>

        </>

      )}
    </div> 
    */}


}
