import { useEffect } from "react";
import ProductCard from "../productCard/ProductCard";

function AllProducts({ produts, setProucts, setCartItem, cartItem }) {
  useEffect(() => {
    const fetchUrl = async () => {
      const data = await fetch("https://fakestoreapi.com/products");
      if (!data.ok) {
        throw new Error("error in fetching data");
      }
      const res = await data.json();
      setProucts([...res]);
    };
    fetchUrl();
  }, []);
  return (
    <>
      <section className="w-4/5 sm:w-11/12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-7 items-center justify-center my-10">
        {produts?.map((product) => {
          return (
            <ProductCard
              key={product.id}
              product={product}
              setCartItem={setCartItem}
              cartItem={cartItem}
            />
          );
        })}
      </section>
    </>
  );
}

export default AllProducts;
