import React from "react";

const About = () => {
  return (
    <div>
      <section className="text-gray-600 shadow-md m-4 bg-gray-50 rounded-b-[100px] body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://themewagon.github.io/brainwave-io/v1.0.0/assets/img/Hero/Team.webp"
            />
          </div>
          <div className="lg:flex-grow uppercase md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-top text-center">
            <ul className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Collaborate with
              <br className="hidden lg:inline-block" />
              team members
            </ul>
            <p className="mb-8 leading-relaxed">
              We share common trends and strategies for improving your rental
              income
            </p>
            <ul>
              <li className="title-font list-disc sm:text-xl text-3xl mb-4 font-medium text-gray-900">
                Project Based Groups
              </li>
            </ul>
            <p className="mb-8 leading-relaxed text-gray-700">
              You can use this module to monitor ongoing projects seamlessly.
            </p>
            <ul>
              <li className="title-font list-disc sm:text-xl text-3xl mb-4 font-medium text-gray-900">
                Unlimited Video Meetings
              </li>
            </ul>
            <p className="mb-8 leading-relaxed text-gray-700">
              Conduct unlimited video meetings with us for better business
              operations.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
