const HowToGetThere = () => {
  return (
    <section className="w-full bg-stone-300 rounded-t-[20px] p-[70px] font-primary">
      <div className="flex flex-col md:flex-row justify-between">
        <div className=""></div>
        <div className="mr-10">
          <h3 className="text-4xl mb-10">How To Get There</h3>
          <p className="max-w-[450px] text-lg lg:max-w-[700px]">
            Based in the heart of Westlands, Nairobi, Kenya, we are easily
            accessible from all parts of the city.
          </p>
          <br />
          <p className="max-w-[450px] text-lg lg:max-w-[700px]">
            Not in town? Teams, Meets or Zoom are our second name. Book an
            appointment today via{" "}
            <span className="text-blue-700">
              <a href="">contact@elewa.ke!</a>
            </span>{" "}
            Get directions
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowToGetThere;
