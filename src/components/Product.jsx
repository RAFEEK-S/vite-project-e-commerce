import React from "react";

function Product({setToggle}) {
  return <>
  <div className=" fixed inset-0 bg-black opacity-80  z-40 ">
     <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-800 p-6 rounded-2xl shadow-lg w-96 max-w-full ">
          <h2 className="text-xl font-semibold mb-4">Hello 👋</h2>
          <p className="text-gray-700 mb-6">How are you today?</p>
          
          <div className="flex justify-end space-x-3">
            <button className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 cursor-pointer" onClick={()=> setToggle(false)}>Cancel</button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Confirm
            </button>
          </div>
        </div>
  </div>
  
  </>;
}

export default Product;
