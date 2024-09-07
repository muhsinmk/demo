const GraduationCard = () => {
  return (
    <section className="flex items-center justify-center my-14">
      <div className="bg-card-1 bg-cover bg-center h-screen w-11/12 rounded-3xl relative ">
        <div className="absolute bottom-0 left-0 p-6 sm:p-4 md:p-6 lg:p-14">
          <button className="p-4 bg-white rounded-full">
            <svg
              className="w-8 h-8 text-black"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M3 22V2l18 10L3 22z" />
            </svg>
          </button>
          <h2 className="text-3xl font-light text-gray-300 mt-3">
            Lorem ipsum dolor sit amet.
          </h2>
          <p className="text-gray-300 mt-2">Sanchez Alexis</p>
          <p className="text-gray-300 text-sm">CEO & Founder of Demo</p>
        </div>
      </div>
    </section>
  );
};

export default GraduationCard;
