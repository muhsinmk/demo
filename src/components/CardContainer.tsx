import React from "react";
import Card from "./shared/Card";

const CardContainer = () => {
  return (
    <section>
      <div className="container mx-auto p-4 text-left">
        <h1 className="text-black text-3xl font-light">Lorem Ipsum</h1>
        <p className="text-black max-w-screen-md mt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis
          velit nulla. In hac habitasse platea dictumst. Fusce non venenatis
          velit. Proin luctus malesuada mauris vitae mattis. Pellentesque
          iaculis elit lorem, et varius ipsum dictum.
        </p>
      </div>

      <div className="container mx-auto p-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card
          title="01"
          heading="Lorem ipsum dolor sit amet, consectetur"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis velit nulla. In hac habitasse platea dictumst. Fusce non venenatis velit. Proin luctus malesuada mauris vitae mattis. Pellentesque iaculis elit lorem, et varius ipsum dictum a. Etiam congue non sem et efficitur. Donec in dolor nec tellus iaculis sagittis. Sed sit amet aliquam augue.."
        />

        <Card
          title="02"
          heading="Lorem ipsum dolor sit amet, consectetur"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis velit nulla. In hac habitasse platea dictumst. Fusce non venenatis velit. Proin luctus malesuada mauris vitae mattis. Pellentesque iaculis elit lorem, et varius ipsum dictum a. Etiam congue non sem et efficitur. Donec in dolor nec tellus iaculis sagittis. Sed sit amet aliquam augue."
        />

        <Card
          title="03"
          heading="Lorem ipsum dolor sit amet, consectetur"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis velit nulla. In hac habitasse platea dictumst. Fusce non venenatis velit. Proin luctus malesuada mauris vitae mattis. Pellentesque iaculis elit lorem, et varius ipsum dictum a. Etiam congue non sem et efficitur. Donec in dolor nec tellus iaculis sagittis. Sed sit amet aliquam augue.."
          isLastCard={true}
          backgroundColor="bg-darkBlue"
        />
      </div>
    </section>
  );
};

export default CardContainer;
