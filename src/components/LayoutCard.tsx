const LayoutCard = () => {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h1 className="text-4xl font-light text-gray-800 mb-4 ">
            Lorem ipsum dolor sit amet, <br />
            consectetur
          </h1>
          <p className="text-gray-600 mb-6 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            mattis velit nulla. In hac habitasse platea dictumst. Fusce non
            venenatis velit. Proin luctus malesuada mauris vitae mattis.
            Pellentesque iaculis elit lorem, et varius ipsum dictum a. Etiam
            congue non sem et efficitur. Donec in dolor nec tellus iaculis
            sagittis. Sed sit amet aliquam augue. Praesent auctor, purus non
            convallis accumsan, nibh odio gravida felis, vitae mollis massa
            lectus a neque. Mauris mollis elit quis iaculis iaculis. Vestibulum
            molestie nisl eget aliquet scelerisque. Vivamus efficitur dui eget
            velit interdum, non dapibus nisi fringilla. Mauris fermentum
            venenatis volutpat. Quisque efficitur ultricies erat eget rutrum.
            Phasellus feugiat quam eget est dapibus, non eleifend justo
            fermentum. Sed et commodo arcu, id euismod dui.
          </p>
        </div>

        <div className="space-y-4 ">
          <div className=" p-2 border-l border-black">
            <h3 className="text-lg font-semibold text-gray-800">Lorem ipsum</h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              mattis velit nulla. Praesent lectus malesuada...
            </p>
          </div>
          <div className="flex-grow border-t border-gray-300"></div>
          <div className="p-2 border-l border-black">
            <h3 className="text-lg font-semibold text-gray-800">Lorem ipsum</h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              mattis velit nulla. Praesent lectus malesuada...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LayoutCard;
