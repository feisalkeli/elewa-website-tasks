const Hero = () => {
  return (
    <section
      className="h-[100vh] bg-cover md:bg-center bg-no-repeat  "
      id="hero"
      style={{
        backgroundImage: `url("https://res.cloudinary.com/dyl3rncv3/image/upload/v1679910469/elewa-group-website/hero-Images/pexels-bg-edit_bb4znx.jpg")`,
      }}
    >
      <div className="absolute top-[400px] ml-20 leading-1">
        <div className="mb-5  text-lg ">
          <p className="font-primary  text-white  ">
            Scaling impact. Beyond the norm
          </p>
        </div>
        <div>
          <p className="font-primary text-[50px] text-white">
            Human and Environmental <br />
            Impact through Social <br /> Enterprise
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
