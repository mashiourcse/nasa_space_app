import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const AboutCard = ({profileData}) => {
  // const profilePic = "/images/sarah.png"; 
  // const name = "John Doe";
  // const expertise = "Full Stack Developer";
  // const major = "Computer Science";
  // const university = "XYZ University";
  // const linkedinLink = "https://www.linkedin.com/in/johndoe";
const {profilePic,name,role,expertise,major,university,github,linkedinLink} = profileData;

  return (
    <div className="w-65 mx-auto bg-white shadow-lg rounded-full overflow-hidden border-4 border-gray-200 p-1">
      <div className="container flex flex-col items-center">
        <img
          className="w-50 h-50 rounded-full object-cover mb-4 border-4 border-gray-300"
          src={profilePic}
          alt={name}
        />
        <h2 className="text-lg font-bold text-center mt-2 mb-2">{name}</h2>
        <p className="text-md font-bold text-center">{role}</p>
        <p className="text-md text-gray-800 text-center mb-2">{expertise}</p>
        <p className="text-sm text-gray-800 text-center mb-2">
          {major}
        </p>
        <p className="text-sm text-gray-800 text-center font-semibold">
           {university}
        </p>
        <div>
        <a
          href={linkedinLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-blue-500 hover:underline text-center"
        >
          <BsLinkedin size={"30"}/>
          
        </a>
        {"   "}
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-black-500 hover:underline text-center"
        >
          <BsGithub size={"30"}/>
          
        </a>
        </div>
       
        {/* <BsGithub/> */}
        <div className="mt-4 text-center">
          {/* <h3 className="font-semibold">Tech Stack:</h3>
          <ul className="list-disc list-inside mt-2">
            {techStack.map((tech, index) => (
              <li key={index} className="text-gray-700">
                {tech}
              </li>
            ))}
          </ul> */}
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
