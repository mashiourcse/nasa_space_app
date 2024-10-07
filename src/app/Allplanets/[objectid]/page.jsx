"use client";

import ChatbotOnSide from "@/components/ChatBot/ChatbotOnSide";
import { useGetSinglePlanetDataQuery } from "@/redux/Feature/NASA/planet";
import { Card, Spin } from "antd";
import "antd/dist/reset.css";
import { useState, useEffect } from "react";


export default function PlanetDetails({ params }) {
  const { objectid } = params;
  const { data, isLoading, error } = useGetSinglePlanetDataQuery(objectid);
  const [planetType, setPlanetType] = useState("");
 
  useEffect( ()=>{

    setPlanetType(history.state.planetType)
  },[history])
 // console.log(myState);
  const changePlName = (name) => {
    let newName = "";
    for (let i = 0; i < name.length; i++) {
      if (name[i] === " ") {
        newName += "_";
      } else {
        newName += name[i];
      }
    }
    return newName;
  };

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-screen">
        <Spin size="large" />
      </div>
    );
  if (error)
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-center text-lg text-red-500">Error loading data</p>
      </div>
    );

  return (
    <div className="container mx-auto px-4 py-8">
      {data && (
        <Card
          title={
            <div className="text-center text-2xl font-bold">
              {data[0]?.pl_name}
            </div>
          }
          bordered={false}
          className="shadow-lg mb-8"
        >
          {/* Responsive Grid Container */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card
              bordered={true}
              className="mb-4 shadow-lg border border-gray-300"
            >
              <div className="flex flex-col justify-between h-full">
                <p className="text-center mb-2 text-lg font-bold">
                  Discovery Method
                </p>
                <p className="text-center text-base">
                  {data[0]?.discoverymethod || "Unknown"}
                </p>
              </div>
            </Card>

            <Card
              bordered={true}
              className="mb-4 shadow-lg border border-gray-300"
            >
              <div className="flex flex-col justify-between h-full">
                <p className="text-center mb-2 text-lg font-bold">
                  Discovery Year
                </p>
                <p className="text-center text-base">
                  {data[0]?.disc_year || "Unknown"}
                </p>
              </div>
            </Card>

            {/* <Card
              bordered={true}
              className="mb-4 shadow-lg border border-gray-300"
            >
              <div className="flex flex-col justify-between h-full">
                <p className="text-center mb-2 text-lg font-bold">
                  Right Ascension (RA)
                </p>
                <p className="text-center text-base">
                  {data[0]?.rastr || "Unknown"}
                </p>
              </div>
            </Card> */}

            {/* <Card
              bordered={true}
              className="mb-4 shadow-lg border border-gray-300"
            >
              <div className="flex flex-col justify-between h-full">
                <p className="text-center mb-2 text-lg font-bold">Declination (Dec)</p>
                <p className="text-center text-base">{data[0]?.decstr || "Unknown"}</p>
              </div>
            </Card> */}

            <Card bordered={true} className="mb-4 shadow-lg border border-gray-300">
              <div className="flex flex-col justify-between h-full">
                <p className="text-center mb-2 text-lg font-bold">Host Name</p>
                <p className="text-center text-base">{data[0]?.hostname || "Unknown"}</p>
              </div>
            </Card>

            <Card bordered={true} className="mb-4 shadow-lg border border-gray-300">
              <div className="flex flex-col justify-between h-full">
                <p className="text-center mb-2 text-lg font-bold">Telescope</p>
                <p className="text-center text-base">{data[0]?.disc_telescope || "Unknown"}</p>
              </div>
            </Card>

            <Card bordered={true} className="mb-4 shadow-lg border border-gray-300">
              <div className="flex flex-col justify-between h-full">
                <p className="text-center mb-2 text-lg font-bold">Discovery Locale</p>
                <p className="text-center text-base">{data[0]?.disc_locale || "Unknown"}</p>
              </div>
            </Card>

            <Card bordered={true} className="mb-4 shadow-lg border border-gray-300">
              <div className="flex flex-col justify-between h-full">
                <p className="text-center mb-2 text-lg font-bold">Discovery Facility</p>
                <p className="text-center text-base">{data[0]?.disc_facility || "Unknown"}</p>
              </div>
            </Card>

            {/* <Card bordered={true} className="col-span-1 sm:col-span-2 lg:col-span-3 mb-4 shadow-lg border border-gray-300">
              <div className="flex flex-col justify-between h-full">
                <p className="text-center mb-2 text-lg font-bold">Discovery Reference</p>
                <p className="text-center text-base">
                  <a
                    href="https://ui.adsabs.harvard.edu/abs/2005ApJ...624..372K/abstract"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Konacki et al. 2005
                  </a>
                </p>
              </div>
            </Card> */}
          </div>
        </Card>
      )}

      {/* Exosky iframe */}
      <div className="flex justify-center">
  <div className="w-full xl:4/4 lg:w-4/4 md:w-3/4 sm:w-full xs:w-full relative aspect-[16/9] md:aspect-[4/3] sm:aspect-[1/1]">
    <iframe
      src={`https://eyes.nasa.gov/apps/exo/#/planet/${changePlName(data[0]?.pl_name)}`}
      title="NASA Eyes"
      className="absolute top-0 left-0 w-full h-full shadow-lg"
      allow="fullscreen"
      
      style={{ border: 0 }}
    />
  </div>
  <div className="ml-4">
  {!isLoading && <ChatbotOnSide planetData={data[0]} />}
  </div>
</div>




    </div>
  );
}
