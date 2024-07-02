import React from "react";

const Header = () => {
  return (
    <div>
      <div className="px-12 flex justify-between bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <nav className="top-0 fixed ">
          <header className="text-gray-300 bg-transparent rounded bg-fixed  body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
              <a className="flex title-font font-medium items-center text-gray-100 mb-4 md:mb-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-10 h-10 text-white p-2 bg-white-500 rounded-full"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
                <span className="ml-3 text-xl">Brainwave.io </span>
              </a>
              <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                <a className="mr-5 hover:text-gray-100">Home</a>
                <a className="mr-5 hover:text-gray-100">About us</a>
                <a className="mr-5 hover:text-gray-100">Support</a>
                <a className="mr-5 hover:text-gray-100">Pricing</a>
                <a className="mr-5 hover:text-gray-100">Contact</a>
              </nav>
              <button className="inline-flex text-end items-center text-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
                Get Started Now
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 ml-1"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </header>
        </nav>
        {/* section 2 */}
        <section className="text-gray-100 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 body-font">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-6xl text-5xl mb-4 font-medium text-gray-100">
                Manage your remote <br className="hidden lg:inline-block" />
                team work
              </h1>
              <p className="mb-8 text-white text-2xl leading-relaxed">
                With lots of unique blocks, you can easily build a page without
                coding. Build your next consultancy website within few minutes
              </p>
              <div className="flex justify-center">
                <button className="inline-flex text-white bg-orange-500 rounded-xl border-0 py-6 text-2xl px-12 focus:outline-none hover:bg-purple-600 rounded text-lg">
                  Explore More
                </button>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                src="https://themewagon.github.io/brainwave-io/v1.0.0/assets/img/Hero/Frame.webp"
              />
            </div>
          </div>
          <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto flex items-center md:flex-row flex-col">
              <div className="flex flex-col md:pr-10 md:mb-0 mb-6 pr-0 w-full md:w-auto md:text-left text-center">
                <h2 className="text-xs text-purple-100 tracking-widest font-medium title-font mb-1">
                  ROOF PARTY POLAROID
                </h2>
                <h1 className="md:text-3xl text-2xl font-medium title-font text-gray-100">
                  Master Cleanse Reliac Heirloom
                </h1>
              </div>
              <div className="flex md:ml-auto md:mr-0 mx-auto items-center flex-shrink-0 space-x-4">
                <button className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-6 h-6"
                    viewBox="0 0 512 512"
                  >
                    <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z" />
                  </svg>
                  <span className="ml-4 flex items-start flex-col leading-none">
                    <span className="text-xs text-gray-100 mb-1">
                      GET IT ON
                    </span>
                    <span className="title-font font-medium">Google Play</span>
                  </span>
                </button>
                <button className="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="w-6 h-6"
                    viewBox="0 0 305 305"
                  >
                    <path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z" />
                    <path d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z" />
                  </svg>
                  <span className="ml-4 flex items-start flex-col leading-none">
                    <span className="text-xs text-gray-100 mb-1">
                      Download on the
                    </span>
                    <span className="title-font font-medium">App Store</span>
                  </span>
                </button>
              </div>
            </div>
          </section>
        </section>
        {/* Statistic */}
      </div>
    </div>
  );
};

export default Header;
