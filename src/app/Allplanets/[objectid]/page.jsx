"use client";

import { useGetSinglePlanetDataQuery } from "@/redux/Feature/NASA/planet";
import { Card, Spin } from "antd";
import "antd/dist/reset.css";

export default function PlanetDetails({ params }) {
  const { objectid } = params;
  const { data, isLoading, error } = useGetSinglePlanetDataQuery(objectid);

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

  if (isLoading) return <div className="flex justify-center items-center h-screen">
  <Spin size="large" />
</div>;
  if (error) return <div className="flex justify-center items-center h-screen">
  <p className="text-center text-lg text-red-500">Error loading data</p>
</div>;

  return (
    <div className="container mx-auto px-4 py-8">
      {/* <h1 className="text-3xl font-bold text-center mb-6">Planet Details</h1> */}

      {data && (
        <Card
        title={<div className="text-center text-2xl font-bold">{data[0]?.pl_name}</div>} 
        bordered={false}
        className="shadow-lg mb-8"
      >
        {/* Grid Container */}
        <div className="grid grid-cols-3 gap-4">
          {/* <p className="mb-2">
            <strong>Object ID:</strong> {data[0]?.objectid}
          </p> */}
         <Card bordered={true} className="mb-4 shadow-lg border border-gray-300">
    <div className="flex flex-col justify-between h-full">
      <p className="text-center mb-2 text-lg font-bold">Discovery Method</p>
      <p className="text-center text-base">{data[0]?.discoverymethod || 'Unknown'}</p>
    </div>
  </Card>

  <Card bordered={true} className="mb-4 shadow-lg border border-gray-300">
    <div className="flex flex-col justify-between h-full">
      <p className="text-center mb-2 text-lg font-bold">Discovery Year</p>
      <p className="text-center text-base">{data[0]?.disc_year || 'Unknown'}</p>
    </div>
  </Card>

  <Card bordered={true} className="mb-4 shadow-lg border border-gray-300">
    <div className="flex flex-col justify-between h-full">
      <p className="text-center mb-2 text-lg font-bold">Right Ascension (RA)</p>
      <p className="text-center text-base">{data[0]?.rastr || 'Unknown'}</p>
    </div>
  </Card>

  <Card bordered={true} className="mb-4 shadow-lg border border-gray-300">
    <div className="flex flex-col justify-between h-full">
      <p className="text-center mb-2 text-lg font-bold">Declination (Dec)</p>
      <p className="text-center text-base">{data[0]?.decstr || 'Unknown'}</p>
    </div>
  </Card>

  <Card bordered={true} className="mb-4 shadow-lg border border-gray-300">
    <div className="flex flex-col justify-between h-full">
      <p className="text-center mb-2 text-lg font-bold">Host Name</p>
      <p className="text-center text-base">{data[0]?.hostname || 'Unknown'}</p>
    </div>
  </Card>

  <Card bordered={true} className="mb-4 shadow-lg border border-gray-300">
    <div className="flex flex-col justify-between h-full">
      <p className="text-center mb-2 text-lg font-bold">Telescope</p>
      <p className="text-center text-base">{data[0]?.disc_telescope || 'Unknown'}</p>
    </div>
  </Card>

  <Card bordered={true} className="mb-4 shadow-lg border border-gray-300">
    <div className="flex flex-col justify-between h-full">
      <p className="text-center mb-2 text-lg font-bold">Discovery Locale</p>
      <p className="text-center text-base">{data[0]?.disc_locale || 'Unknown'}</p>
    </div>
  </Card>

  <Card bordered={true} className="mb-4 shadow-lg border border-gray-300">
    <div className="flex flex-col justify-between h-full">
      <p className="text-center mb-2 text-lg font-bold">Discovery Facility</p>
      <p className="text-center text-base">{data[0]?.disc_facility || 'Unknown'}</p>
    </div>
  </Card>

  <Card bordered={true} className="col-span-3 mb-4 shadow-lg border border-gray-300">
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
  </Card>
        </div>
      </Card>
      
      )}

      {/* Exosky iframe */}
      <div className="flex justify-center">
        <iframe
          src={`https://eyes.nasa.gov/apps/exo/#/planet/${changePlName(data[0]?.pl_name)}`}
          title="NASA Eyes"
          width="100%"
          height="1000"
          allow="fullscreen"
          style={{ border: 0 }}
          className="shadow-lg"
        >
          
        </iframe>
      </div>
    </div>
  );
}
