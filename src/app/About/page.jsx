"use client";
import { useGetTestProxyQuery } from "@/redux/Feature/NASA/planet";
import Link from "next/link";

export default function About() {
 // console.log(process.env.NEXT_PUBLIC_OPENAI_API_KEY);

 const { data, isLoading, error } = useGetTestProxyQuery(undefined);

 console.log(data);
  return (
    <>
      {/* <p>Hi</p>
      <div className={styles.card}>
        <Link href="/">From here you may go back to your main PAGE</Link>
      </div> */}
      <div 
      
      >
        This is about page
      </div>
    </>
  );
}
