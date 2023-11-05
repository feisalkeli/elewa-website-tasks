const OpenKnowledgeCard = () => {
  return (
    <section className="w-full p-[80px] md:mb-[120px] bg-black rounded-b-[20px]">
      <div className="flex flex-col md:flex-row justify-between items-center  ">
        <div className="font-primary mb-10 md:mt-[70px] xl:gap-3 ">
          <h3 className="text-3xl md:text-[40px] lg:text-[50px] mb-[70px] text-white">
            Open knowledge
          </h3>
          <p className="md:w-[300px]  xl:w-[900px] text-2xl md:text-md  lg:leading-10 text-white  ">
            Open knowledge What we learn, we share. Through community events,
            open knowledge repositories, regular teaching moments (everyone a
            teacher) and academic partnerships. We build for today, with a lens
            on tomorrow.
          </p>
        </div>
        <div className="">
          <img
            src="https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690302/elewa-group-website/Images/unnamed_1_m3dvll.png"
            alt="Speaker"
            className="rounded-[20px] object-contain "
          />
        </div>
      </div>
    </section>
  );
};

export default OpenKnowledgeCard;
