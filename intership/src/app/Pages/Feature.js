import React from "react";

const Feature = () => {
  return (
    <div>
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-12 text-white">
            We made this app to solve your problems.
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gray-900 p-6 rounded-lg">
              <div className="flex justify-center mb-4">
                <svg
                  className="w-10 h-10 text-green-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 7l10 5 10-5-10-5-10 5z" />
                  <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">
                Unlimited Projects
              </h3>
              <p className="text-gray-400">
                Manage multiple projects at once and for seamless business
                operation.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="bg-gray-900 p-6 rounded-lg">
              <div className="flex justify-center mb-4">
                <svg
                  className="w-10 h-10 text-green-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 7l10 5 10-5-10-5-10 5z" />
                  <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">
                Team Management
              </h3>
              <p className="text-gray-400">
                Manage your cross-functional teams better than ever with our
                easily manageable app.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="bg-gray-900 p-6 rounded-lg">
              <div className="flex justify-center mb-4">
                <svg
                  className="w-10 h-10 text-green-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 7l10 5 10-5-10-5-10 5z" />
                  <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">
                File Sharing
              </h3>
              <p className="text-gray-400">
                Easily share files where necessary and keep them safe with
                enhanced security and protection.
              </p>
            </div>
            {/* Feature 4 */}
            <div className="bg-gray-900 p-6 rounded-lg">
              <div className="flex justify-center mb-4">
                <svg
                  className="w-10 h-10 text-green-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 7l10 5 10-5-10-5-10 5z" />
                  <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">
                Video Meeting
              </h3>
              <p className="text-gray-400">
                Conduct video meetings and keep records for further use with its
                cloud storage.
              </p>
            </div>
            {/* Feature 5 */}
            <div className="bg-gray-900 p-6 rounded-lg">
              <div className="flex justify-center mb-4">
                <svg
                  className="w-10 h-10 text-green-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 7l10 5 10-5-10-5-10 5z" />
                  <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">
                Time Tracking
              </h3>
              <p className="text-gray-400">
                Track time to ensure meeting all the deadlines and never lag
                behind managing multiple projects.
              </p>
            </div>
            {/* Feature 6 */}
            <div className="bg-gray-900 p-6 rounded-lg">
              <div className="flex justify-center mb-4">
                <svg
                  className="w-10 h-10 text-green-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 7l10 5 10-5-10-5-10 5z" />
                  <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">
                Payment System
              </h3>
              <p className="text-gray-400">
                With its easy payment system, create invoices and get paid all
                at the same place.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Feature;
