import { Building2, Calendar } from "lucide-react";
import { differenceInDays, format } from "date-fns"; // You'll need date-fns library to calculate days difference

export default function Experience() {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Avekshaa Technologies",
      startDate: "2022-10-06", // YYYY-MM-DD format
      endDate: null, // Null if currently working
      description:
        "Led the development of a high-traffic e-commerce platform using React.js and MongoDB. Implemented real-time inventory management system, increasing efficiency by 30%.",
    },
  ];

  const calculateDuration = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = endDate ? new Date(endDate) : new Date(); // If no end date, use current date
    const totalDays = differenceInDays(end, start);
    const years = totalDays / 365;
    return {
      totalDays,
      formattedYears: years.toFixed(1), // Format to one decimal place
    };
  };

  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
        Work Experience
      </h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => {
          const { totalDays, formattedYears } = calculateDuration(
            exp.startDate,
            exp.endDate
          );
          return (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm"
            >
              <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                {exp.title}
              </h3>
              <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 mt-1">
                <Building2 size={16} />
                <span>{exp.company}</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-500 mt-1">
                <Calendar size={16} />
                <span>
                  {format(new Date(exp.startDate), "MMM yyyy")} -{" "}
                  {exp.endDate
                    ? format(new Date(exp.endDate), "MMM yyyy")
                    : "Present"}
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mt-1">
                Duration: {formattedYears} years
              </p>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                {exp.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
