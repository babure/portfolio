import { calculateDuration, experiences } from "./Experience";

export default function About() {
  const totalExperience = experiences.reduce((acc, exp) => {
    const { totalDays } = calculateDuration(exp.startDate, exp.endDate);
    return acc + totalDays;
  }, 0);

  const totalYears = (totalExperience / 365).toFixed(1);

  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
        About Me
      </h2>
      <p className="text-gray-600 dark:text-gray-400">
        I'm a software engineer with {totalYears} years of experience in
        React.js, Spring Boot, SQL, and MongoDB. I enjoy creating efficient web
        applications and exploring new technologies.
      </p>
    </section>
  );
}
