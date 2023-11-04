const Hero = () => {
  return (
    <section
      className="h-[100vh] bg-cover md:bg-center bg-no-repeat filter   "
      id="hero"
      style={{
        backgroundImage: `url("https://res.cloudinary.com/dyl3rncv3/image/upload/v1679650530/elewa-team_digqu3.jpg")
        `,
      }}
    >
      <div className="absolute top-[400px] ml-20 leading-1">
        <div className="mb-5  text-lg ">
          <p className="font-primary  text-white  ">
            HOW TO RECOGNIZE AN ELEWA MEMBER
          </p>
        </div>
        <div>
          <p className="font-primary text-[50px] text-white">
            Dependable, Creative, Supportive, Open Minded and Fun*
          </p>
        </div>
        <div className="mt-[400px] font-primary">
          <p className="text-white">*SERIOUS WHEN IT MATTERS</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
