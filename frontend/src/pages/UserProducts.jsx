import { useEffect } from "react";
import { useProductStore } from "../store/product";
import { IoCartOutline } from "react-icons/io5";
// import { toast } from "react-toastify";
import { Link } from "react-router-dom";

export const UserProducts = () => {
  const { fetchProducts, products } = useProductStore();

  // Fetch products on component mount
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <div className="pt-[60px] h-screen space-y-4">
      <p className="text-center font-semibold text-[50px] pt-[50px]">
        Curated With Premium Products <br /> For Self-Care
      </p>
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
             {products.map((item, index) => (
               <Link
                 to={`/details/${item._id}`}
                 key={index}
                 className="bg-[#f1e2c2] p-4"
               >
                 <div className="flex items-center justify-center">
                   <img
                     src={item.image}
                     alt={item.name}
                     className="h-full w-full object-cover rounded-md"
                   />
                 </div>
                 <div className="mt-4 flex justify-between items-center text-lg font-medium">
                   <p>{item.name}</p>
                   <p>R{item.price}.00</p>
                 </div>
                 <hr className="my-2" />
                 <button className="w-full bg-[#afad55] py-2 text-white rounded-md hover:bg-[#9d9a4b] transition">
                   Add to Cart
                 </button>
               </Link>
             ))}
           </div>
    </div>
  );
};
