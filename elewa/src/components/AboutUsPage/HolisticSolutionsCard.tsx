import React from "react";

const HolisticSolutionsCard = () => {
  return (
    <section className="w-full mt-[120px]">
      <div className="flex flex-col flex-grow md:flex-row gap-2 ">
        <div className="flex-grow">
          <img
            src="https://res.cloudinary.com/dyl3rncv3/image/upload/v1680180166/elewa-group-website/Icons/PNG/Holistic_118_ylipr0.png"
            alt="holistic solution image"
          />
          <div className="font-primary   ">
            <h3 className="text-4xl ">Holistic Solutions</h3>
            <p className="max-w-[300px] lg:max-w-[700px] text-2xl mt-4 font-thin">
              We go beyond a simple patch-up but develop lasting solutions
              through holistic design.
            </p>
          </div>
        </div>
        <div className="flex-grow">
          <img src="https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690301/elewa-group-website/Icons/PNG/coorperative_kzlzrg.png" />
          <div className="font-primary ">
            <h3 className="text-4xl">Impact</h3>
            <p className="max-w-[300px] lg:max-w-[700px] text-2xl mt-4 font-thin">
              Impact as a direct, or indirect, result. All our respective
              organizations have underlying theories of change.
            </p>
          </div>
        </div>
        <div className="flex-grow">
          <img
            src="https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690299/elewa-group-website/Icons/PNG/Opendata_fe7h3j.png"
            alt="holistic solution image"
          />
          <div className="font-primary">
            <h3 className="text-4xl">Open data</h3>
            <p className="max-w-[300px] lg:max-w-[700px] text-2xl mt-4 font-thin">
              Sharing is caring. We share what we learn. As proof, we've
              open-sourced all our internal projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HolisticSolutionsCard;
