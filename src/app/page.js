"use client";
import Login from "./(pages)/Login/page";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Login />
      <Link href="/chatbot">Go to the chatbot page from here</Link>
    </>
  );
}
