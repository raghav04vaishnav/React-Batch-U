import React from "react";
import { useSelector } from "react-redux";

function Cart() {
  const cart = useSelector((state) => state.cart.cart);

  const totalPrice = cart.reduce(
    (total, item) => total + Number(item.price || 0),
    0,
  );

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">My Cart</h1>

        {cart.length > 0 ? (
          <>
            {/* Cart Products */}
            <div className="space-y-4">
              {cart.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-xl shadow-md p-5 flex items-center gap-6"
                >
                  {/* Image */}
                  <div className="w-28 h-28 bg-gray-50 rounded-lg flex items-center justify-center">
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Product Name */}
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold text-gray-800">
                      {product.title}
                    </h2>
                  </div>

                  {/* Product Price */}
                  <div>
                    <p className="text-xl font-bold text-blue-600">
                      ${product.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Total Price */}
            <div className="bg-white rounded-xl shadow-md p-6 mt-6 flex justify-between items-center">
              <p className="text-xl font-semibold text-gray-700">Total Price</p>

              <h2 className="text-3xl font-bold text-green-500">
                ${totalPrice.toFixed(2)}
              </h2>
            </div>
          </>
        ) : (
          /* Empty Cart */
          <div className="bg-white rounded-xl shadow-md p-10 text-center">
            <h2 className="text-2xl font-semibold text-gray-700">
              Your Cart is Empty
            </h2>

            <p className="text-gray-500 mt-2">
              Add some products to your cart.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
