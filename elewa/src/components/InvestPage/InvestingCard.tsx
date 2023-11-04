const InvestingCard = () => {
  return (
    <section className="w-full p-[80px] mb-[120px]">
      <div className="flex flex-col sm:flex-col lg:flex-row  justify-center">
        <div className="mb-[60px] ">
          <img
            src="https://res.cloudinary.com/dyl3rncv3/image/upload/v1679983082/elewa-group-website/Images/invest-now_ftxg4z.jpg"
            alt="stakeholders_image"
            loading="lazy"
            className="rounded-[20px]"
          />
        </div>
        <div className="ml-1 md:ml-[150px]  font-primary mt-2 md:mt-[120px] ">
          <h3 className="text-3xl mb-10  md:w-[500px]">
            Investing in Elewa NV
          </h3>
          <p className="text-xl md:w-[500px]">
            From time to time, we offer investment opportunities (private equity
            & debt) to out community of investors. Interested to take part when
            this opportunity arrives?
          </p>
        </div>
      </div>
    </section>
  );
};

export default InvestingCard;
