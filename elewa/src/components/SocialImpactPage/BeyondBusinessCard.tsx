import React from "react";
import { BeyondBusinessProps } from ".";

const BeyondBusinessCard: React.FC<BeyondBusinessProps> = ({
  imageUrl,
  title,
  description,
}) => {
  return (
    <section className="w-full  p-[80px]  ">
      <div className="flex flex-col sm:flex-col lg:flex-row justify-between items-center gap-9">
        <div className="mb-[60px]">
          <img src={imageUrl} loading="lazy" className="" />
        </div>
        <div className="font-primary items-center md:mt-[70px]  ">
          <div>
            <h3 className="text-3xl md:text-[40px] lg:text-[50px] mb-[20px]">
              {title}
            </h3>
          </div>

          <div className="md:w-[300px]  xl:w-[900px] text-2xl md:text-md ">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeyondBusinessCard;
