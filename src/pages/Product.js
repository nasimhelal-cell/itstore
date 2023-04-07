import { useEffect, useState } from "react";
import SingleProduct from "../components/SingleProduct";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState(null);
  const [categories, setCategories] = useState([
    "laptop",
    "smartphone",
    "smartwatch",
    "earbuds",
    "Keyboard",
    "graphics card",
  ]);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const res = await fetch("https://itproducts.onrender.com/products");
        if (!res.ok) throw new Error("Oops! An error has occured");
        const json = await res.json();
        setIsLoading(false);
        setProducts(json);
        setFilterProducts(json);
      } catch (err) {
        setIsLoading(false);
        setErr(err.message);
      }
    };
    getData();
  }, []);
  if (isLoading)
    return (
      <p className="h-screen flex flex-col justify-center items-center text-2xl">
        Loading...
      </p>
    );
  if (err)
    return (
      <p className="h-screen flex flex-col justify-center items-center text-2xl">
        <span>{err}</span>
        <Link to="/product" className="text-lg text-gray-500 font-semibold">
          &larr;Refresh page
        </Link>
      </p>
    );

  return (
    <div className="container mx-auto">
      <h2 className="text-center text-3xl py-10">All Products</h2>
      <div className="flex justify-between gap-10">
        <div className="w-[20%] bg-slate-50 flex flex-col gap-3 px-1">
          <h3
            className="select-none cursor-pointer flex justify-between"
            onClick={() => setFilterProducts(products)}
          >
            <span>All Categories</span>
            <span>{`(${products.length})`}</span>
          </h3>
          {categories.map((cat, i) => (
            <p
              className="select-none cursor-pointer capitalize"
              key={i}
              onClick={() => {
                const filters = products.filter(
                  (product) => product.category === cat
                );
                setFilterProducts(filters);
              }}
            >
              {cat}
            </p>
          ))}
        </div>
        <div>
          <div className="grid grid-cols-3 gap-10 ">
            {filterProducts &&
              filterProducts.map((product) => (
                <SingleProduct key={product.id} product={product} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
