import { useState } from "react";
import { Header, Footer } from "./components";
import { Home, Cart } from "./pages";
import { ToastContainer } from "react-toastify";

function App() {
  const [produts, setProucts] = useState([]);
  const [cartItem, setCartItem] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Header cartItem={cartItem} setIsOpen={setIsOpen} />
      <main className="w-full flex flex-col items-center justify-center">
        <Home
          produts={produts}
          setProucts={setProucts}
          setCartItem={setCartItem}
          cartItem={cartItem}
        />
        {isOpen ? (
          <Cart
            cartItem={cartItem}
            setCartItem={setCartItem}
            setIsOpen={setIsOpen}
          />
        ) : null}

        <ToastContainer position="bottom-right" />
      </main>
      <Footer />
    </>
  );
}

export default App;
