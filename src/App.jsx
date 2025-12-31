import { useState } from "react";
import { Header, Footer } from "./components";
import { Home, Cart } from "./pages";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

function App() {
  const [produts, setProucts] = useState([]);
  const [cartItem, setCartItem] = useState([]);
  return (
    <>
      <Header cartItem={cartItem} />
      <main className="w-full flex flex-col items-center justify-center">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                produts={produts}
                setProucts={setProucts}
                setCartItem={setCartItem}
                cartItem={cartItem}
              />
            }
          />
          <Route
            path="/cart"
            element={<Cart cartItem={cartItem} setCartItem={setCartItem} />}
          />
        </Routes>
        <ToastContainer position="bottom-right" />
      </main>
      <Footer />
    </>
  );
}

export default App;
