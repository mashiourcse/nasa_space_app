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
      <h1 className="text-3xl font-bold text-center mb-6">Planet Details</h1>

      {data && (
        <Card
          title={`Planet Name: ${changePlName(data[0]?.pl_name)}`}
          bordered={false}
          className="shadow-lg mb-8"
        >
          <p className="mb-2">
            <strong>Object ID:</strong> {data[0]?.objectid}
          </p>
          <p className="mb-2">
            <strong>Discovery Method:</strong> {data[0]?.discoverymethod}
          </p>
          <p className="mb-2">
            <strong>Discovery Year:</strong> {data[0]?.disc_year}
          </p>
          <p className="mb-2">
            <strong>Right Ascension (RA):</strong> {data[0]?.rastr}
          </p>
          <p className="mb-2">
            <strong>Declination (Dec):</strong> {data[0]?.decstr}
          </p>
          <p className="mb-2">
            <strong>Host Name:</strong> {data[0]?.hostname}
          </p>
          <p className="mb-2">
            <strong>Telescope:</strong> {data[0]?.disc_telescope}
          </p>
          <p className="mb-2">
            <strong>Discovery Locale:</strong> {data[0]?.disc_locale}
          </p>
          <p className="mb-2">
            <strong>Discovery Facility:</strong> {data[0]?.disc_facility}
          </p>
          <p className="mb-2">
            <strong>Discovery Reference:</strong>{" "}
            <a
              href="https://ui.adsabs.harvard.edu/abs/2005ApJ...624..372K/abstract"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Konacki et al. 2005
            </a>
          </p>
        </Card>
      )}

      {/* Exosky iframe */}
      <div className="flex justify-center">
        <iframe
          src={`https://eyes.nasa.gov/apps/exo/#/planet/${changePlName(data[0]?.pl_name)}`}
          title="NASA Eyes"
          width="80%"
          height="800"
          allow="fullscreen"
          style={{ border: 0 }}
          className="shadow-lg"
        >
          
        </iframe>
      </div>
    </div>
  );
}
