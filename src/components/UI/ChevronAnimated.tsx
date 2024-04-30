import { ChevronDown } from "lucide-react";

interface ChevronAnimatedProps {
  isActive: boolean;
  rotate: () => void;
  direction: "down-up" | "right-left";
}

/**
 * Animated UI chevron component
 * @param isActive - state for managing transform property
 * @param rotate - function that triggers chevron rotate animation
 * @param diraction - for managing direction of rotation
 */
const ChevronAnimated: React.FC<ChevronAnimatedProps> = ({
  isActive,
  rotate,
  direction,
}) => {
  const initialDegree = direction === "down-up" ? "rotate-0" : "-rotate-90";
  const transitionDegree =
    direction === "down-up" ? "rotate-[180deg]" : "rotate-[90deg]";

  return (
    <div onClick={rotate} className="flex items-center p-1">
      <ChevronDown
        className={`mt-3 h-6 w-6 transform ease-in-out ${initialDegree} text-accent-600 transition-all hover:cursor-pointer ${isActive ? transitionDegree : ""}`}
      />
    </div>
  );
};

export default ChevronAnimated;
