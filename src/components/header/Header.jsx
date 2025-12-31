import { ShoppingCart } from "lucide-react";
import { NavLink } from "react-router-dom";

function Header({ cartItem }) {
  return (
    <>
      <header className="w-full bg-violet-600 shadow-md shadow-violet-700/80 h-20 sticky top-0 flex items-center justify-center z-50">
        <nav className="w-11/12 md:w-4/5 flex items-center justify-between text-white mx-auto">
          <NavLink to="/">
            <h1 className="text-xl md:text-2xl font-bold">
              <span className="text-3xl md:text-4xl">e</span>-cart
            </h1>
          </NavLink>

          <NavLink to="/cart">
            <div className="flex items-center justify-center gap-1 relative">
              <ShoppingCart className="size-6 md:size-7" />
              <span className="text-base md:text-lg font-semibold">Cart</span>
              <span className="bg-black size-4 md:size-5 flex items-center justify-center rounded-full text-[10px] md:text-[12px] font-semibold absolute -top-4 left-2">
                {cartItem.length}
              </span>
            </div>
          </NavLink>
        </nav>
      </header>
    </>
  );
}

export default Header;
