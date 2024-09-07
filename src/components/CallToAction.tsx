import React from "react";
import Image from "next/image";

const CallToAction = () => {
  return (
    <section className="relative bg-gray-800 h-64 md:h-80 mt-8">
      <Image
        src="/images/image-7.png"
        alt="Teamwork"
        layout="fill"
        objectFit="cover"
        className="opacity-70"
      />

      <div className="absolute inset-0 flex items-center justify-between p-6 md:p-12">
        <div className="text-white">
          <h2 className="text-3xl md:text-4xl font-bold">
            Let's work Together
          </h2>
          <p className="mt-4 text-sm md:text-base md:max-w-3xl max-w-44">
            Lorem ipsum dolor sit amet consectetur. Mattis cursus nulla ornare
            tristique quam ultricies nisi id nibh. Vivamus luctus viverra lorem
            ipsum dolor sit amet.
          </p>
        </div>

        <div>
          <button className="bg-white text-gray-800 px-4 py-2 md:px-6 md:py-3 rounded-lg shadow-md hover:bg-gray-100">
            View Vacancies
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
