const Footer = () => {
  return (
    <footer className="bg-black h-[100vh] rounded-t-[29px] ">
      <div>
        <div className="border-4 border-white border-t-white"></div>
      </div>

      <div className="flex flex-wrap justify-between text-white max-lg:flex-col ">
        <div className="flex flex-1 justify-between  m-7">
          <p>Headquarters</p>
          <p>Contacts</p>
          <p>Navigation</p>
          <p>Brands</p>
          <p>Privacy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
