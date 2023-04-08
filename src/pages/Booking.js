import { useState } from "react";
import Herotext from "../components/Herotext";
import BestSelling from "../components/BestSelling";

const Booking = () => {
  const [sub, setSub] = useState("");
  const [date, setDate] = useState("");
  const [tnx, setTnx] = useState("");
  const [formData, setFormData] = useState(""); //form data are saved here

  function handleSubmit(e) {
    e.preventDefault();
    setTnx("Thanks for booking!");
    setFormData(<p>{sub + " " + date}</p>);
  }
  return (
    <section className="">
      <Herotext textt="Booking" />
      <div className="h-[10rem] flex items-center justify-center shadow-md">
        <form onSubmit={handleSubmit} className="flex gap-10 items-center">
          <div className="flex gap-10">
            <input
              required
              className="border px-5 py-1"
              type="text"
              placeholder="Subject?"
              value={sub}
              onChange={(e) => setSub(e.target.value)}
            />
            <input
              required
              className="border px-5 py-1"
              type="date"
              placeholder="Date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="text-gray-50 border rounded-full border-sky-500 px-10 bg-sky-500 py-2"
          >
            submit
          </button>
        </form>
      </div>
      <p className="text-center text-green-500 pb-10">{tnx}</p>
      <BestSelling />
    </section>
  );
};

export default Booking;
