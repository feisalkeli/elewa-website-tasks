import { WeCareComponentProps } from ".";
import HolisticSolutionsCard from "./HolisticSolutionsCard";

const WeCareCard: React.FC<WeCareComponentProps> = ({
  title,
  text1,
  text2,
}) => {
  return (
    <section className="w-full p-[40px] mt-[50px]  ">
      <div className="flex justify-start font-primary font-bold">
        <h3 className=" text-5xl">{title}</h3>
      </div>
      <div className="flex flex-col sm:flex-row justify-between mt-4 ">
        <div className="font-primary font-thin max-w-[700px] lg:max-w-[900px]  mb-5 mr-[100px]  ">
          <p className="text-2xl  lg:text-4xl">
            {text1}
          </p>
        </div>
        <div className="font-primary  font-thin max-w-[700px] lg:max-w-[900px] ">
          <p className="text-2xl lg:text-4xl">
            {text2}
          </p>
        </div>
      </div>
      <HolisticSolutionsCard />
    </section>
  );
};

export default WeCareCard;
