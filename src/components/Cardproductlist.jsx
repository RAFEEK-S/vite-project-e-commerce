import React from "react";

const Cardproductlist = ({ products, addItem }) => {
  return (
    <div className="w-72 h-auto px-2 mt-3 text-center rounded-2xl shadow-2xl">
      <img src={products.image} alt="productsImage" />
      <p>{products.title}</p>
      <p>RS. {products.price}</p>
      <button
        className="px-2 py-2 bg-green-500 text-white cursor-pointer"
        onClick={() => {
          addItem(products);
        }}
      >
        ADD TO CART
      </button>
    </div>
  );
};

export default Cardproductlist;
