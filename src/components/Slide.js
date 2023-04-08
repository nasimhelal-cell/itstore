import { Link } from "react-router-dom";

const Slide = ({ image }) => {
  return (
    <div
      className="slide h-full flex justify-center items-center"
      style={{ backgroundImage: `url(${image.src})` }}
      key={image.id}
    >
      <div className="slide-content flex flex-col gap-5 items-start pl-10 container mx-auto">
        <h1 className="text-7xl text-violet-50 font-medium w-4/5">
          {image.headline}
        </h1>
        <p className="text-gray-50 w-3/5">{image.body}</p>
        <Link
          to="/product"
          className="slide-cta text-violet-50  border mt-4 border-violet-50 hover:border-sky-400 hover:text-sky-500 duration-300 py-2 px-6"
        >
          {image.cta}
        </Link>
      </div>
    </div>
  );
};

export default Slide;
