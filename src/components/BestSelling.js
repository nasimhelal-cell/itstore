import Fetchdata from "../components/Fetchdata";
import SingleProduct from "./SingleProduct";
const BestSelling = () => {
  const products = Fetchdata();
  return (
    <section className="container mx-auto">
      <h2 className="text-4xl py-10 text-center font-medium text-gray-700">
        Best Selling Products
      </h2>
      <div className="grid grid-cols-3 gap-10 w-[80%] mx-auto pb-20">
        {products &&
          products
            .filter((product) => product.id % 4 === 0 && product.id > 17)
            .map((product) => {
              return <SingleProduct key={product.id} product={product} />;
            })}
      </div>
    </section>
  );
};

export default BestSelling;
