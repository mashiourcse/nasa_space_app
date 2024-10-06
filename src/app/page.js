"use client";

import {
  useGetDiscYearCountQuery,
  useLazyGetDiscMethodCountQuery,
  useGetPlanetsCountQuery,
  useGetNearestPlanetQuery,
  useGetFarthestPlanetQuery,
} from "@/redux/Feature/NASA/planet";
import { Layout, Card, Row, Col, Button } from "antd";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const { Header, Content } = Layout;

export default function Home() {
  const router = useRouter();
  const { data } = useGetDiscYearCountQuery(undefined);
  const [getDiscMethodCountTrigger, { data: discoveryData, isError }] =
    useLazyGetDiscMethodCountQuery();
  const { data: getPlanetsCount, isLoading } = useGetPlanetsCountQuery(undefined);
  const { data: getNearestPlanet } = useGetNearestPlanetQuery(undefined);
  const { data: getFarthestPlanet } = useGetFarthestPlanetQuery(undefined);

  useEffect(() => {
    getDiscMethodCountTrigger();
  }, []);

  const COLORS = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#A28DCB",
    "#FF6347",
    "#7B68EE",
    "#D2691E",
    "#32CD32",
    "#FF4500",
    "#4682B4",
  ];

  return (
    <Layout className="w-full">
      
      <Header className="bg-white p-0">
        {/* <h1 className="text-center">Planet Discovery Dashboard</h1> */}
      </Header>
      <Content className="p-5">
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12} md={12} lg={8}>
            <Card title="Total Planets Discovered" loading={isLoading}>
              <Button
              onClick={() => router.push(`/Allplanets`)}
              >
              <h2>{getPlanetsCount && getPlanetsCount[0]["count(*)"]}</h2>
              </Button>
              
            </Card>
          </Col>
          <Col xs={24} sm={12} md={12} lg={8}>
            <Card title="Closest Neighbor" loading={isLoading}>
              
              <Button
              
              onClick={() => router.push(`/Allplanets/${getNearestPlanet[0].objectid}`)}
              >
                <h2 
                
                >
                {getNearestPlanet &&
                  getNearestPlanet[0].pl_name +
                    " (" +
                    Math.round(getNearestPlanet[0].sy_dist * 3.26156) +
                    " light years away)"}
              </h2>
              </Button>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={12} lg={8}>
            <Card title="Furthest Neighbor" loading={isLoading}>
              <Button
              onClick={() => router.push(`/Allplanets/${getFarthestPlanet[0].objectid}`)}
              >
              <h2>
                {getFarthestPlanet &&
                  getFarthestPlanet[0].pl_name +
                    (getFarthestPlanet[0].sy_dist
                      ? " (" +
                        Math.round(getFarthestPlanet[0].sy_dist * 3.26156) +
                        " light years away)"
                      : " (Distance Unknown)")}</h2>
              </Button>
              
            </Card>
          </Col>
        </Row>

        <Row gutter={[16, 16]} className="mt-5">
          <Col xs={24} sm={24} md={24} lg={24} xl={12}>
            <Card title="Discovery Over Time" loading={isLoading}>
              <ResponsiveContainer width="100%" height={400}>
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="discoveries"
                    stroke="#8884d8"
                  />
                </LineChart>
              </ResponsiveContainer>
            </Card>
          </Col>

          <Col xs={24} sm={24} md={24} lg={24} xl={12}>
            <Card title="Discovery Methods" loading={isLoading}>
              <Row>
                <Col xs={24} sm={12}>
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
                          <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </Col>
                <Col xs={24} sm={12}>
                  <ul className="list-none pl-0">
                    {discoveryData?.map((entry, index) => (
                      <li
                        key={`legend-${index}`}
                        className="flex items-center mb-2"
                      >
                        <div
                          className="w-5 h-5 mr-2"
                          style={{
                            backgroundColor: COLORS[index % COLORS.length],
                          }}
                        ></div>
                        <span>
                          {entry.name}: {entry.value}
                        </span>
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
