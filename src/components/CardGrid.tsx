import Image from "next/image";

const CardGrid = () => {
  const cards = [
    {
      imageUrl: "/images/grid-1.png",
      title: "Consectetur adipiscing elit",
      height: 300,
      width: 500,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis velit nulla. In hac habitasse platea dictumst.",
    },
    {
      imageUrl: "/images/grid-2.png",
      title: "Consectetur adipiscing elit",
      height: 300,
      width: 500,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis velit nulla. In hac habitasse platea dictumst.",
    },
    {
      imageUrl: "/images/grid-3.png",
      title: "Consectetur adipiscing elit",
      height: 300,
      width: 500,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis velit nulla. In hac habitasse platea dictumst.",
    },
    {
      imageUrl: "/images/grid-4.png",
      title: "Consectetur adipiscing elit",
      height: 300,
      width: 500,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis velit nulla. In hac habitasse platea dictumst.",
    },
  ];

  return (
    <section className=" bg-slate-100 py-8">
      <div className="container mx-auto px-4 ">
        <div className=" mb-8">
          <h1 className="text-3xl font-light text-gray-800">
            Lorem ipsum dolor sit amet,
            <br /> consectetur
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-3 mb-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative rounded-lg overflow-hidden shadow-lg"
            >
              <Image
                src={card.imageUrl}
                alt={card.title}
                width={card.width}
                height={card.height}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-4">
                <div className="text-white">
                  <h3 className="text-lg font-semibold">{card.title}</h3>
                  <p className="text-sm">{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardGrid;
