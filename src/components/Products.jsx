import React, { useEffect, useState } from "react";
import axios from "axios";
import Skeleton from "./Skeleton";
import Star from "./Star";
import AOS from "aos";
import "aos/dist/aos.css"; 

const API_URL = "https://dummyjson.com";

const Products = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null); 

  useEffect(() => {

    AOS.init({
      duration: 500,  
      easing: 'ease-out-quart', 
      once: true, 
    });

    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${API_URL}/products`);
        setData(response.data.products);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  const productItems = data?.map((pro) => (
    <div
      className="p-3 shadow-lg border rounded-lg hover:shadow-2xl transition duration-200 cursor-pointer"
      key={pro.id}
      onClick={() => handleProductClick(pro)} // Bosilganda mahsulotni o'rnatish
    >
      <img
        className="w-full h-60 object-contain mb-2"
        src={pro.thumbnail}
        alt={pro.title}
      />
      <h3 className="font-semibold text-lg">{pro.title}</h3>
      <Star rating={pro.rating} />
    </div>
  ));

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Products</h2>
      {loading && <Skeleton count={12} />}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {productItems}
      </div>

      {/* Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50"
          data-aos="fade-down" // AOS animatsiyasini qo'shish
          data-aos-easing="linear"
          data-aos-duration="900"
        >
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <img
              className="w-full h-60 object-contain mb-4"
              src={selectedProduct.thumbnail}
              alt={selectedProduct.title}
            />
            <h3 className="text-2xl font-bold">{selectedProduct.title}</h3>
            <p className="mt-2">{selectedProduct.description}</p>
            <p className="mt-4 font-semibold">
              Price: ${selectedProduct.price}
            </p>
            <Star rating={selectedProduct.rating} />
            <button
              onClick={closeModal}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
