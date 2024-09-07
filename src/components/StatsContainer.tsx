import StatsItem from "./shared/StatsItem";

interface StatsData {
  value: string;
  label?: string;
}

const statsData: StatsData[] = [
  { value: "8 Years", label: "of Success" },
  { value: "200+", label: "Members" },
  { value: "155+", label: "All Over The USA" },
  { value: "200k", label: "Satisfied Clients" },
];

const StatsContainer: React.FC = () => (
  <div className="container mx-auto p-4 my-10">
    <div className="flex flex-col items-center md:flex-row md:justify-around">
      {statsData.map((item, index) => (
        <StatsItem key={index} value={item.value} label={item.label} />
      ))}
    </div>
  </div>
);

export default StatsContainer;
