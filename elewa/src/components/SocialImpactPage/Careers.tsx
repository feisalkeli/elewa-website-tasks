import OpenKnowledgeCard from "./OpenKnowledgeCard";

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
      <OpenKnowledgeCard
        title="(Social) business for the win"
        imageUrl="https://res.cloudinary.com/dyl3rncv3/image/upload/v1681306013/lady-impact_rnc9jy.jpg"
        description="With a young dynamic population that is eager to contribute to the global economy, East Africa has a lot to offer to the world. Now is the time to nurture sustainable, inclusive and scalable business. The rest will take care of itself."
      />
      {/*  */}
    </section>
  );
};

export default Careers;
