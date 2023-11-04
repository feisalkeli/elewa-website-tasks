const MissionCard = () => {
  return (
    <section className="w-full mb-[320px] mt-12">
      <div className="flex flex-col flex-wrap justify-center font-primaryr">
        <div className="flex justify-center mb-2 sm:mb-10">
          <h3 className="text-3xl md:text-[48px] font-semibold">
            Become part of our mission,
          </h3>
        </div>
        <div className="flex justify-center">
          <h3 className="text-3xl md:text-[48px] font-semibold">
            And Start <span className="font-extrabold">investing</span>
          </h3>
        </div>
      </div>
    </section>
  );
};

export default MissionCard;
