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
    <div className="p-11 pt-[60px]">
      <p className="text-center font-semibold text-[50px] pt-[50px]">
        Curated With Premium Products <br /> For Self-Care
      </p>
      <div className="grid grid-cols-3 gap-8 p-[70px]">
        {products.map((item, index) =>(
          <Link to={`/details/${item._id}`} key={index} className="bg-[#f1e2c2] p-2 space-y-4 w-auto">
            <img
              src={item.image || "/default-image.jpg"}
              alt={item.name}
              className="w-full h-[20vw] object-cover"
            />
            <div className="flex justify-between">
              <p>{item.name}</p>
              <p>R{item.price}.00</p>
            </div>
            <hr />
            <div className="flex gap-4">
              <Link
                to={""}
                className="w-full flex justify-center space-x-4 items-center bg-[#afad55] p-2 text-white rounded-md hover:bg-[#9d9a4b] transition"
              >
                <IoCartOutline className="text-xl" />
                <button>Add to cart</button>
              </Link>
            </div>
          </Link>
        ))}
        
      </div>
    </div>
  );
};
