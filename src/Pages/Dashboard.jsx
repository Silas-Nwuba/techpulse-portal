import React, { useEffect } from "react";
import Stats from "../feature/dashboard/Stats";
//prettier-ignore
import {CartesianGrid,ResponsiveContainer,Tooltip,XAxis,YAxis,PieChart,Pie,Cell,Legend,AreaChart, Area} from "recharts";
import { useGetallPost } from "../feature/post/useGetallPost";
import { useGetCookie } from "../feature/cookie/useGetCookieByDate";
import { useDarkMode } from "../context/DarkModeContext";
import FullPageLoaderSpinner from "../ui/FullPageLoaderSpinner";
import { useComment } from "../feature/comment/useComment";

const CustomTooltip = ({ payload, label, active }) => {
  const { isDarkMode } = useDarkMode();
  if (active) {
    const textStyle = {
      color: isDarkMode ? "#ced4da" : "#000",
      backgroundColor: isDarkMode ? "#0c1427" : "#fff",
      border: `1px solid ${isDarkMode ? "#172340 " : "#eeeeee"}`,
      borderRadius: "4px",
      fontSize: "12px",
    };
    return (
      <div style={textStyle}>
        {label && (
          <>
            <p className="font-medium py-1 px-1 bg-stone-100 dark:bg-black">
              {label}
            </p>
            <div className="border dark:border-[#172340] border-slate-50 w-full mb-1 h-[0.8px]"></div>
          </>
        )}
        {payload.map((entry, index) => (
          <p
            key={index}
            style={{ color: textStyle.color }}
            className="py-1 px-3"
          >
            {`${entry.name}:`}{" "}
            <span className="font-medium pl-1">{entry.value}</span>
          </p>
        ))}
      </div>
    );
  }
  return null;
};
const Dashboard = () => {
  const { data, isLoading } = useGetallPost();
  const { isLoading: isComment } = useComment();
  const { isPending: isCookie } = useGetCookie();

  const tech = data?.filter(
    (post) => post.category === "technology" || post.category === "gadget"
  );
  const business = data?.filter((post) => post.category === "business");
  const social = data?.filter((post) => post.category === "social apps");
  const { isDarkMode } = useDarkMode();
  //prettier-ignore
  const {data: cookies} = useGetCookie();
  const groupedByDate = cookies?.reduce((acc, cookie) => {
    const date = new Date(cookie.created_at);
    const monthYear = `${date.getFullYear()}-${String(
      date.getMonth() + 1
    ).padStart(2, "0")}`;
    if (!acc[monthYear]) {
      acc[monthYear] = [];
    }
    acc[monthYear].push(cookie);
    return acc;
  }, {});

  const color = isDarkMode
    ? {
        total: {
          fill: "#6C4DE6",
          stroke: "#6C4DE6",
        },
        essential: {
          fill: "#22c55e",
          stroke: "#22c55e",
          text: "",
        },
        text: "#e5efeb",
        background: "#0c1427",
      }
    : {
        total: {
          fill: "#c7d2fe",
          stroke: "#6C4DE6",
        },
        essential: {
          fill: "#dcfcef",
          stroke: "#22c55e",
          text: "",
        },
        text: "#878a99",
        background: "#fff",
      };

  const category = [
    { name: "Tech", value: Number(`${tech?.length}`), color: "#f97316" },
    {
      name: "Business",
      value: Number(`${business?.length}`),
      color: "#05a34a",
    },
    { name: "Social", value: Number(`${social?.length}`), color: "#fbbc06" },
  ];
  const DateVistor = [
    { label: "Jan", total: 100, essential: 30 },
    { label: "Feb", total: 380, essential: 10 },
    { label: "Mar", total: 294, essential: 50 },
    { label: "Apr", total: 160, essential: 20 },
    { label: "Jun", total: 555, essential: 40 },
    { label: "Jul", total: 302, essential: 80 },
    { label: "Aug", total: 294, essential: 40 },
    { label: "Sept", total: 195, essential: 90 },
    { label: "Oct", total: 704, essential: 50 },
    { label: "Nov", total: 402, essential: 17 },
    { label: "Dec", total: 305, essential: 32 },
  ];

  useEffect(() => {
    document.title = "TekMatas | Dashboard";
    return () => {
      document.title = "TekMatas | Dashboard";
    };
  }, []);

  if (isLoading || isComment || isCookie) return <FullPageLoaderSpinner />;

  return (
    <div className="mb-10 md:mb-0 w-[calc(100%-250px)]">
      <div className="mb-10">
        <h1 className="text-[#000000] text-[1.5rem] md:text-[32px] font-semibold mt-[120px] md:mt-[40px] dark:text-[#E7E9EA] ">
          Hello, Admin
        </h1>
        <p className="text-[#000000] dark:text-[#d0d6e1] font-normal leading-6 text-[14px]">
          This is your blog report so far.
        </p>
      </div>

      <Stats />
      <div className="grid grid-cols-3 gap-10">
        <div className="mt-10 dark:bg-[#0c1427] bg-white  border-[white]  dark:border-[#172340] border p-3 col-span-2 rounded-md">
          <span className="leading-[10px]">
            <h2 className="text-[16px] leading-[16.94px] text-[#000000] font-semibold dark:text-[#E7E9EA] my-5 px-3">
              Vistors Overview
            </h2>
          </span>
          <div className="mt-10">
            <ResponsiveContainer width={"100%"} height={300}>
              <AreaChart data={DateVistor} height={100}>
                <XAxis
                  dataKey="label"
                  tick={{
                    fill: `${color.text}`,
                    fontSize: 12,
                  }}
                  tickLine={{ stroke: `${color.text}` }}
                />
                <YAxis
                  tick={{ fill: `${color.text}`, fontSize: 12 }}
                  tickLine={{ stroke: `${color.text}` }}
                />
                <CartesianGrid strokeDasharray="4" />
                <Tooltip content={CustomTooltip} />

                <Area
                  type="monotone"
                  dataKey="total"
                  stroke={`${color.total.stroke}`}
                  fill={`${color.total.fill}`}
                  strokeWidth={2}
                  name="Total Visitors"
                />

                <Area
                  type="monotone"
                  dataKey="essential"
                  stroke={`${color.essential.stroke}`}
                  fill={`${color.essential.fill}`}
                  strokeWidth={2}
                  name="Essential"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="dark:bg-[#0c1427] bg-[white]  dark:border-[#172340] p-3 col-span-1 rounded-md mt-10">
          <span>
            <h2 className="text-[15px] text-[#000000] leading-[16.94px] font-semibold dark:text-[#E7E9EA] mt-5 px-3">
              Category Summary
            </h2>
          </span>

          <ResponsiveContainer width={"100%"} height={300}>
            <PieChart>
              <Pie
                data={category}
                dataKey="value"
                cx="50%"
                cy="50%"
                fill="#8884d8"
                innerRadius={85}
                outerRadius={110}
                paddingAngle={3}
                stroke="#ffffff"
              >
                {category.map((entry) => (
                  <Cell fill={entry.color} key={entry.name} />
                ))}
              </Pie>
              <Tooltip content={CustomTooltip} />
              <Legend
                iconSize={10}
                iconType="circle"
                fontSize={"10px"}
                fontWeight={400}
                color="#eeee"
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
