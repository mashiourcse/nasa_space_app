"use client";

import { useGetPlanetsQuery, useGetDiscYearCountQuery, useLazyGetDiscMethodCountQuery, useGetPlanetsCountQuery, useGetNearestPlanetQuery, useGetFarthestPlanetQuery} from "@/redux/Feature/NASA/planet";
import { Layout, Card, Row, Col } from "antd";
import { useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const { Header, Content } = Layout;

export default function Home() {
  const { data: planetsData, isLoading } = useGetPlanetsQuery();
  const { data} = useGetDiscYearCountQuery(undefined);
  const [getDiscMethodCountTrigger, { data: discoveryData, isError }] = useLazyGetDiscMethodCountQuery();
  const {data: getPlanetsCount} = useGetPlanetsCountQuery(undefined);
  const {data: getNearestPlanet} = useGetNearestPlanetQuery(undefined);
  const {data: getFarthestPlanet} = useGetFarthestPlanetQuery(undefined);

useEffect(() => {
  getDiscMethodCountTrigger();
}, []); 

   // console.log(getNearestPlanet[0]);
  //console.log(getPlanetsCount[0]["count(*)"]);
  
  const totalPlanetsDiscovered = planetsData?.length || 0;
  const closestNeighbor = "Proxima Centauri"; 
  const furthestNeighbor = "Planet Nine";  
 
console.log(data)

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A28DCB', '#FF6347', '#7B68EE', '#D2691E', '#32CD32', '#FF4500', '#4682B4'];


  return (
    <Layout style={{  width: "100%" }}>
      <Header style={{ background: "#fff", padding: 0 }}>
      
        {/* <h1 style={{ textAlign: "center" }}>Planet Discovery Dashboard</h1> */}
      
      </Header>
      <Content style={{ padding: '20px' }}>
        <Row gutter={[16, 16]}>
          <Col span={8}>
            <Card title="Total Planets Discovered" loading={isLoading}>
              <h2>{getPlanetsCount && getPlanetsCount[0]["count(*)"]}</h2>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Closest Neighbor" loading={isLoading}>
              <h2>{getNearestPlanet && getNearestPlanet[0].pl_name + " (" +  Math.round(getNearestPlanet[0].sy_dist*3.26156) + " light years away )"  }</h2>
              
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Furthest Neighbor" loading={isLoading}>
              <h2>{getFarthestPlanet && getFarthestPlanet[0].pl_name +   ( getFarthestPlanet[0].sy_dist && " (" + Math.round(getFarthestPlanet[0].sy_dist*3.26156) + " light years away )" || " ( Distance Unkown )")   }</h2>
            </Card>
          </Col>
        </Row>
        <Row gutter={[16, 16]} style={{ marginTop: "20px" }}>
          <Col span={12}>
            <Card title="Discovery Over Time" loading={isLoading}>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="discoveries" stroke="#8884d8" />
                </LineChart>
              </ResponsiveContainer>
            </Card>
          </Col>
          <Col span={12}>
          <Card title="Discovery Methods" loading={isLoading}>
  <Row>
    <Col span={12}>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={discoveryData}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={150}
            fill="#8884d8"
            dataKey="value"
          >
            {discoveryData?.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </Col>
    <Col span={12}>
      <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
        {discoveryData?.map((entry, index) => (
          <li key={`legend-${index}`} style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
            <div
              style={{
                width: "20px",
                height: "20px",
                backgroundColor: COLORS[index % COLORS.length],
                marginRight: "10px"
              }}
            ></div>
            <span>{entry.name}: {entry.value}</span>
          </li>
        ))}
      </ul>
    </Col>
  </Row>
</Card>

          </Col>
        </Row>
      </Content>
    </Layout>
  );
}
