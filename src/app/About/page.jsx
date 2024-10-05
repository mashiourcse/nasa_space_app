"use client";
import AboutCard from "@/components/About/AboutCard";
import Link from "next/link";

export default function About() {
 // console.log(process.env.NEXT_PUBLIC_OPENAI_API_KEY);

  return (
    <>
      <div className="container mx-auto p-4">
      {/* <h1 className="text-3xl font-bold text-center mb-6">About us</h1> */}
      <AboutCard />
      
    </div>
    </>
  );
}
