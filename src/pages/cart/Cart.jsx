import { ShoppingBag, X } from "lucide-react";
import { CartCard } from "../../components";

function Cart({ cartItem, setCartItem, setIsOpen }) {
  const handleShow = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <section
        className={`${
          cartItem.length === 0 ? "bg-white" : " bg-black/80 "
        } fixed z-50 inset-0 h-screen overflow-auto`}
      >
        <button
          className="bg-red-600 fixed top-0 right-0 cursor-pointer rounded-sm outline-none border-none transition-all duration-200 ease-in-out active:scale-105"
          onClick={handleShow}
        >
          <X className="text-white size-7" />
        </button>
        <div className="w-full flex flex-col gap-5 items-center justify-center my-10 ">
          {cartItem.length === 0 ? (
            <div className="w-11/12 h-[60vh] md:h-[80vh] flex flex-col space-y-3 items-center justify-center">
              <ShoppingBag className="size-14 sm:size-16 md:size-20 text-gray-400" />
              <h3 className="text-base md:text-lg lg:text-xl capitalize font-semibold text-center sm:text-start">
                Your cart is empty. Add items to get started.
              </h3>
            </div>
          ) : (
            cartItem?.map((item) => {
              return (
                <CartCard
                  key={item.id}
                  cartProduct={item}
                  cartItem={cartItem}
                  setCartItem={setCartItem}
                />
              );
            })
          )}
        </div>
      </section>
    </>
  );
}

export default Cart;
