type StatsItemProps = {
  value: string;
  label?: string;
};

const StatsItem: React.FC<StatsItemProps> = ({ value, label }) => (
  <div className="flex flex-col items-center mb-4 md:mb-0 md:mx-4">
    <span className="text-3xl font-bold text-black">{value}</span>
    {label && (
      <>
        {/* <div className="border-r-8 border-gray-300 w-full my-2 md:hidden"></div> */}
        <span className="text-lg font-medium text-gray-600">{label}</span>
      </>
    )}
  </div>
);

export default StatsItem;
