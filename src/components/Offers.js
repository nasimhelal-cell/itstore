const Offers = () => {
  return (
    <section className="offer flex flex-col  justify-center items-center h-[30rem] pb-20">
      <div className="flex container mx-auto flex-col gap-5 justify-center w-[90%] ">
        <h3 className="text-6xl font-semibold text-gray-50">
          Limited Time Offer
        </h3>
        <h1 className="font-semibold text-2xl text-gray-50">
          Special Addition
        </h1>
        <p className="text-md text-gray-50">
          It is a limited-time promotion that provides customers with an
          exclusive discount or unique product bundle
        </p>
        <div>
          <button className="text-sky-400 px-2 py-1 border border-sky-400 rounded-sm hover:bg-sky-400 hover:text-sky-50 duration-300">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Offers;
