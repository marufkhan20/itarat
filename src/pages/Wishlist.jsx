import React from "react";
import Heading from "../components/myra/Heading";
import Header from "../components/shared/header";
import Line from "../components/ui/Line";

const Wishlist = () => {
  return (
    <main>
      <Header />

      <section className="mt-10 overflow-x-hidden">
        <div className="container">
          <Heading>Wishlist</Heading>
          <Line />

          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[1037px]">
              <thead className=" bg-gray-200">
                <tr className=" text-left font-normal text-sm border-b">
                  <th className="pl-2 py-2">
                    <input type="checkbox" name="" id="" />
                  </th>
                  <th className="font-medium py-2">Product</th>
                  <th className="font-medium py-2">Price</th>
                  <th className="font-medium py-2">Stock</th>
                  <th className="font-medium py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="pl-2 py-4">
                    <input type="checkbox" name="" id="" />
                  </td>
                  <td className="py-4 flex items-center gap-5">
                    <img className="h-16" src="/images/product-1.png" alt="" />
                    <span className="font-normal">
                      32 inch D-Series HD 720p Smart TV with Apple AirPlay
                    </span>
                  </td>
                  <td className="py-4">$139</td>
                  <td className="py-4"> 893 in stock</td>
                  <td className="py-4">
                    <button className="py-2 px-4 rounded bg-red-500 text-white text-sm">
                      Remove
                    </button>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="pl-2 py-4">
                    <input type="checkbox" name="" id="" />
                  </td>
                  <td className="py-4 flex items-center gap-5">
                    <img className="h-16" src="/images/product-2.png" alt="" />
                    <span className="font-normal">
                      15 Pro Max 5G Unlocked Smartphone,6GB+256GB
                    </span>
                  </td>
                  <td className="py-4">$999</td>
                  <td className="py-4"> 893 in stock</td>
                  <td className="py-4">
                    <button className="py-2 px-4 rounded bg-red-500 text-white text-sm">
                      Remove
                    </button>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="pl-2 py-4">
                    <input type="checkbox" name="" id="" />
                  </td>
                  <td className="py-4 flex items-center gap-5">
                    <img className="h-16" src="/images/product-3.png" alt="" />
                    <span className="font-normal">
                      Apple MacBook Pro 16.2" with Liquid Retina XDR Display
                    </span>
                  </td>
                  <td className="py-4">$1398</td>
                  <td className="py-4"> 893 in stock</td>
                  <td className="py-4">
                    <button className="py-2 px-4 rounded bg-red-500 text-white text-sm">
                      Remove
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Wishlist;
