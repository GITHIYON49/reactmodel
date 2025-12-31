import { AllProducts } from "../../components";

function Home({ produts, setProucts, setCartItem, cartItem }) {
  return (
    <>
      <AllProducts
        produts={produts}
        setProucts={setProucts}
        setCartItem={setCartItem}
        cartItem={cartItem}
      />
    </>
  );
}

export default Home;
