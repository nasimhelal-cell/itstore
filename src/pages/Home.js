import BestSelling from "../components/BestSelling";
import Consultation from "../components/Consultation";
import FeatureProducts from "../components/FeatureProducts";
import Offers from "../components/Offers";
import Slider from "../components/Slider";

import Whyme from "../components/Whyme";

const Home = () => {
  return (
    <div className="home">
      <Slider />
      <FeatureProducts />
      <Consultation />
      <BestSelling />
      <Offers />
      <Whyme />
    </div>
  );
};

export default Home;
