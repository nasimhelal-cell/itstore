import { useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Slide from "./Slide";

const data = [
  {
    id: 1,
    src: "https://assets.mspimages.in/wp-content/uploads/2021/06/pjimage-1.jpg",
    headline: "Power and Portability at your Fingertips",
    body: "Discover our wide range of laptops for all your computing needs. From ultrabooks to gaming laptops, our selection offers the perfect combination of power and portability for your lifestyle.",
    cta: "Shop now",
    category: "laptop",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    headline: "Stay Connected on the Go",
    body: "Keep up with the latest trends and stay connected on-the-go with our selection of smartphones. Choose from top brands and affordable options, with advanced features to enhance your mobile experience.",
    cta: "Shop now",
    category: "smartphone",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1631281956016-3cdc1b2fe5fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
    headline: "Track your Fitness and Stay Connected",
    body: "Enhance your lifestyle with our range of smartwatches. Monitor your fitness goals and stay connected to your digital life with ease. Choose from popular brands and a variety of styles and features.",
    cta: "Shop now",
    category: "smartwatch",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1600003263720-95b45a4035d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    headline: "The Ultimate Gaming Experience",
    body: "Take your gaming experience to the next level with our high-performance graphics cards. Choose from top brands and the latest technology for smooth and fast gameplay.",
    cta: "Shop now",
    category: "graphics card",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1526876798423-97e53fb23428?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    headline: "Listen in Style and Comfort",
    body: "Elevate your audio experience with our selection of earbuds and headphones. Choose from the latest models and top brands, with noise-cancelling and wireless options for a customized listening experience.",
    cta: "Shop now",
    category: "earbuds",
  },
];
const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  const prevSlide = () => {
    setCurrentSlide(
      currentSlide === 0 ? data.length - 1 : (prevSlide) => prevSlide - 1
    );
  };
  const nextSlide = () => {
    setCurrentSlide(
      currentSlide === data.length - 1 ? 0 : (prevSlide) => prevSlide + 1
    );
  };

  return (
    <div className="frame relative overflow-x-hidden">
      <div
        className="slider relative "
        style={{ transform: `translateX(-${100 * currentSlide}vw)` }}
      >
        {data.map((image) => (
          <Slide image={image} key={image.id} />
        ))}
      </div>
      <div className="btns absolute z-[1]  text-gray-50 bottom-[50%] w-screen ">
        <div className="flex  justify-between pr-5 pl-1 gap-10 ">
          <button
            onClick={prevSlide}
            className="backdrop-blur-xl bg-black bg-opacity-50 text-sky-50 px-4 py-7"
          >
            <span>
              <BsArrowLeft />
            </span>
          </button>

          <button
            onClick={nextSlide}
            className="backdrop-blur-xl bg-black bg-opacity-50 text-sky-50 px-4 py-5"
          >
            <span>
              <BsArrowRight />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
