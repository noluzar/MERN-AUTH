import { useState, useEffect } from "react";
import { useProductStore } from "../store/product";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

export const Products = () => {
    const { fetchProducts, products, updateProduct, deleteProduct } = useProductStore();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingProduct, setEditingProduct] = useState(null);
    const [updatedProduct, setUpdatedProduct] = useState({
        name: "",
        price: "",
        description: "",
        image: "",
    });

    // Fetch products on component mount
    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    // Open the modal and set the product to edit
    const handleEditClick = (product) => {
        setEditingProduct(product);
        setUpdatedProduct({ ...product }); // Pre-fill the modal fields
        setIsModalOpen(true);
    };

    // Save the updated product
    const handleSaveEdit = async () => {
        if (!editingProduct) return;

        const { success, message } = await updateProduct(editingProduct._id, updatedProduct);
        if (success) {
            toast.success("Product updated successfully");
            setIsModalOpen(false); // Close the modal
            setEditingProduct(null); // Clear modal state
            setUpdatedProduct({ name: "", price: "", description: "", src: "", category: "" }); // Reset input fields
            fetchProducts(); // Refresh product list
        } else {
            toast.error(`Error: ${message}`);
        }
    };

    // Delete a product
    const handleDeleteProduct = async (pid) => {
        const { success, message } = await deleteProduct(pid);
        if (success) {
            toast.success("Product deleted successfully");
            fetchProducts();
        } else {
            toast.error(`Error: ${message}`);
        }
    };

    return (
        <div className="h-screen">
            <p className="text-center font-semibold text-[50px] pt-[50px]">
                Curated With Premium Products <br /> For Self-Care
            </p>
            <div className="flex justify-between">
                <div>
                </div>
                <a href="./create">
                <button className="border-none rounded-md bg-[#afad55] text-white p-2 w-[10vw]">Create New Product</button>
                </a>
            </div>
            <div className="grid grid-cols-3 gap-8 p-[70px]">
                {products.map((item) => (
                    <div key={item._id} className="bg-white p-2 space-y-4 w-auto">
                        <Link to={"/details"}>
                        <img
                            src={item.image || "/default-image.jpg"}
                            alt={item.name}
                            className="w-full h-[20vw] object-cover"
                        />
                        </Link>
                        <hr />
                        <div className="flex justify-between">
                            <p>{item.name}</p>
                            <p>R{item.price}</p>
                        </div>
                        <div className="flex gap-4">
                            <button
                                onClick={() => handleEditClick(item)}
                                className="border-none bg-[#afad55] text-white p-2 w-full"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => handleDeleteProduct(item._id)}
                                className="p-1 border-black border-[1px] w-full"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            {products.length === 0 && (
                <div className="text-center mt-4">
                    <p>No products found ;</p>
                    <Link to={"../create"} className="text-blue-500 hover:underline">
                        Create product
                    </Link>
                </div>
            )}

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white rounded-lg shadow-lg w-[600px] p-6">
                        <h2 className="text-2xl font-bold mb-4">Edit Product</h2>
                        <input
                            type="text"
                            value={updatedProduct.name}
                            onChange={(e) =>
                                setUpdatedProduct({ ...updatedProduct, name: e.target.value })
                            }
                            placeholder="Product Name"
                            className="border p-2 w-full mb-4"
                        />
                        <input
                            type="text"
                            value={updatedProduct.price}
                            onChange={(e) =>
                                setUpdatedProduct({ ...updatedProduct, price: e.target.value })
                            }
                            placeholder="Product Price"
                            className="border p-2 w-full mb-4"
                        />
                        <input
                            type="text"
                            value={updatedProduct.description}
                            onChange={(e) =>
                                setUpdatedProduct({ ...updatedProduct, description: e.target.value })
                            }
                            placeholder="Product Description"
                            className="border p-2 w-full mb-4"
                        />
                        <input
                            type="text"
                            value={updatedProduct.src}
                            onChange={(e) =>
                                setUpdatedProduct({ ...updatedProduct, src: e.target.value })
                            }
                            placeholder="Image URL"
                            className="border p-2 w-full mb-4"
                        />
                        <div className="flex justify-end gap-4">
                            <button
                                onClick={handleSaveEdit}
                                className="bg-[#afad55] text-white px-4 py-2 rounded w-[30%]"
                            >
                                Save
                            </button>
                            <button
                                onClick={() => {
                                    setIsModalOpen(false);
                                    setEditingProduct(null); // Clear modal state
                                    setUpdatedProduct({ name: "", price: "", src: "", category: "" }); // Reset input fields
                                }}
                                className="border-black text-black border-2 px-4 py-2 rounded w-[30%]"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
