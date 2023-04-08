const OurTeam = () => {
  const teamMenbers = [
    {
      name: "Harvey Spector",
      designation: "Founder - CEO",
      img: "https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/team2-free-img.png",
    },
    {
      name: "Jessica Pearson",
      designation: "COO",
      img: "https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/team1-free-img.png",
    },
    {
      name: "Rachel Zain",
      designation: "Marketing Head",
      img: "https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/team3-free-img.png",
    },
    {
      name: "Luise Litt",
      designation: "Lead Developer",
      img: "https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/team4free-img.png",
    },
    {
      name: "Katrina Bennett",
      designation: "Intern Designer",
      img: "https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/team5-free-img.png",
    },
    {
      name: "Mike Ross",
      designation: "Intern Designer",
      img: "https://websitedemos.net/brandstore-02/wp-content/uploads/sites/150/2018/12/team6-free-img.png",
    },
  ];

  return (
    <section className="bg-white py-20 ">
      <div className="w-[70%] mx-auto">
        <div className="flex flex-col gap-3 justify-center items-center w-[50%] mx-auto text-center">
          <h2 className="text-5xl text-gray-700 font-semibold ">Our Team</h2>
          <p className="text-gray-700 text-lg">
            We are comprised of experienced with passion for technology and
            commitment to customer satisfaction.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-10 py-20">
          {teamMenbers.map((member) => {
            return (
              <div className="flex flex-col gap-5 justify-center items-center bg-gray-50 py-10 px-0">
                <div>
                  <img src={member.img} alt={member.name} />
                </div>
                <div className="text-center flex flex-col gap-2">
                  <h1 className="text-3xl font-semibold text-gray-700">
                    {member.name}
                  </h1>
                  <h3 className="text-gray-700  text-lg">
                    {member.designation}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
