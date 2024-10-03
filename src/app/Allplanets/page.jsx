"use client";

import { useGetAllPlanetsNameQuery } from "@/redux/Feature/NASA/planet";
import { Table, Button, Spin } from "antd";
import { useRouter } from "next/navigation";
import { useState } from "react";
import 'antd/dist/reset.css'; 
import '@/app/globals.css'; 

export default function AllPlanets() {
  const { data, isLoading, error } = useGetAllPlanetsNameQuery(undefined);
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10); 

  if (isLoading) return <div className="flex justify-center items-center h-screen">
    <Spin size="large" />
</div>;

  if (error) return <div className="flex justify-center items-center h-screen">
  <p>Error loading data</p>
</div>;


  const changePlName = (name) => {
    let newName = "";
    for (var i = 0; i < name.length; i++) {
      if (name[i] == "-") {
        newName += " ";
      } else {
        newName += name[i];
      }
    }
    return newName;
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
      title: "Orbital Period (days)",
      dataIndex: "pl_orbper",
      key: "pl_orbper",
      render: (name) => name || "Unknown",
    },
    {
      title: "Distance From Earth (Light Years)",
      dataIndex: "sy_dist",
      key: "sy_dist",
      render: (name) => Math.round(name*3.26156) || "Unknown",
    },
    {
      title: "Gravity (g)",
      dataIndex: "st_logg",
      key: "st_logg",
      render: (name) => name || "Unknown",
    },
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

  const tableData = data?.map((planet, index) => ({
    key: index,
    pl_name: planet.pl_name,
    objectid: planet.objectid,
    pl_orbper: planet.pl_orbper,
    sy_dist: planet.sy_dist,
    st_logg: planet.st_logg
  }));

  const handlePageChange = (page, newPageSize) => {
    setCurrentPage(page);
    setPageSize(newPageSize);
  };

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">Planets Data</h1>
      <Table
      columns={columns}
      dataSource={tableData}
      pagination={{
        current: currentPage,
        pageSize: pageSize,
        total: tableData?.length,
        onChange: handlePageChange,
        showSizeChanger: true, 
        pageSizeOptions: ['10', '20', '50', '100'], 
        
      }}
      className="shadow-lg rounded-lg"
    />
    </div>
  );
}
