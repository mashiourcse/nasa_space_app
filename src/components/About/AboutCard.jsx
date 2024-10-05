import React from "react";

const AboutCard = () => {
  const profilePic = "/images/sarah.png"; 
  const name = "John Doe";
  const expertise = "Full Stack Developer";
  const major = "Computer Science";
  const university = "XYZ University";
  const linkedinLink = "https://www.linkedin.com/in/johndoe";
  const techStack = ["JavaScript", "React", "Node.js", "Express", "MongoDB"];

  return (
    <div className="max-w-xs mx-auto bg-white shadow-lg rounded-full overflow-hidden border-4 border-gray-200 p-6">
      <div className="flex flex-col items-center">
        <img
          className="w-50 h-50 rounded-full object-cover mb-4 border-4 border-gray-300"
          src={profilePic}
          alt={name}
        />
        <h2 className="text-xl font-bold mb-2 text-center">{name}</h2>
        <p className="text-gray-700 text-center">{expertise}</p>
        <p className="mt-2 text-gray-500 text-center">
          {major}, {university}
        </p>
        <a
          href={linkedinLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-blue-500 hover:underline text-center"
        >
          View LinkedIn Profile
        </a>
        <div className="mt-4 text-center">
          <h3 className="font-semibold">Tech Stack:</h3>
          <ul className="list-disc list-inside mt-2">
            {techStack.map((tech, index) => (
              <li key={index} className="text-gray-700">
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
