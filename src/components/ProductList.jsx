import { useState } from "react";
import { addToCart } from "../redux/UiSlice";
import { useDispatch } from "react-redux";

const ProductList = ({ products }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const dispatch = useDispatch();

  const categoryList = [
    ...new Set(products.map((product) => product.category)),
  ];

  const filteredProducts = products.filter((product) => {
    return (
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (!selectedCategory || product.category === selectedCategory)
    );
  });

  const handleAddToCart = (price) => {
    dispatch(addToCart(price));
  };

  return (
    <>
      <select
        name="category"
        id="category"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        style={{ marginBottom: "20px" }}
        className="px-4 py-2 border border-gray-300 rounded-md"
      >
        <option value="" className="text-black font-bold">
          All Categories
        </option>
        {categoryList.map((category) => (
          <option
            key={category}
            value={category}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {category}
          </option>
        ))}
      </select>

      <h1>Search a product:</h1>
      <input
        type="text"
        placeholder="Search a product"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="px-4 py-2 border border-gray-300 rounded-md w-1/4 mb-5"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {filteredProducts.map((product, index) => (
          <div
            key={index}
            className="bg-gray-200 p-4 rounded-xl border border-gray-300 flex flex-col justify-between gap-3"
          >
            <img
              src={product.image}
              className="w-full h-[200px] object-contain"
              alt=""
            />
            <h2 className="text-lg font-bold">{product.title}</h2>
            <p className="text-gray-800 font-semibold">
              Category: {product.category}
            </p>
            <p className="text-gray-600 h-[100px] overflow-auto">
              {product.description}
            </p>
            <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
            <button onClick={() => handleAddToCart(product.price)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductList;
