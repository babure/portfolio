import { Building2, Calendar } from "lucide-react";
import { differenceInDays, format } from "date-fns";

export const calculateDuration = (startDate, endDate) => {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();
  const totalDays = differenceInDays(end, start);
  const years = totalDays / 365;
  return {
    totalDays,
    formattedYears: years.toFixed(1),
  };
};

export const experiences = [
  {
    title: "Software Engineer",
    company: "Avekshaa Technologies",
    startDate: "2022-10-01",
    endDate: null,
    description: [
      "Built Zenovia end-to-end with Python/FastAPI — real-time voice AI interviews on LiveKit and Deepgram, OpenRouter LLM reports, and Razorpay billing across 4+ plan tiers.",
      "Developed HuLA, a low-code test automation platform: 20+ Spring Boot REST APIs, JWT/RBAC for 3 roles, and 15+ React screens with an AI agent that turns plain-English prompts into executable test scripts.",
      "Delivered DEM digital experience monitoring covering ~50 applications and 50+ servers, with synthetic checks, frontend agents, and AI-assisted RCA that cut MTTR by ~40%.",
      "Collaborated with product, QA, and DevOps in Agile/Scrum across 100+ sprint cycles to plan, prioritize, and ship features.",
    ],
  },
];

export default function Experience() {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
        Work Experience
      </h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => {
          const { formattedYears } = calculateDuration(
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
              <ul className="mt-2 text-gray-600 dark:text-gray-400 list-disc list-inside">
                {exp.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
