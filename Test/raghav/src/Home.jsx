import axios from "axios";
import React, { useEffect, useState } from "react";

function Home({ home = [] }) {
  const [carts, setCarts] = useState([]);

  const givenData = async () => {
    try {
      const ans = await axios.get("https://dummyjson.com/carts");

      const apiData = ans.data.carts;

      setCarts(apiData);

      // home + API data merge
      const mergeData = [...home, ...apiData];

      
      console.log(">>>>>>>>>Merged Data:", mergeData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    givenData();
  }, []);

  // Merged data
  const mergeData = [...home, ...carts];

  return (
    <div className="p-5">
      {mergeData.map((item) => {
        console.log("Single Cart:", item);

        return (
          <div
            key={`cart-${item.id}-${item.userId}`}
            className="border p-4 m-4 rounded-lg shadow"
          >
            <h2 className="text-xl font-bold mb-2">
              Cart ID: {item.id}
            </h2>

            <p className="mb-4">
              User ID: {item.userId}
            </p>

            {item.products?.map((product) => (
              <div
                key={product.id}
                className="border p-3 rounded-lg shadow mb-3"
              >
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-full h-48 object-contain mb-4"
                />

                <h3 className="font-bold text-lg mb-2">
                  {product.title}
                </h3>

                <p>Price: ${product.price}</p>
                <p>Quantity: {product.quantity}</p>
                <p>Total: ${product.total}</p>
                <p>Discount: {product.discountPercentage}%</p>
                <p>Discounted Total: ${product.discountedTotal}</p>
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}

export default Home;