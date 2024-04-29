import { ChevronDown } from "lucide-react";

interface ChevronAnimatedProps {
  isActive: boolean;
  rotate: () => void;
}

/**
 * Animated UI chevron component
 * @param isActive - state for managing transform property
 * @param rotate - function that triggers chevron rotate animation
 */
const ChevronAnimated: React.FC<ChevronAnimatedProps> = ({
  isActive,
  rotate,
}) => {
  return (
    <div className="flex items-center">
      <ChevronDown
        onClick={rotate}
        className={`mt-2 h-8 w-8 transform p-1 text-accent-600 transition-all hover:cursor-pointer ${isActive ? "rotate-180" : ""}`}
      />
    </div>
  );
};

export default ChevronAnimated;
