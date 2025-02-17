import { Briefcase } from "lucide-react";
import { calculateDuration, experiences } from "./Experience";

export default function Header() {
  const totalExperience = experiences.reduce((acc, exp) => {
    const { totalDays } = calculateDuration(exp.startDate, exp.endDate);
    return acc + totalDays;
  }, 0);

  const totalYears = (totalExperience / 365).toFixed(1);

  return (
    <header className="text-center space-y-4">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
        Babu Reddy S
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-300">
        Software Engineer ({totalYears} years)
      </p>
      <div className="flex items-center justify-center space-x-2 text-green-600 dark:text-green-400">
        <Briefcase size={20} />
        <span className="font-medium">Open to opportunities</span>
      </div>
    </header>
  );
}
