import React from "react";

const KeyFigures = () => {
  return (
    <section className="w-full">
      <div className="flex  flex-col  ">
        <div className="font-primary text-center mb-[30px] md:mb-[190px]">
          <h3 className="text-5xl font-light">Key Figures</h3>
        </div>
        <div className="flex flex-col justify-center sm:flex-row sm:ml-[30px]  p-[65px] overflow-hidden  ">
          <div className=" flex flex-col  w-[240px] h-[300px] md:w-[400px] md:h-[300px] border border-solid border-[#1e293b] rounded-2xl   ">
            <div className="mt-8 text-center font-primary font-bold mb-[50px]">
              <h1 className="text-4xl">
                1.3<span className="text-sm">M</span>
              </h1>
            </div>

            <div className=" flex flex-wrap font-primary   ">
              <p className="">
                Approx. number of Kenyan talents reaching the age of 18 in 2022
              </p>
            </div>
          </div>
          <div className=" flex flex-col  w-[240px] h-[300px] md:w-[400px] md:h-[300px] border border-solid border-[#1e293b] rounded-2xl   ">
            <div className="mt-8 text-center font-primary font-bold mb-[50px]">
              <h1 className="text-4xl">
                5<span className="text-sm">M</span>
              </h1>
            </div>

            <div className=" flex flex-wrap font-primary   ">
              <p className="">
                Number of East-Africans(EAC) reaching the age of 18 in 2022
              </p>
            </div>
          </div>

          <div className=" flex flex-col  w-[240px] h-[300px] md:w-[400px] md:h-[300px] border border-solid border-[#1e293b] rounded-2xl   ">
            <div className="mt-8 text-center font-primary font-bold mb-[50px]">
              <h1 className="text-4xl">
                2022<span className="text-sm"></span>
              </h1>
            </div>

            <div className=" flex flex-wrap font-primary   ">
              <p className="">
                Democratic Republic of Congo joins the East African Community
              </p>
            </div>
          </div>

          <div className=" flex flex-col  w-[240px] h-[300px] md:w-[400px] md:h-[300px] border border-solid border-[#1e293b] rounded-2xl   ">
            <div className="mt-8 text-center font-primary font-bold mb-[50px]">
              <h1 className="text-4xl">
                1.5<span className="text-sm">M</span>
              </h1>
            </div>

            <div className=" flex flex-wrap font-primary   ">
              <p className="">
                The number of unfilled IT vacancies in the US and EU markets
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyFigures;
