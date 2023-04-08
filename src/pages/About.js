import Whyme from "../components/Whyme";
import Herotext from "../components/Herotext";
import OurTeam from "../components/OurTeam";
const About = () => {
  return (
    <>
      <Herotext textt="About Us" />
      <section className=" bg-gray-50 py-20 px-20 ">
        <div className="container mx-auto grid grid-cols-2">
          <div className="flex flex-col justify-center">
            <div className="flex flex-col gap-3">
              <h1 className="text-6xl font-semibold text-gray-700">
                Who we are?
              </h1>
              <p className="text-lg text-gray-700">
                We are a team of passionate individuals committed to providing
                high-quality products and exceptional customer service. Our
                mission is to make technology accessible to everyone, no matter
                where they are in the world. Shop with us and experience the
                difference of working with a dedicated and customer-centric
                team.
              </p>
            </div>
          </div>
          <div>
            <img
              className="w-[80%] mx-auto"
              src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="team img"
            />
          </div>
        </div>
      </section>
      <OurTeam />
      <Whyme />
    </>
  );
};

export default About;
