import HolisticSolutionsCard from "./HolisticSolutionsCard";

const WeCareCard = () => {
  return (
    <section className="w-full p-[40px] mt-[50px]  ">
      <div className="flex justify-start font-primary font-bold">
        <h3 className=" text-5xl">We Care!</h3>
      </div>
      <div className="flex flex-col sm:flex-row justify-between mt-4 ">
        <div className="font-primary font-thin max-w-[700px] lg:max-w-[900px]  mb-5 mr-[100px]  ">
          <p className="text-2xl  lg:text-4xl">
            Elewa is a mission-driven organization. We make use of our
            cooperative and shared culture to drive the needle for the
            development of people and environment. We care about our growth, but
            also care deeply about the context surrounding us.
          </p>
        </div>
        <div className="font-primary  font-thin max-w-[700px] lg:max-w-[900px] ">
          <p className="text-2xl lg:text-4xl">
            Our investments are therefore not limited to internal ones, but
            contribute heavily to our community and environment. From training
            the next scout leaders on sustainable practices, to bridging the
            employment gap for junior software developers.
          </p>
        </div>
      </div>
      <HolisticSolutionsCard />
    </section>
  );
};

export default WeCareCard;
