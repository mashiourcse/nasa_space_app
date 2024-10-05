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
    <div className="max-w-xs mx-auto bg-white shadow-lg rounded-full overflow-hidden border-4 border-gray-200 p-6">
      <div className="flex flex-col items-center">
        <img
          className="w-50 h-50 rounded-full object-cover mb-4 border-4 border-gray-300"
          src={profilePic}
          alt={name}
        />
        <h2 className="text-xl font-bold text-center">{name}</h2>
        <p className="text-md font-bold text-center">{role}</p>
        <p className="text-gray-700 text-center">{expertise}</p>
        <p className=" text-gray-500 text-center">
          {major}
        </p>
        <p className=" text-gray-500 text-center">
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
