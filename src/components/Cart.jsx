import React from "react";

const Cart = () => {
  // Sample cart items
  const cartItems = [
    {
      id: 1,
      name: "Modern Lamp",
      price: 150,
      image: "https://via.placeholder.com/150?text=Modern+Lamp",
      quantity: 1,
    },
    {
      id: 2,
      name: "Stylish Chair",
      price: 250,
      image: "https://via.placeholder.com/150?text=Stylish+Chair",
      quantity: 2,
    },
    {
      id: 3,
      name: "Cozy Sofa",
      price: 400,
      image: "https://via.placeholder.com/150?text=Cozy+Sofa",
      quantity: 1,
    },
  ];

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cartItems.length > 0 ? (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center border p-4 rounded shadow"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover mr-4"
              />
              <div className="flex-1">
                <h2 className="text-xl font-semibold">{item.name}</h2>
                <p className="text-gray-600">Price: ${item.price}</p>
                <p className="text-gray-600">Quantity: {item.quantity}</p>
              </div>
              <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                Remove
              </button>
            </div>
          ))}
          <div className="text-right font-semibold text-xl mt-6">
            Total: ${totalAmount}
          </div>
        </div>
      ) : (
        <p className="text-gray-500">Your cart is empty.</p>
      )}
      <button className="mt-6 bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600">
        Proceed to Checkout
      </button>
    </div>
  );
};

export default Cart;
