import { Briefcase } from "lucide-react";

export default function Header() {
  return (
    <header className="text-center space-y-4">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
        Babu Reddy S
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-300">
        Software Engineer
      </p>
      <div className="flex items-center justify-center space-x-2 text-green-600 dark:text-green-400">
        <Briefcase size={20} />
        <span className="font-medium">Open to opportunities</span>
      </div>
    </header>
  );
}
