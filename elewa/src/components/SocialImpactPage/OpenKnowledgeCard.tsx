import React from "react";

const OpenKnowledgeCard = () => {
  return (
    <section className="text-white flex items-center justify-between mt-40 ml-[30px] sm:ml-[50px] md:ml-[300px] mb-[100px]">
      {/* Card Image */}
      <div className="flex flex-col md:flex-row  justify-between ml-12">
        <div className="text-black font-primary  md:ml-[10px]">
          <div className="">
            <h1 className="text-[30px] md:text-[60px] ">
              A cooperative mindset
            </h1>
            <p className="mt-10 text-[30px] md:text-[30px] max-w-[400px]   ">
              Open knowledge What we learn, we share. Through community events,
              open knowledge repositories, regular teaching moments (everyone a
              teacher) and academic partnerships. We build for today, with a
              lens on tomorrow.
            </p>
          </div>
        </div>
        <div className="ml-[20px] md:ml-[150px] ">
          <img
            src="https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690302/elewa-group-website/Images/unnamed_1_m3dvll.png"
            alt="bufaalo_image"
            className="object-contain rounded-lg ml-1  "
            style={{ height: "690px" }}
          />
        </div>
      </div>
    </section>
  );
};

export default OpenKnowledgeCard;
