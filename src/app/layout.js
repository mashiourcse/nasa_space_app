"use client";
import { useEffect, useState } from "react";
import store from "@/redux/store/store";
import "./globals.css";
import dynamic from "next/dynamic"; // Dynamically import component
import { Provider } from "react-redux";
import { Toaster } from "sonner";
import Navbar from "@/components/Navbar";

// Dynamically import AnimatedBackground to prevent SSR issues
const AnimatedBackground = dynamic(() => import('animated-backgrounds').then(mod => mod.AnimatedBackground), {
  ssr: false, // Disable SSR for this component
});

export default function RootLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <html data-theme="lofi" lang="en">
      <head>
        <title>Exoplaning Exoplanets
        </title>
      </head>
      <body
        className={`flex min-h-screen w-screen flex-auto flex-col justify-between`}
      >
        {isLoading ? (
          <div></div> // Add a loading state here if needed
        ) : (
          <div className="">
            <Provider store={store}>
              <Toaster expand={true} richColors />
              <Navbar />
              {/* Optional sidebar */}
              {/* <RightSideBar /> */}
              
              {/* Render the animated background after client-side rendering */}
              <AnimatedBackground animationName="geometricShapes" />

              <div>{children}</div>
            </Provider>
          </div>
        )}
      </body>
      
    </html>
  );
}
