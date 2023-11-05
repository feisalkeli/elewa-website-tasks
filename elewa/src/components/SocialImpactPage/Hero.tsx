import { HeroComponentProps } from ".";

const Hero: React.FC<HeroComponentProps> = ({
  title,
  description,
  imageUrl,
}) => {
  return (
    <section
      className="h-[100vh] bg-cover md:bg-center bg-no-repeat  "
      id="hero"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      <div className="absolute top-[400px] ml-20 leading-1">
        <div className="mb-5  text-lg ">
          <p className="font-primary  text-white  ">{title}</p>
        </div>
        <div>
          <p className="font-primary text-[50px] text-white">{description}</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
