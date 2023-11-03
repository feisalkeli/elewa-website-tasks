import React from "react";
import ConversationCard from "./ConversationCard";

const Careers = () => {
  return (
    <section className="bg-black rounded-bl-xl ">
      <div className=" flex flex-wrap justify-center text-white text-[20px] text-center font-primary ">
        <div className="mt-20 mr-12">
          <p className="text-[55px]">733+</p>
          <h3>
            Pepole <br />
            Trained
          </h3>
        </div>
        <div className="mt-20 mr-12">
          <p className="text-[55px]">733k</p>
          <h3>
            Careers <br />
            Launched
          </h3>
        </div>
        <div className="mt-20 mr-12">
          <p className="text-[55px]">200+</p>
          <h3>
            Projects <br />
            Finished
          </h3>
        </div>
        <div className="mt-20 mr-12">
          <p className="text-[55px]">56</p>
          <h3>Investors</h3>
        </div>
      </div>

      {/*  */}
      <div className="mt-[90px] p-20">
        <ConversationCard />
      </div>
      <div className="mt-[90px] p-20">
        <ConversationCard />
      </div>
    </section>
  );
};

export default Careers;
