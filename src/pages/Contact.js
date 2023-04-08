import Herotext from "../components/Herotext";
const Contact = () => {
  const couses = [
    {
      title: "Sales",
      desc: " Expert sales assistance for all customers. Our sales team is dedicated to providing expert guidance to customers",
      phn: "1800 123 4567",
    },
    {
      title: "Complaints",
      desc: "We take customer satisfaction seriously and strive to address any complaints in a timely and efficient manner",
      phn: "1800 123 4567",
    },
    {
      title: "Returns",
      desc: "Hassle-free returns and exchanges. We understand that sometimes products just don't work out. ",
      phn: "1800 123 4567",
    },
    {
      title: "Marketing",
      desc: "Our marketing team works collaboratively with businesses to help them grow and succeed",
      phn: "1800 123 4567",
    },
  ];
  return (
    <section>
      <Herotext textt="Contact us" />
      <div className="py-16 ">
        <h2 className="text-5xl text-gray-700 font-semibold text-center pb-5 ">
          We're here to help you
        </h2>
        <div className="flex w-[85%] mx-auto gap-5  py-10 px-0">
          {couses &&
            couses.map((cause) => {
              return (
                <div className="text-center bg-gray-50 rounded-lg flex flex-col gap-3 py-10 px-5">
                  <h3 className="text-gray-900 font-semibold text-2xl">
                    {cause.title}
                  </h3>
                  <p className="text-lg text-gray-700">{cause.desc}</p>
                  <a
                    href={`tel:${cause.phn}`}
                    className="text-sky-500 font-semibold text-xl"
                  >
                    {cause.phn}
                  </a>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Contact;
