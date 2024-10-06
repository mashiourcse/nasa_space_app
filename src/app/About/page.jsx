"use client";
import AboutCard from "@/components/About/AboutCard";
import { profileData } from "./data";
import { Spin } from "antd";
import { useState, useEffect } from "react";

export default function About() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [visibleCards, setVisibleCards] = useState(0); 

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1000); 

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isLoaded) {

      const interval = setInterval(() => {
        setVisibleCards((prev) => (prev < profileData.length ? prev + 1 : prev));
      }, 500); 

      return () => clearInterval(interval);
    }
  }, [isLoaded]);

  if (!isLoaded) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spin size="large" />
      </div>
    );
  }

  return (
    <>
      <div className="container mt-10 mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {profileData?.map((singleData, index) => (
            <div
              key={index}
              className={`w-full transition-opacity duration-500 ease-in-out transform ${
                index < visibleCards ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <AboutCard profileData={singleData} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
