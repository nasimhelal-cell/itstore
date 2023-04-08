import { useNavigate } from "react-router-dom";

const Consultation = () => {
  const navigate = useNavigate();
  return (
    <section className="consultation flex items-center   py-10 h-[20rem] ">
      <div className="w-[90%] mx-auto flex justify-evenly items-center">
        <div className="flex container text-gray-50 flex-col  gap-4  ">
          <h1 className="text-4xl w-[80%] ">
            Are you confused,which product is suitable for you ?
          </h1>
          <h1 className="text-4xl font-semibold w-[80%] text-sky-500">
            Need consultation?
          </h1>
          <p className="text-lg">Get ultimate solution from our talent</p>
        </div>
        <button
          className="text-gray-50 border rounded-full border-sky-500 px-10 bg-sky-500 py-2"
          onClick={() => navigate("booking")}
        >
          BookNow
        </button>
      </div>
    </section>
  );
};

export default Consultation;
