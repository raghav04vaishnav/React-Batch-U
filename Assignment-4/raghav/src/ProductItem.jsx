import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "./slice/cartSlice";

function ProductItem() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const cart = useSelector((state) => state.cart.cart);

  const isInCart = cart.some((item) => item.id === Number(id));

  useEffect(() => {
    const getProduct = async () => {
      const res = await axios.get(`https://dummyjson.com/products/${id}`);

      setProduct(res.data);
      setLoading(false);
    };

    getProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-xl font-semibold">Loading Product...</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10">
      <div className="max-w-6xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 bg-gray-800 text-white px-5 py-2 rounded-lg"
        >
          ← Back
        </button>

        <div className="bg-white rounded-2xl shadow-md p-8 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Image */}
          <div className="bg-gray-50 rounded-xl flex items-center justify-center p-8">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-96 object-contain"
            />
          </div>

          {/* Product Details */}
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              {product.title}
            </h1>

            <p className="text-gray-500 mt-4">{product.description}</p>

            <div className="mt-6">
              <span className="text-3xl font-bold text-blue-600">
                ${product.price}
              </span>
            </div>

            <div className="mt-4">
              <span className="bg-yellow-100 text-yellow-700 px-3 py-2 rounded-lg">
                ⭐ {product.rating}
              </span>
            </div>

            <div className="mt-6 space-y-3">
              <p>
                <strong>Brand:</strong> {product.brand}
              </p>

              <p>
                <strong>Category:</strong> {product.category}
              </p>

              <p>
                <strong>Stock:</strong> {product.stock}
              </p>

              <p>
                <strong>Discount:</strong> {product.discountPercentage}%
              </p>

              <p>
                <strong>SKU:</strong> {product.sku}
              </p>

              <p>
                <strong>Weight:</strong> {product.weight}
              </p>

              <p>
                <strong>Warranty:</strong> {product.warrantyInformation}
              </p>

              <p>
                <strong>Shipping:</strong> {product.shippingInformation}
              </p>

              <p>
                <strong>Availability:</strong> {product.availabilityStatus}
              </p>

              <p>
                <strong>Return Policy:</strong> {product.returnPolicy}
              </p>
            </div>

            {/* Cart Buttons */}
            <div className="flex gap-4 mt-8">
              <button
                onClick={() => dispatch(addToCart(product))}
                disabled={isInCart}
                className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 disabled:bg-gray-400"
              >
                {isInCart ? "Already in Cart" : "Add to Cart"}
              </button>

              <button
                onClick={() => dispatch(removeFromCart(product.id))}
                disabled={!isInCart}
                className="flex-1 bg-red-600 text-white py-3 rounded-lg font-medium hover:bg-red-700 disabled:bg-gray-400"
              >
                Remove from Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
