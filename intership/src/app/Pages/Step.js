import React from "react";

const Step = () => {
  return (
    <div>
      <div className="w-full max-w-5xl space-y-32 mx-auto p-6 bg-white rounded-lg">
        <h1 className="mb-4 text-center mb-12 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          How does it work?
        </h1>
        <div className="flex flex-col md:flex-row justify-between items-start space-y-6 md:space-y-0 md:space-x-6">
          {/* Step 1 */}
          <div className="flex-1 flex flex-col items-center text-center p-4 rounded-lg">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500 text-white text-xl font-bold mb-2 text-white">
              1
            </div>
            <h3 className="text-lg font-bold mb-2">Install App</h3>
            <p className="text-gray-600">
              Install the app with a single click.--------&gt;
            </p>
          </div>
          {/* Step 2 */}
          <div className="text-6xl">-----&gt;</div>
          <div className="flex-1 flex flex-col items-center text-center p-4 rounded-lg">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-orange-500 text-white text-xl font-bold mb-2 text-white">
              2
            </div>
            <h3 className="text-lg font-bold mb-2">Add Team Members</h3>
            <p className="text-gray-600">
              Start with adding team members to your channels.
            </p>
          </div>
          <div className="text-6xl">-----&gt;</div>
          {/* Step 3 */}
          <div className="flex-1 flex flex-col items-center text-center p-4 bg--50 rounded-lg">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-500 text-white text-xl font-bold mb-2 text-white">
              3
            </div>
            <h3 className="text-lg font-bold mb-2">Start Rolling</h3>
            <p className="text-gray-600">
              Start operating your business in a simpler way.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step;
