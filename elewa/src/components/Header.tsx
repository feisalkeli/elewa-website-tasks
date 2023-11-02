import Hero from "./Hero";

const Header = () => {
  return (
    <section className="mt-12  p-[20px]  " id="header">
      <header className="z-10 w-full">
        <div className="flex justify-between items-center ">
          {/* Image logo */}
          <div className="object-contain ">
            <img src="" alt="elewa image logo" />
          </div>
          <div className="flex items-end  hidden lg:block">
            <ul className="flex flex-wrap items-end justify-between gap-10 font-primary text-sm text-white">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/social-impact">Social Impact</a>
              </li>
              <li>
                <a href="/invest">Invest</a>
              </li>
              <li>
                <a href="/venture-labs">Venture Labs</a>
              </li>
              <li>
                <a href="/brands">Brands</a>
              </li>
              <li>
                <a href="/careers">Careers</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
          {/* Hamburger Menu */}

          <div
            className="hidden max-lg:block hover:cursor-pointer"
            id="hamburger-icon "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
              />
            </svg>
          </div>
        </div>
        <Hero />
      </header>
    </section>
  );
};

export default Header;
