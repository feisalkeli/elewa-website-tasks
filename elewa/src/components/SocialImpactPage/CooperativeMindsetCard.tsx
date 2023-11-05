import { CooperativeMindsetProps } from ".";

const CooperativeMindsetCard: React.FC<CooperativeMindsetProps> = ({
  title,
  description,
  imageUrl,
}) => {
  return (
    <section className="w-full p-[80px] md:mb-[120px] bg-stone-200 rounded-b-[20px]">
      <div className="flex flex-col md:flex-row justify-between items-center  ">
        <div className="font-primary mb-10 md:mt-[70px] xl:gap-3 ">
          <h3 className="text-3xl md:text-[40px] lg:text-[50px] mb-[70px]">
            {title}
          </h3>
          <p className="md:w-[300px]  xl:w-[900px] text-2xl md:text-md  lg:leading-10  ">
            {description}
          </p>
        </div>
        <div className="">
          <img
            src={imageUrl}
            alt="Nairobi_Skyline"
            className="rounded-[20px] object-contain "
          />
        </div>
      </div>
    </section>
  );
};

export default CooperativeMindsetCard;
