import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../../components/ProductCard";

const Products = () => {
  const [product, setProduct] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get(`https://fakestoreapi.com/products`);

      setProduct(response.data);
      localStorage.setItem("allProducts", JSON.stringify(response.data))
      setCategories(response.data);
    })();
  }, []);

  const filterCategories = (c) => {
    const itemList = product.filter((type) => type.category === c);
    setCategories(itemList);
  };

  const ShowProducts = () => {
    return (
      <div className="homepage">
        <div className="centering-me pt-5">
          <div className="flex-me">
              <button
                className="btn-product our-products text-start w-50 fs-4"
                onClick={() => setCategories(product)}
              >
                Our Products
              </button>

              <button
                className="btn-product btn me-2"
                onClick={() => filterCategories("men's clothing")}
              >
                Men's Clothing
              </button>

              <button
                className="btn-product btn me-2"
                onClick={() => filterCategories("women's clothing")}
              >
                Women's Clothing
              </button>
              <button
                className="btn-product btn me-2"
                onClick={() => filterCategories("jewelery")}
              >
                Jewelery
              </button>
              <button
                className="btn-product btn me-2"
                onClick={() => filterCategories("electronics")}
              >
                Electronics
              </button>
            </div>
          </div>
        <div className="container p-5">
          <div className="card-group">
            <div className="row row-cols-4">
              {categories.map((product) => (
                <div key={product.id}>
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <ShowProducts />
    </>
  );
};

export default Products;
