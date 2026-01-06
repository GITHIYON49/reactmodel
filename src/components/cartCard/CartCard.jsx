import { DollarSign } from "lucide-react";

function CartCard({ cartProduct, setCartItem }) {
  const handleDelete = (id) => {
    setCartItem((prev) => prev.filter((item) => item.id !== id));
  };
  return (
    <>
      <div className="w-11/12 xl:w-4/5 flex flex-col md:flex-row items-start justify-between shadow-md shadow-violet-700/50 p-7 gap-5 ring-1 bg-slate-50 ring-violet-700 rounded-sm">
        <div className="w-full md:w-4/5 flex flex-col items-center justify-center sm:flex-row sm:items-start sm:justify-start md:justify-start gap-5 md:gap-7 lg:gap-10">
          <div className="size-36 md:size-40 lg:size-60">
            <img
              src={cartProduct.image}
              alt={cartProduct.title}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="space-y-1 text-center sm:text-start">
            <span className="inline-block text-gray-500 capitalize text-sm font-medium tracking-wider mb-3">
              details
            </span>
            <h5 className="text-base md:text-lg lg:text-xl capitalize font-semibold line-clamp-3">
              {cartProduct.title}
            </h5>
            <p className="text-lg capitalize">{cartProduct.category}</p>
            <p className="text-lg flex items-center justify-center sm:justify-start gap-1">
              <DollarSign className="size-5" />
              {cartProduct.price}
            </p>
          </div>
        </div>
        <button
          className="bg-red-500 text-sm text-white px-5 py-3 capitalize border-none outline-none cursor-pointer rounded-md hover:bg-red-400 active:scale-105 transition-all transform duration-200 ease-in-out"
          onClick={() => handleDelete(cartProduct.id)}
        >
          remove item
        </button>
      </div>
    </>
  );
}

export default CartCard;
