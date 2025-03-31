// components/TopicCard.tsx
import { useState } from "react";

interface Topic {
  title: string;
  description: string;
  image: {
    src: string;
  };
  points: string[];
}

interface TopicCardProps {
  topic: Topic;
}

const TopicCard: React.FC<TopicCardProps> = ({ topic }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative h-[450px] rounded-2xl overflow-hidden shadow-lg transform transition-all duration-500 hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-500"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.8) 100%), url(${topic.image.src})`,
          filter: isHovered ? "brightness(0.7)" : "brightness(1)",
        }}
      />

      <div className="relative h-full flex flex-col p-8 text-white">
        <div
          className={`flex-1 flex flex-col items-center justify-${
            isHovered ? "start" : "center"
          } text-center transition-all duration-500`}
        >
          <h3 className="text-2xl font-bold mb-4">{topic.title}</h3>

          <p
            className={`text-gray-200 mb-6 transition-opacity duration-500 ${
              isHovered ? "opacity-0 absolute" : "opacity-100"
            }`}
          >
            {topic.description}
          </p>

          <div
            className={`transition-all duration-500 ${
              isHovered
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10 absolute"
            } text-left w-full mt-6`}
          >
            <ul className="space-y-4">
              {topic.points.map((point, idx) => (
                <li key={idx} className="flex items-start space-x-3">
                  <span className="text-teal-400 flex-shrink-0 mt-1">•</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopicCard;
