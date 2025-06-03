import reactIcon from "../../assets/react.svg";
import springBootIcon from "../../assets/springboot.svg";
import mySqlIcon from "../../assets/mysql.svg";
import mongoDBIcon from "../../assets/mongodb.svg";
import jsIcon from "../../assets/js.svg";
import javaIcon from "../../assets/java.svg";
import htmlIcon from "../../assets/html.svg";
import cssIcon from "../../assets/css.svg";
import gitIcon from "../../assets/git.svg";
import dockerIcon from "../../assets/docker.svg";
import awsIcon from "../../assets/aws.svg";
import awsDarkIcon from "../../assets/aws-dark.svg";
const SkillIcon = ({ name, icon }) => (
  <div className="flex flex-col items-center">
    <div className="w-16 h-16 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-full p-3">
      <img
        src={icon}
        alt={`${name} logo`}
        className="w-full h-full object-contain"
      />
    </div>
    <span className="mt-2 text-sm text-gray-600 dark:text-gray-400">
      {name}
    </span>
  </div>
);

export default function Skills({ isDarkMode }) {
  const skills = [
    { name: "Java", icon: javaIcon },
    { name: "React", icon: reactIcon },
    { name: "Spring Boot", icon: springBootIcon },
    { name: "MySql", icon: mySqlIcon },
    { name: "HTML", icon: htmlIcon },
    { name: "CSS", icon: cssIcon },
    { name: "JavaScript", icon: jsIcon },
    { name: "Git", icon: gitIcon },
    { name: "Docker", icon: dockerIcon },
    { name: "AWS", icon: isDarkMode ? awsIcon : awsDarkIcon },
    { name: "MongoDB", icon: mongoDBIcon },
  ];

  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
        Skills
      </h2>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {skills.map((skill) => (
          <SkillIcon key={skill.name} name={skill.name} icon={skill.icon} />
        ))}
      </div>
    </section>
  );
}
