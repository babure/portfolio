import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-4">
      <a
        href="mailto:babureddys003@gmail.com"
        className="flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
      >
        <Mail size={16} className="mr-1" />
        <span className="text-sm">babureddys003@gmail.com</span>
      </a>
      <div className="flex items-center text-gray-600 dark:text-gray-400">
        <Phone size={16} className="mr-1" />
        <span className="text-sm">+91 8431017886</span>
      </div>
      <div className="flex items-center text-gray-600 dark:text-gray-400">
        <MapPin size={16} className="mr-1" />
        <span className="text-sm">Banglore, KA, IN</span>
      </div>
    </div>
  );
}
