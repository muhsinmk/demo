"use client";

import NavBar from "@/components/NavBar";
import React from "react";

const Hero = () => {
  return (
    <section className="bg-hero-img bg-cover bg-center h-[50vh] md:h-screen">
      <NavBar />

      <div className="relative h-full">
        <div className="absolute bottom-0 left-0 p-6 sm:p-4 md:p-6 lg:p-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 md:mb-8">
            Lorem ipsum dolor sit amet
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-full sm:max-w-2xl md:max-w-4xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            mattis velit nulla. In hac habitasse platea dictumst. Fusce non
            venenatis velit. Proin luctus malesuada mauris vitae mattis.
            Pellentesque iaculis elit lorem, et varius ipsum dictum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Donec mattis
            velitnulla. In hac habitasse platea dictumst.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
