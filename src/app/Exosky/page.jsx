"use client";

import { useGetPlanetsQuery } from "@/redux/Feature/NASA/planet";

export default function Home() {
  const { data, isLoading, error } = useGetPlanetsQuery(undefined);

  console.log(data);
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  var changePlName = (name)=>{
    let newName = "";
    for( var i=0; i<name.length; i++){
        if(name[i]==" "){
          newName += "_";
        }else{
          newName += name[i];
        }
    }
    return newName;
  }
  return (
    <>
      <div>
        <h1>Planets Data</h1>
        {data && (
          <div>
            <h2>Planet Name: {changePlName(data[0]?.pl_name)}</h2>
            <p>Object ID: {data[0]?.objectid}</p>
            <p>Discovery Method: {data[0]?.discoverymethod}</p>
            <p>Discovery Year: {data[0]?.disc_year}</p>
            <p>Right Ascension (RA): {data[0]?.rastr}</p>
            <p>Declination (Dec): {data[0]?.decstr}</p>
            <p>Host Name: {data[0]?.hostname}</p>
            <p>Telescope: {data[0]?.disc_telescope}</p>
            <p>Discovery Locale: {data[0]?.disc_locale}</p>
            <p>Discovery Facility: {data[0]?.disc_facility}</p>
            <p>
              Discovery Reference:{" "}
              <a
                href="https://ui.adsabs.harvard.edu/abs/2005ApJ...624..372K/abstract"
                target="_blank"
                rel="noopener noreferrer"
              >
                Konacki et al. 2005
              </a>
            </p>
          </div>
        )}

        {/* Embedded NASA Eyes iframe */}
        <div className=" ml-10 mb-10">
        <iframe

         // src="https://eyes.nasa.gov/apps/exo/#/planet/OGLE-TR-10_b"
         src={`https://eyes.nasa.gov/apps/exo/#/planet/${changePlName(data[0]?.pl_name)}`}
          title="NASA Eyes - OGLE-TR-10 b"
          width="80%"
          height="800"c v 
          allow="fullscreen"
          style={{ border: 0 }}
          className="justify-center"
        >
          Unable to render the provided source
        </iframe>
        </div>
      </div>
    </>
  );
}
