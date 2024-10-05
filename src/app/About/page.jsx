"use client";
import AboutCard from "@/components/About/AboutCard";
import { profileData } from "./data";

export default function About() {
  return (
    <>
      <div className="container mt-10 mx-auto p-4">
        {/* <h1 className="text-3xl font-bold text-center mb-6">About Us</h1> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {profileData?.map((singleData, index) => (
            <AboutCard key={index} profileData={singleData} />
          ))}
        </div>
      </div>
    </>
  );
}
