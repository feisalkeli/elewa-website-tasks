const Hero = () => {
  return (
    <section
      className="h-[100vh] bg-cover md:bg-center bg-no-repeat  "
      id="hero"
      style={{
        backgroundImage: `url("https://res.cloudinary.com/dyl3rncv3/image/upload/v1679982347/elewa-group-website/hero-Images/dark-to-light_xrat5g.jpg")`,
      }}
    >
      <div className="absolute top-[400px] ml-20 leading-1">
        <div className="mb-5  text-lg ">
          <p className="font-primary  text-white  ">Trade,not aid</p>
        </div>
        <div>
          <p className="font-primary text-[50px] text-white">
            Southern innovations addressing global problems
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
