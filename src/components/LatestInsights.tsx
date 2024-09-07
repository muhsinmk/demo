import Image from "next/image";
import React from "react";

const insights = [
  {
    id: 1,
    title: "Fusce non venenatis velit",
    date: "12 Oct 2023",
    description: "Proin luctus malesuada mauris vitae mattis",
    image: "/images/image-6.png",
  },
  {
    id: 2,
    title: "Fusce non venenatis velit",
    date: "10 Sep 2023",
    description: "Proin luctus malesuada mauris vitae mattis",
    image: "/images/image-4.png",
  },
  {
    id: 3,
    title: "Fusce non venenatis velit",
    date: "22 Aug 2023",
    description: "Proin luctus malesuada mauris vitae mattis",
    image: "/images/image-5.png",
  },
];

const LatestInsights = () => {
  return (
    <div className="container mx-auto px-4 py-2">
      <h2 className="text-4xl font-bold ">Latest Insights</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {insights.map((insight) => (
          <div
            key={insight.id}
            className="relative bg-gray-800 rounded-lg shadow-lg overflow-hidden"
          >
            <Image
              src={insight.image}
              alt={insight.title}
              width={400}
              height={300}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-4">
              <span className="text-sm text-gray-300">{insight.date}</span>
              <h3 className="text-white text-lg font-semibold">
                {insight.title}
              </h3>
              <p className="text-gray-200 text-sm mt-2">
                {insight.description}
              </p>
              <button className="text-sm text-white underline mt-2">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestInsights;
