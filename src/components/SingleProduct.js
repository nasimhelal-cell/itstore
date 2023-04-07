import { Link } from "react-router-dom";

const SingleProduct = ({ product }) => {
  const { img, title, brand, price } = product;
  return (
    <div className="single-product flex flex-col gap-3 bg-slate-50 hover:shadow-lg duration-300 px-4 py-7 rounded-sm overflow-hidden">
      <div className="flex justify-center">
        <img
          className="w-72 h-48 object-contain hover:scale-110 duration-500"
          src={img}
          alt={title}
        />
      </div>
      <Link
        to={title}
        state={product}
        className="hover:text-rose-500 duration-300 flex justify-between items-center"
      >
        <h2 className="text-stone-950 font-semibold text-xl capitalize">
          {product.title.slice(0, 20)}
        </h2>
      </Link>
      <p className="text-sm text-gray-600">
        Brand: <span className="font-semibold capitalize">{brand}</span>
      </p>
      <p className="text-sm text-gray-600">
        Price: <span className="text-rose-500 font-semibold">{price}</span>
      </p>
      <div className="flex justify-between items-center">
        <Link
          to={title}
          state={product}
          className="hover:text-rose-500 duration-300 flex justify-between items-center"
        >
          <span className="underline underline-offset-4">More Info</span>
          <span className="text-rose-500 text-xl ">&rarr;</span>
        </Link>
        <button
          onClick={() => console.log("ksk")}
          className="bg-sky-500 text-sky-100 px-2 py-1 rounded-sm"
        >
          add to cart
        </button>
      </div>
    </div>
  );
};

export default SingleProduct;
