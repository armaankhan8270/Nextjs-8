import React from "react";

const Remote = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow uppercase md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-top text-center">
            <ul className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Organize remote
              <br className="hidden lg:inline-block" />
              team fast &amp; easily.
            </ul>
            <p className="mb-8 leading-relaxed">
              Organizing and managing your remote teams has never been this
              easy!
            </p>
            <ul>
              <li className="title-font list-disc sm:text-xl text-3xl mb-4 font-medium text-gray-900">
                Create Unlimited Teams
              </li>
            </ul>
            <p className="mb-8 leading-relaxed text-gray-700">
              Create unlimited teams and boost productivity with efficient
              collaboration.
            </p>
            <ul>
              <li className="title-font list-disc sm:text-xl text-3xl mb-4 font-medium text-gray-900">
                Hasslefree Chat with Everyone
              </li>
            </ul>
            <p className="mb-8 leading-relaxed text-gray-700">
              With unique and simple UIs, keep yourself connected across all the
              teams.
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://themewagon.github.io/brainwave-io/v1.0.0/assets/img/Hero/Collaborator.webp"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Remote;
