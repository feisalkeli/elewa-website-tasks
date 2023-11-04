const CreativeHub = () => {
  return (
    <section className="w-full p-[80px] md:mb-[120px]">
      <div className="flex flex-col md:flex-row justify-between md:ml-[80px] lg:ml-[120px] ">
        <div className="font-primary mb-10 md:mt-[70px] xl:gap-3   ">
          <h3 className="text-3xl md:text-[40px] mb-[70px]">
            The Elewa Creative Hub
          </h3>
          <p className="md:w-[500px] text-2xl">
            Coming soon; The Elewa Creative Hub Lies at the heart of our
            organization. A two-acre property at the center of Nairobi's
            creative district, the hub connects all Elewa's Activities under a
            single banner.
          </p>
          <br />
          <p className="md:w-[500px] text-2xl">
            Through partnerships with creative community, the Elewa Hub will
            organize vibrant activites that bring talents from different fields
            (tech, business, art, fashion) together to nurture continuous
            innovation.
          </p>
        </div>
        <div className="ml-10">
          <img
            src="https://res.cloudinary.com/dyl3rncv3/image/upload/v1679983012/elewa-group-website/Images/creative-hub-image_dd6o8o.jpg"
            alt="Nairobi_Skyline"
            className="rounded-[20px]"
          />
        </div>
      </div>
    </section>
  );
};

export default CreativeHub;
