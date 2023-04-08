import { useEffect, useState } from "react";

const Fetchdata = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("https://itproducts.onrender.com/products");
      if (!res.ok) throw new Error("Oops! An error has occured");
      const json = await res.json();

      setProducts(json);
    };
    getData();
  }, []);

  return products;
};

export default Fetchdata;
