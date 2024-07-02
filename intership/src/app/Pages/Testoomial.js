import React from "react";

const Testoomial = () => {
  return (
    <div>
      <section className="py-16 px-[25%] bg-gray-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl text-white font-bold mb-8">
            1,749 remote teams have shared their experience with our app!
          </h2>
          <div className="grid overflow-auto h-96 no-scrollbar hover:overflow-scrol grid-cols-1 md:grid-cols-1 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white text-gray-800 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img
                  src="https://via.placeholder.com/50"
                  alt="Barry Young"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <h4 className="font-bold">Barry Young</h4>
              </div>
              <p>
                “Simply the best. Better than all the rest. I’d recommend this
                product to beginners and advanced users who want success.”
              </p>
            </div>
            {/* Testimonial 2 */}
            <div className="bg-gray-700 text-gray-100 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img
                  src="https://via.placeholder.com/50"
                  alt="Esther Allison"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <h4 className="font-bold">Esther Allison</h4>
              </div>
              <p>
                “Must have book for all, who want to be Product Designer or
                Interaction Designer.”
              </p>
            </div>
            {/* Testimonial 3 */}
            <div className="bg-white text-gray-800 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img
                  src="https://via.placeholder.com/50"
                  alt="Sarah Lee"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <h4 className="font-bold">Sarah Lee</h4>
              </div>
              <p>
                “This app has revolutionized the way our team operates. We
                couldn’t be happier with the results.”
              </p>
            </div>
            {/* Testimonial 4 */}
            <div className="bg-gray-700 text-gray-100 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img
                  src="https://via.placeholder.com/50"
                  alt="Michael Chen"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <h4 className="font-bold">Michael Chen</h4>
              </div>
              <p>
                “A game-changer for remote teams. Our productivity has soared
                since we started using this app.”
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testoomial;
