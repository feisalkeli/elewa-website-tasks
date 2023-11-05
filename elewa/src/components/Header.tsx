const Header = () => {
  return (
    <section className="mt-12 p-[20px]  w-full fixed " id="header">
      <header>
        <div className="flex flex-1 justify-between items-center mr-12">
          {/* Image logo */}
          <div className="object-contain">
            <img src="" alt="" />
          </div>
          <div className="flex items-end hidden lg:block">
            <ul className="flex flex-wrap items-end justify-between gap-10 font-primary text-md text-white">
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
                <a href="/invest-page">Invest</a>
              </li>
            </ul>

            {/* Hamburger Menu */}
            <div
              className="hidden max-lg:block bg-transparent  hover:cursor-pointer"
              id="hamburger-icon"
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
        </div>
      </header>
      {/* White border that spans across the page */}
      <div className="mt-4">
        <div className="border-t-4 border-white border-[0]"></div>
      </div>
    </section>
  );
};

export default Header;
