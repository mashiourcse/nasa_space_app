"use client";
import { useEffect, useState } from "react";
import store from "@/redux/store/store";
import "./globals.css";
import { AnimatedBackground } from 'animated-backgrounds';

import { Provider } from "react-redux";
import { Toaster } from "sonner";
import Navbar from "@/components/Navbar";
import RightSideBar from "@/components/RightSideBar";

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
        <AnimatedBackground animationName="geometricShapes" />

      <body
        className={`flex min-h-screen w-screen flex-auto flex-col justify-between`}
      >
        {isLoading ? (
          <div></div>
        ) : (
          <div className="">
            <Provider store={store}>
            <Toaster expand={true} richColors />
            <Navbar/>
            {/* <RightSideBar/> */}
           <div>{children}</div>
           </Provider> 
          </div>
          )
         }

      </body>
    </html>
  );
}
