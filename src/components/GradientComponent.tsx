import Image from "next/image";
import React from "react";

const GradientComponent = () => {
  return (
    <section className="container mx-auto p-4 my-10 bg-card-2">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl font-bold text-black mb-4">Lorem Ipsum</h1>
          <p className="text-3xl text-gray-700 mb-4">dolor sit consectetur</p>
          <p className="text-gray-600 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            mattis velit nulla, in hac habitasse platea dictumst. Fusce non
            venenatis velit. Proin luctus malesuada mauris vitae mattis.
            Pellentesque iaculis elit ut lorem, et varius ipsum dictum.
          </p>
        </div>

        <div className="relative w-full md:w-1/2 bg-white rounded-lg shadow-lg p-4 flex flex-col items-center">
          <div className="  mt-4 rounded-md shadow-md text-center w-full">
            <Image
              src="/images/image-2.png"
              alt="card"
              width={400}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GradientComponent;
