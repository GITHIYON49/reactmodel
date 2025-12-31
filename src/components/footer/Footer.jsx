import React from "react";

function Footer() {
  return (
    <>
      <footer className="w-full bg-gray-200 flex flex-col items-center justify-start py-10 gap-7 divide-y-2 divide-gray-300">
        <div className="w-11/12 flex flex-col items-start justify-center md:grid grid-cols-6 gap-y-5 md:gap-x-10 pb-10">
          <div className="col-span-2 space-y-3 text-center sm:text-start md:pr-5">
            <h2 className="text-lg lg:text-2xl text-violet-700 font-bold">
              <span className="text-3xl lg:text-4xl">e</span>-cart
            </h2>
            <p className="text-sm md:text-base text-gray-800">
              Your one-stop destination for quality products at the best prices.
              Shop smart, shop fast.
            </p>
          </div>
          <div className="w-full md:w-auto md:col-span-4 flex flex-col items-center text-center sm:text-start sm:flex-row sm:items-start justify-between md:justify-end gap-5 md:gap-10 lg:gap-20">
            <div className="space-y-3">
              <h5 className="text-base md:text-lg uppercase font-medium text-violet-800">
                shop
              </h5>
              <ul className="text-sm md:text-base text-gray-800 space-y-1.5 capitalize">
                <li>new arrivals</li>
                <li>collections</li>
                <li>accessories</li>
                <li>shoes</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h5 className="text-base md:text-lg uppercase font-medium text-violet-800">
                popular
              </h5>
              <ul className="text-sm md:text-base text-gray-800 space-y-1.5 capitalize">
                <li>seasonal favorites</li>
                <li>must-have bags</li>
                <li>trendy accessories</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h5 className="text-base md:text-lg uppercase font-medium text-violet-800">
                support
              </h5>
              <ul className="text-sm md:text-base text-gray-800 space-y-1.5 capitalize">
                <li>contact us</li>
                <li>account</li>
                <li>store location</li>
                <li>shipping and delivery</li>
              </ul>
            </div>
          </div>
        </div>
        <p className="text-sm md:text-base text-gray-800 text-center">
          © 2026 E-Cart. All rights reserved.
        </p>
      </footer>
    </>
  );
}

export default Footer;
