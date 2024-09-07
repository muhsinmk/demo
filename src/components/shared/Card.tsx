interface CardProps {
  title: string;
  heading: string;
  content: string;
  backgroundColor?: string;
  isLastCard?: boolean;
}

const Card: React.FC<CardProps> = ({
  title,
  heading,
  content,
  backgroundColor = "bg-lightGreen",
  isLastCard = false,
}) => (
  <div
    className={`p-4 rounded-lg shadow-md ${backgroundColor} ${
      isLastCard ? "border-0 border-gray-400" : ""
    }`}
  >
    <div className="flex items-center mb-2">
      <span
        className={`text-lg font-bold mr-2 ${
          isLastCard ? "text-white" : "text-black"
        }`}
      >
        {title}
      </span>
    </div>
    <div className="flex-grow border-t border-gray-300"></div>
    <h2
      className={`text-xl font-bold my-3 ${
        isLastCard ? "text-white" : "text-black"
      }`}
    >
      {heading}
    </h2>
    <p className={isLastCard ? "text-white" : "text-black"}>{content}</p>
  </div>
);

export default Card;
