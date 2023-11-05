const Footer = () => {
  return (
    <footer className="bg-black h-[30vh] rounded-t-[39px]">
      <div>
        <div className="border-4 border-white border-t-white"></div>
      </div>

      <div className="flex flex-wrap justify-between text-white max-lg:flex-col ">
        <div className="flex flex-1 justify-between m-7 text-lg ">
          <div className="hidden md:block">
            <p className="underline">Headquarters</p>
            <p className="max-w-[200px]">
              The Promenade, 19 General Mathenge Rd Nairobi, Kenya
            </p>
          </div>
          <div className="hidden md:block">
            <p className="underline">Contacts</p>
            <p>
              T +254 78 92 27 755 <br />E info@elewa.ke
            </p>
          </div>
          <div className="flex flex-col">
            <p className="underline">Navigation</p>
            <a href="">About Us</a>
            <a href="">Social Impact</a>
            <a href="">Invest</a>
          </div>

          <div className="flex flex-col hidden md:block">
            <p className="underline">Brands</p>
            <a href="">Elewa</a>
            <a href="">Italanta</a>
            <a href="">Venture labs</a>
          </div>
          <div className="flex flex-col">
            <p className="underline">Privacy</p>
            <p>Terms and conditions</p>
            <p>Cookie preferences</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
