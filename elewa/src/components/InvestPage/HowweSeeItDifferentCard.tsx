import React from "react";

const HowweSeeItDifferentCard = () => {
  return (
    <section className="w-full p-[70px]">
      <div className="flex flex-col md:justify-center md:ml-[90px] lg:ml-[250px]">
        <div className=" font-primary mb-[70px] flex flex-col justify-start ">
          <h3 className="mb-8 text-5xl lg:text-7xl ">
            How we See It Differently
          </h3>
          <p className="text-xl max-w-[500px] md:w-full lg:text-2xl ">
            The global South is rapidly catching up with the "developed" world.
            It's time for you to get to know the rapid development, innovation
            and drive going on in this part of the world (East-Africa, South
            Asia and beyond).
          </p>
        </div>
        <div className="">
          <img
            src="https://res.cloudinary.com/dyl3rncv3/image/upload/c_scale,w_1280/v1675690306/elewa-group-website/Images/Mask_Group_17_rjkgrq.png"
            alt="nairobi-skyline"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default HowweSeeItDifferentCard;