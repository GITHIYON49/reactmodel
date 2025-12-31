import { Star } from "lucide-react";
import { toast } from "react-toastify";

function ProductCard({ product, setCartItem, cartItem }) {
  const handleAddItem = (id) => {
    const isItemExist = cartItem.some((item) => item.id === id);
    if (isItemExist) {
      toast.error("Product is already added");
      return;
    }
    toast.success("Product add to cart sucessfully");
    setCartItem((prev) => [...prev, product]);
  };
  return (
    <>
      <div className="w-full bg-white shadow-md ring-1 ring-zinc-300 rounded-md overflow-hidden hover:scale-105 transition-all transform duration-200 ease-in-out relative">
        <span className="absolute top-1 left-1 text-[12px] md:text-sm capitalize font-medium p-2 bg-white rounded-xl text-gray-800">
          {product.category}
        </span>
        <div className="w-full h-80 flex items-center justify-center sm:h-60 p-5 lg:p-10 bg-zinc-200/90">
          <img
            src={product.image}
            alt="Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="p-3 space-y-3">
          <h5 className="text-lg lg:text-xl capitalize font-semibold truncate">
            {product.title}
          </h5>
          <p className="text-sm capitalize text-gray-600  line-clamp-2">
            {product.description}
          </p>
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold flex items-center justify-center gap-1">
              <Star className="size-4 fill-amber-300 text-amber-300 border-amber-300" />
              <span className="text-violet-700 ">{product.rating.rate}</span>
            </p>
            <button
              className="text-base capitalize text-violet-700 font-semibold ring-1 ring-violet-700 cursor-pointer hover:text-white hover:bg-violet-600/80 active:scale-105 px-3 py-1 rounded-xl outline-none transform duration-200 ease-in-out transition-all"
              onClick={() => handleAddItem(product.id)}
            >
              add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
