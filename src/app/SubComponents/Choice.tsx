export const Choice = () => {
  return (
    <div className="w-full mt-[3rem] bg-[#ececec] py-16">
      <div className="w-full text-center mb-16">
        <h1 className="text-2xl md:text-3xl lg:text-[2.6rem] font-bold text-black">
          Why Our Mind Care Consultants are
        </h1>
        <h1 className="text-2xl md:text-3xl lg:text-[2rem] text-black">
          the Best Choice
        </h1>
      </div>
      <div className="w-full flex flex-col mt-[2rem] lg:flex-row  gap-5 items-center justify-center  ">
        {/* Card 1 */}
        <div className="w-full max-w-sm lg:max-w-xs h-auto bg-white text-center py-5  rounded-xl border-2 border-black">
          <img
            className="w-20 h-20 mx-auto mt-4"
            src="/carplan.png"
            alt="Personalized Care Plans"
          />
          <h1 className="text-black text-lg md:text-xl mt-4 font-bold">
            Personalized Care Plans
          </h1>
          <p className="text-black mt-2 px-4">
            Our consultants create individualized care plans tailored to each
            patient unique needs, ensuring effective and meaningful results.
          </p>
        </div>

        {/* Card 2 */}
        <div className="w-full max-w-sm lg:max-w-md h-[22rem] bg-[#107c68] text-center py-8 rounded-xl">
          <img
            className="w-[10rem] h-[8rem] mx-auto"
            src="/pro.png"
            alt="Experienced Professionals"
          />
          <h1 className="text-white text-lg md:text-2xl mt-4 font-bold">
            Experienced Professionals
          </h1>
          <p className="text-white mt-2 px-4">
            Our team is composed of highly trained experts in mental health,
            providing compassionate and evidence-based care you can trust.
          </p>
        </div>

        {/* Card 3 */}
        <div className="w-full max-w-sm lg:max-w-xs h-auto bg-white text-center py-5 rounded-xl border-2 border-black">
          <img
            className="w-20 h-20 mx-auto mt-4"
            src="/sup.png"
            alt="Comprehensive Support"
          />
          <h1 className="text-black text-lg md:text-xl mt-4 font-bold">
            Comprehensive Support
          </h1>
          <p className="text-black mt-2 px-4">
            We offer a broad range of services, covering every aspect of mental
            well-being, making us your go-to for complete mental health support.
          </p>
        </div>
      </div>
    </div>
  );
};
