import { GraduationCap, Calendar } from "lucide-react";

export default function Education() {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
        Education
      </h2>
      <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
        <div className="flex items-center space-x-2">
          <GraduationCap
            size={20}
            className="text-gray-700 dark:text-gray-300"
          />
          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
            Bachelor of Computer Science And Engineering
          </h3>
        </div>
        <p className="mt-1 text-gray-600 dark:text-gray-400">
          Nagarjuna College of Engineering and Technology
        </p>
        <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-500 mt-1">
          <Calendar size={16} />
          <span>2018 - 2022</span>
        </div>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Relevant coursework: Data Structures, Algorithms, Web Development,
          Database Management Systems, Software Engineering
        </p>
      </div>
    </section>
  );
}
