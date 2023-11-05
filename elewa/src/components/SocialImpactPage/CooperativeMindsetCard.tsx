const CooperativeMindsetCard = () => {
  return (
    <section className="w-full p-[80px] md:mb-[120px] bg-stone-200 rounded-b-[20px]">
      <div className="flex flex-col md:flex-row justify-between items-center  ">
        <div className="font-primary mb-10 md:mt-[70px] xl:gap-3 ">
          <h3 className="text-3xl md:text-[40px] lg:text-[50px] mb-[70px]">
            A cooperative mindset
          </h3>
          <p className="md:w-[300px]  xl:w-[900px] text-2xl md:text-md  lg:leading-10  ">
            Elewa has one shared objective; To unlock the true potential of
            individuals, teams, and the community. We believe strongly in the
            power of sharing ideas and continuously strive to grow each other
            and ourselves. Internally, but also within the larger communities in
            which we are active.
          </p>
        </div>
        <div className="">
          <img
            src="https://res.cloudinary.com/dyl3rncv3/image/upload/v1681308135/buffelo_i60xeu.jpg"
            alt="Nairobi_Skyline"
            className="rounded-[20px] object-contain "
          />
        </div>
      </div>
    </section>
  );
};

export default CooperativeMindsetCard;
