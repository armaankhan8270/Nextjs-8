import React from "react";

const Statistcs = () => {
  return (
    <div>
      <section className="text-gray-900 bg-white body-font">
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-6xl text-2xl font-medium title-font mb-4 text-gray-900">
              Statistics
            </h1>
          </div>
          <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
              <div className="px-4 py-6 rounded-lg">
                <h2 className="title-font font-medium text-3xl text-gray-900">
                  2.7K
                </h2>
                <p className="leading-relaxed">
                  Offices are available on different countries
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
              <div className="px-4 py-6 rounded-lg">
                <h2 className="title-font font-medium text-3xl text-gray-900">
                  1.3K
                </h2>
                <p className="leading-relaxed">
                  Seats are available right now with support
                </p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 sm:w-1/2 w-full">
              <div className="px-4 py-6 rounded-lg">
                <h2 className="title-font font-medium text-3xl text-gray-900">
                  74
                </h2>
                <p className="leading-relaxed">
                  People are using our co-work spaces right now
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Statistcs;
