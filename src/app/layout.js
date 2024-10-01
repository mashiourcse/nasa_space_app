"use client";
import { useEffect, useState } from "react";
import store from "@/redux/store/store";
import "./globals.css";
import { Provider } from "react-redux";
import { Toaster } from "sonner";
import Navbar from "@/components/Navbar";

export default function RootLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <html data-theme="valentine" lang="en">
      <body
        className={`flex min-h-screen w-screen flex-auto flex-col justify-between`}
      >
        {isLoading ? (
          <div>loading</div>
        ) : (
          <div className="">
            <Provider store={store}>
            <Toaster expand={true} richColors />
            <Navbar/>
           <div>{children}</div>
           </Provider> 
          </div>
          )
         }

      </body>
    </html>
  );
}
