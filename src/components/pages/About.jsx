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
        I’m a software engineer who enjoys building full-stack web applications, everything from clean UIs to scalable backend services.
        I don’t chase hobbies; I just live in the moment, code when inspiration hits, and unwind with some good anime.
      </p>
    </section>
  );
}
