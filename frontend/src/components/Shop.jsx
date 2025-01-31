import {React, useEffect } from "react";
import { Link } from "react-router-dom";
import { useProductStore } from "../store/product";


const Shop = () => {
  const { fetchProducts, products } = useProductStore();
  
    // Fetch products on component mount
    useEffect(() => {
      fetchProducts();
    }, [fetchProducts]);

  return (
    <div className="space-y-[50px] p-[50px] bg-[#f1e2c2]">
        <h1 className="text-3xl lg:text-5xl text-center font-semibold">SHOP OUR PRODUCTS</h1>
      <div className="grid grid-cols-4">
        {products.map((item, index) => (
          <Link to={''} key={index} className="p-2 w-[70%] space-y-2 bg-[#f6e9db]">
            <img src={item.image} className="h-[40vh] w-full" />
            <div className="flex justify-between p-2">
              <p>{item.name}</p>
              <p>R{item.price}.00</p>
            </div>
            <hr/>
            <button className='w-full bg-[#afad55] p-1 text-white rounded-md hover:bg-[#9d9a4b] transition'>Add to cart</button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Shop;
