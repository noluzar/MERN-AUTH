import { useState } from "react";
import { toast } from "react-toastify";
import { useProductStore } from "../store/product";
// import { Link } from 'react-router-dom';

export const CreateProduct = () => {
    const [newProduct, setNewProduct] = useState({
        name: "",
        price: "",
        image: "",
    });

    const { createProduct } = useProductStore();

    const handleAddProduct = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        const { success, message } = await createProduct(newProduct);
        if (!success) {
            toast.error(`Error: ${message}`, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        } else {
            toast.success(`Success: ${message}`, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        }
        setNewProduct({ name: "", price: "", image: ""});
    };

    return (
        <div className="h-screen">
         
            <div className="flex justify-between items-center pt-[100px]">
                <div className="w-[50%] h-[50vh]">
                <div className="flex justify-center text-blue-500 hover:underline">
                    <a href="./products">
             View All Products
             </a>
             <div></div>
                    </div>
                    <h1 className="pt-[100px] text-center text-[50px]">Create New Product</h1>
                    <form
                        className="flex flex-col gap-4 items-center w-full"
                        onSubmit={handleAddProduct}
                    >
                        <input
                            type="text"
                            placeholder="Product Name"
                            value={newProduct.name}
                            onChange={(e) =>
                                setNewProduct({ ...newProduct, name: e.target.value })
                            }
                            className="p-3 w-[60%] border rounded"
                            required
                        />
                        <input
                            type="text"
                            placeholder="Product Price"
                            value={newProduct.price}
                            onChange={(e) =>
                                setNewProduct({ ...newProduct, price: e.target.value })
                            }
                            className="p-3 w-[60%] border rounded"
                            required
                        />
                        <input
                            placeholder="Image URL"
                            value={newProduct.image}
                            onChange={(e) =>
                                setNewProduct({ ...newProduct, image: e.target.value })
                            }
                            className="p-3 w-[60%] border rounded"
                            required
                        />
                        <button
                            type="submit"
                            className="border-2 border-black p-2 w-[30vw]"
                        >
                            Create Product
                        </button>
                    </form>
                    
                </div>
                
                <div className="w-[40%] h-auto">
                    <img src="./skin.jpg" className="h-[70vh]" alt="Product" />
                </div>
            </div>
        </div>
    );
};