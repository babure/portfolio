import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-gray-200 dark:border-gray-700 pt-8 pb-4">
      <div className="flex justify-center space-x-6">
        <a
          href="https://github.com/babure"
          target="/"
          className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
        >
          <Github size={24} />
          <span className="sr-only">GitHub</span>
        </a>
        <a
          href="https://www.linkedin.com/in/babureddy-s-4264971a4/"
          target="/"
          className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
        >
          <Linkedin size={24} />
          <span className="sr-only">LinkedIn</span>
        </a>
      </div>
      <p className="mt-4 text-center text-gray-500 dark:text-gray-400 text-sm">
        © {new Date().getFullYear()} Babu Reddy S. All rights reserved.
      </p>
    </footer>
  );
}
