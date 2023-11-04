const StakeHolders = () => {
  return (
    <section className="w-full  p-[80px]  ">
      <div className="flex flex-col sm:flex-col lg:flex-row  justify-center">
        <div className="mb-[60px]">
          <img
            src="https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690303/elewa-group-website/Images/IMG_6523_vabpyo.png"
            alt="stakeholders_image"
            loading="lazy"
            className=""
          />
        </div>
        <div className="ml-1 md:ml-[150px]  font-primary mt-2 md:mt-[120px] ">
          <h3 className="text-3xl mb-10  md:w-[500px]">
            Elewa NV, a multi-stakeholder cooperation
          </h3>
          <p className="text-xl md:w-[500px]">
            At the heart of Elewa lies the structure Elewa NV. Based in
            Brussels, Belgium, Elewa NV is a private holding company which
            controls the assets of all Elewa activities.
          </p>
          <br />
          <p className="text-xl md:w-[500px]">
            Elewa NV is owned and controlled by Elewa's founder, a small
            community of investors which share in the vision of Elewa and Elewa
            employees based throughout the activities of the group.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StakeHolders;
