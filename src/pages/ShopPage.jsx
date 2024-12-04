import { useEffect, useState } from "react";
import axios from "axios";
import ProductList from "../components/ProductList";
import { useNavigate } from "react-router-dom";

const ShopPage = () => {
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();

  const isLoggedIn = localStorage.getItem("success");

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");

        setProducts(response.data);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);

  return <ProductList products={products} />;
};

export default ShopPage;
