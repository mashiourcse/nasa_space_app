"use client";
import { useGetAllPlanetsNameQuery, useGetDiscYearCountQuery, useGetYearsQuery } from "@/redux/Feature/NASA/planet";
import { Table, Button, Spin, Input, Select } from "antd";
import { useRouter } from "next/navigation";
import { useState } from "react";
import 'antd/dist/reset.css'; 
import '@/app/globals.css'; 

const { Option } = Select;

export default function AllPlanets() {
  const { data, isLoading, error } = useGetAllPlanetsNameQuery(undefined);
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [searchTerm, setSearchTerm] = useState(""); 
  const [planetTypeFilter, setPlanetTypeFilter] = useState(""); 
  const [selectedYear, setSelectedYear] = useState("");
  const { data: years} = useGetYearsQuery(undefined);
  
  console.log(years);
 // Planet type
 const getPlanetType = (pl_rade, pl_bmasse) => {
  if (pl_rade > 4 && pl_bmasse > 50) return "Gas Giant";
  if (pl_rade >= 2 && pl_rade <= 4 && pl_bmasse >= 10 && pl_bmasse <= 50) return "Neptune-like";
  if (pl_rade < 1.5 && pl_bmasse < 10) return "Terrestrial";
  if (pl_rade >= 1.5 && pl_rade <= 2.5 && pl_bmasse >= 1 && pl_bmasse <= 10) return "Super-Earth";
  return "Unknown";
};

  const changePlName = (name) => {
    return name.replace(/-/g, " ");
  };

  const columns = [
    {
      title: "Serial No.",
      key: "serial",
      render: (text, record, index) => (currentPage - 1) * pageSize + index + 1,
    },
    {
      title: "Planet Name",
      dataIndex: "pl_name",
      key: "pl_name",
      render: (name) => changePlName(name),
    },
    {
      title: "Planet Type",
      dataIndex: "planetType",
      key: "planetType",
    },
    {
      title: "Discovery Method",
      dataIndex: "discoverymethod",
      key: "discoverymethod",
    },
   
    //discoverymethod
    // {
    //   title: "Orbital Period (days)",
    //   dataIndex: "pl_orbper",
    //   key: "pl_orbper",
    //   render: (name) => name || "Unknown",
    // },
    {
      title: "Distance From Earth (Light Years)",
      dataIndex: "sy_dist",
      key: "sy_dist",
      render: (name) => Math.round(name * 3.26156) || "Unknown",
    },
    {
      title: "Discovery Year",
      dataIndex: "disc_year",
      key: "disc_year",
    },
    // {
    //   title: "Gravity (g)",
    //   dataIndex: "st_logg",
    //   key: "st_logg",
    //   render: (name) => name || "Unknown",
    // },
    {
      title: "Action",
      key: "action",
      render: (record) => (
        <Button
          type="primary"
          onClick={() => router.push(`/Allplanets/${record.objectid}`)}
        >
          Details
        </Button>
      ),
    },
  ];

  // Filter
  const filteredData = data
    ?.filter((planet) => changePlName(planet.pl_name).toLowerCase().includes(searchTerm))
    ?.filter((year)=> {
      if(selectedYear=="")
        return true;
      return year.disc_year==selectedYear;
    })
    ?.filter((planet) => {
      const planetType = getPlanetType(planet.pl_rade, planet.pl_bmasse);
      return planetTypeFilter ? planetType === planetTypeFilter : true;
    });

  const tableData = filteredData?.map((planet, index) => ({
    key: index,
    pl_name: planet.pl_name,
    objectid: planet.objectid,
   // pl_orbper: planet.pl_orbper,
   discoverymethod: planet.discoverymethod,
    sy_dist: planet.sy_dist,
    disc_year: planet.disc_year,
   // st_logg: planet.st_logg,
    planetType: getPlanetType(planet.pl_rade, planet.pl_bmasse), 
  }));

  // Handing queries
  const handlePageChange = (page, newPageSize) => {
    setCurrentPage(page);
    setPageSize(newPageSize);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase()); 
  };
  
  const handlePlanetTypeFilter = (value) => {
    setPlanetTypeFilter(value);
  };

  const handleYearFilter = (value) => {
    setSelectedYear(value);
  }

  console.log(selectedYear);

  if (isLoading) return <div className="flex justify-center items-center h-screen">
    <Spin size="large" />
  </div>;
  if (error) return <div className="flex justify-center items-center h-screen">
    <p>Error loading data</p>
  </div>;

  return (
    <div className="p-5">
    
      <h1 className="text-2xl font-bold mb-4">Planets Data</h1>
      <div className="grid grid-cols-12 gap-4 mb-4">

  <div className="col-span-8">
    <Input
      placeholder="Search by planet name"
      value={searchTerm}
      onChange={handleSearch}
      className="w-full" 
    />
  </div>

  <div className="col-span-2">
    <Select
      placeholder="Filter by planet type"
      defaultValue="Any Planet"
      onChange={handlePlanetTypeFilter}
      allowClear
      style={{ width: '100%' }} 
    >
      <Option value="">Any Planet</Option>
      <Option value="Gas Giant">Gas Giant</Option>
      <Option value="Neptune-like">Neptune-like</Option>
      <Option value="Terrestrial">Terrestrial</Option>
      <Option value="Super-Earth">Super-Earth</Option>
      <Option value="Unknown">Unknown</Option>
    </Select>
  </div>
  <div className="col-span-2">
    <Select
      placeholder="Filter by planet type"
      defaultValue="Select a year"
      onChange={handleYearFilter}
      allowClear
      style={{ width: '100%' }} 
    >
      <Option value="">All</Option>
     {
      years?.map( (item) => <Option value={item.disc_year}>{item.disc_year}</Option>)
     }
    </Select>
  </div>
</div>

      <Table
        columns={columns}
        dataSource={tableData}
        pagination={{
          current: currentPage,
          pageSize: pageSize,
          total: filteredData?.length,
          onChange: handlePageChange,
          showSizeChanger: true,
          pageSizeOptions: ['10', '20', '50', '100'],
        }}
        className="shadow-lg rounded-lg"
      />
    </div>
  );
}
