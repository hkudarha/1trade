/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import PageLoader from "../../components/ui/PageLoader";
import { useSelector } from "react-redux";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import bottomimg from "../../assets/Group 1.png"

import { getTotalIncomeInfo, getUsers } from "../../api/admin-api";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  ReferenceDot,
  ReferenceLine,
  CartesianGrid,
  PieChart, Pie, Cell, Legend,
  BarChart,
  Bar,

} from "recharts";


// chart 1 data
const chartData = [
  { day: 1, current: 145, previous: 180 },
  { day: 5, current: 160, previous: 170 },
  { day: 10, current: 175, previous: 200 },
  { day: 15, current: 220.342123, previous: 220 },
  { day: 20, current: 210, previous: 190 },
  { day: 25, current: 245, previous: 230 },
  { day: 30, current: 185, previous: 170 },
];
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const value = payload[0].value;
    return (
      <div className="bg-[#2e2e2e] text-white px-4 py-2 rounded-md shadow-lg text-sm">
        <p className="text-gray-300">This Month</p>
        <p className="text-xl font-bold">{(value * 1_000_000).toLocaleString()}</p>
        <p className="text-sm">May</p>
      </div>
    );
  }
  return null;
};


// chart 2 data
const userData = [
  { name: "Active User", value: 1523151 },
  { name: "Non Active User", value: 948213 },
  { name: "Remaining", value: 3124213 - (1523151 + 948213) },
];
const COLORS = ["#00E396", "#00BFFF", "#ec4899"];


// chart 3 data 
const data3 = [
  { month: "Jan", revenue: 0, expenses: 30000 },
  { month: "Feb", revenue: 10000, expenses: 10000 },
  { month: "Mar", revenue: 20000, expenses: 20000 },
  { month: "Apr", revenue: 80000, expenses: 50000 },
  { month: "May", revenue: 100000, expenses: 70000 },
  { month: "Jun", revenue: 125200, expenses: 100000 },
  { month: "Jul", revenue: 130000, expenses: 60000 },
  { month: "Aug", revenue: 150000, expenses: 120000 },
  { month: "Sep", revenue: 170000, expenses: 90000 },
  { month: "Oct", revenue: 200000, expenses: 60000 },
  { month: "Nov", revenue: 220000, expenses: 55000 },
  { month: "Dec", revenue: 240800, expenses: 75000 },
];



// chart 4 data 
const data4 = [
  { time: "12 AM", profitA: 40, profitB: 35 },
  { time: "4 AM", profitA: 38, profitB: 30 },
  { time: "8 AM", profitA: 42, profitB: 33 },
  { time: "12 PM", profitA: 30, profitB: 20 },
  { time: "4 PM", profitA: 35, profitB: 50 },
  { time: "8 PM", profitA: 44, profitB: 38 },
  { time: "11 PM", profitA: 48, profitB: 40 },
  { time: "1 AM", profitA: 39, profitB: 35 },
  { time: "2 AM", profitA: 40, profitB: 32 },
  { time: "3 AM", profitA: 35, profitB: 40 },
  { time: "4 AM", profitA: 33, profitB: 45 },
  { time: "5 AM", profitA: 45, profitB: 40 },
];

const countryData = [
  { country: "United States", users: "12.4K", percentage: 30, change: 28.5, color: "bg-fuchsia-500" },
  { country: "United Kingdom", users: "", percentage: 20, change: null, color: "bg-slate-400" },
  { country: "Canada", users: "", percentage: 20, change: null, color: "bg-violet-400" },
  { country: "Australia", users: "", percentage: 15, change: null, color: "bg-cyan-400" },
  { country: "Spain", users: "", percentage: 15, change: null, color: "bg-slate-300" },
];


const IncomeCard = ({ title, value, iconSrc }) => (
  <div className="income-card ss-card">
    <div className="left">
      <h5>{title}</h5>
      <p>{value}</p>
    </div>
    <div className="right">
      <img src={iconSrc} alt={title} />
    </div>
  </div>
);

const AdminDashboard = () => {
  const userInfo = useSelector((state) => state.userInfo.userInfo?.data);
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [totalUsers, setTotalUsers] = useState([]);
  const [globalFilter, setGlobalFilter] = useState(null);


  const getIncomeReport = async () => {
    try {
      const response = await getTotalIncomeInfo();
      setData(response?.data || {});
    } catch (error) {
      console.error("Error fetching income report:", error);
    }
  };

  const fetchAllUsers = async () => {
    try {
      const response = await getUsers();
      setTotalUsers(response?.data || []);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    getIncomeReport();
    fetchAllUsers();
  }, []);

  const incomeCardData = [
    {
      title: "Total Users",
      value: data?.totalUsers || 0,
      iconSrc: "https://img.icons8.com/3d-fluency/94/guest-male--v1.png",
      noMoneyIcon: true,
    },
    {
      title: "Today Investment",
      value: data?.todayInvestment?.toFixed(2) || 0,
      iconSrc: "https://img.icons8.com/3d-fluency/94/money-bag-euro.png",
    },
    {
      title: "Total Investment",
      value: data?.totalInvestment?.toFixed(2) || 0,
      iconSrc: "https://img.icons8.com/3d-fluency/94/money-bag-euro.png",
    },
    {
      title: "Today Withdrawal",
      value: data?.todayWithdrawal?.toFixed(2) || 0,
      iconSrc: "https://img.icons8.com/3d-fluency/94/atm.png",
    },
    {
      title: "Total Withdrawal",
      value: data?.totalWithdrawals?.toFixed(2) || 0,
      iconSrc: "https://img.icons8.com/3d-fluency/94/atm.png",
    },
    {
      title: "Today Direct Referral Income",
      value: data?.todayDirectReferral?.toFixed(2) || 0,
      iconSrc: "https://img.icons8.com/3d-fluency/94/conference-call--v1.png",
    },
    {
      title: "Total Direct Referral Income",
      value: data?.totalDirectReferral?.toFixed(2) || 0,
      iconSrc: "https://img.icons8.com/3d-fluency/94/conference-call--v1.png",
    },
    {
      title: "Today Level Income",
      value: data?.todayLevelIncome?.toFixed(2) || 0,
      iconSrc: "https://img.icons8.com/3d-fluency/94/total-sales.png",
    },
    {
      title: "Total Level Income",
      value: data?.totalLevelIncome?.toFixed(2) || 0,
      iconSrc: "https://img.icons8.com/3d-fluency/94/total-sales.png",
    },
    {
      title: "Today Roi Income",
      value: data?.todayRoi?.toFixed(2) || 0,
      iconSrc: "https://img.icons8.com/3d-fluency/94/split-transaction.png",
    },
    {
      title: "Total Roi Income",
      value: data?.totalRoi?.toFixed(2) || 0,
      iconSrc: "https://img.icons8.com/3d-fluency/94/banknotes-and-coins.png",
    },
  ];

  const serialNumberTemplate = (rowData, { rowIndex }) => rowIndex + 1;

  return (
    <>
      {loading && <PageLoader />}

      <div className="UserHome AdminDashboard ">


        {/* first chart in admin dashboard  */}
        <div className="ss-card  text-white p-4 rounded-xl shadow-lg w-full  mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Total Member</h2>

          </div>

          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData}>
              <CartesianGrid stroke="#2e2e2e" vertical={false} />
              <XAxis
                dataKey="day"
                stroke="#666"
                tick={{ fontSize: 12, fill: "#999" }}
              />
              <YAxis
                stroke="#666"
                tickFormatter={(val) => `${val}M`}
                tick={{ fontSize: 12, fill: "#999" }}
              />

              {/* Tooltip */}
              <Tooltip content={<CustomTooltip />} cursor={false} />

              {/* Provisions Line (gray) */}
              <Line
                type="monotone"
                dataKey="previous"
                stroke="#555"
                strokeWidth={2}
                dot={false}
              />

              {/* Current Line (blue) */}
              <Line
                type="monotone"
                dataKey="current"
                stroke="#2f8eff"
                strokeWidth={3}
                dot={false}
                activeDot={{ r: 6, stroke: "#2f8eff", strokeWidth: 3, fill: "#1a1a1a" }}
              />

              {/* Highlighted Dot on Day 15 */}
              <ReferenceLine x={15} stroke="#2f8eff" strokeDasharray="4 4" />
              <ReferenceDot
                x={15}
                y={220.342123}
                r={6}
                fill="#1a1a1a"
                stroke="#2f8eff"
                strokeWidth={3}
                ifOverflow="visible"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>



        {/* second chart  */}

        <div className="ss-card mt-4 flex flex-col md:flex-row p-6 h-auto md:h-[45vh] rounded-xl w-full text-white">
          {/* Left Section */}
          <div className="w-full md:w-1/2 h-auto md:h-full relative mb-6 md:mb-0">
            <h3 className="text-3xl flex font-semibold mb-4">Perpetual</h3>
            <div className="w-full h-full flex flex-col sm:flex-row">
              {/* Pie Chart */}
              <div className="w-full sm:w-1/2 flex flex-col items-center relative mb-4 sm:mb-0">
                <ResponsiveContainer width="100%" height={200}>
                  <PieChart>
                    <Pie
                      data={userData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      fill="#8884d8"
                      paddingAngle={3}
                      dataKey="value"
                    >
                      {userData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index]} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <div className="absolute top-[85px] text-center text-2xl font-bold">77%</div>
              </div>

              {/* User Stats */}
              <div className="w-full sm:w-1/2 flex items-center justify-center">
                <div className="flex flex-col space-y-2  sm:text-left">
                  <h1 className="text-pink-500 text-base sm:text-[1.17469rem] leading-tight">
                    All User <br /><span className="text-white">3,124,213 users</span>
                  </h1>
                  <h1 className="text-green-500 text-base sm:text-[1.17469rem] leading-tight">
                    Active User <br /><span className="text-white">1,523,151 users</span>
                  </h1>
                  <h1 className="text-cyan-400 text-base sm:text-[1.17469rem] leading-tight">
                    Non Active User <br /><span className="text-white">948,213 users</span>
                  </h1>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-1/2 px-0 md:px-8 h-auto md:h-full">
            <div className="text-white w-full h-full">
              <h3 className="text-3xl font-semibold mb-2">Active Percentage</h3>
              <p className="text-2xl md:text-3xl font-bold mb-2 mt-6 md:mt-[8rem]">
                594 <span className="font-medium text-gray-400 text-xl md:text-2xl">Total Average Active User</span>
              </p>

              {/* Progress bar */}
              <div className="w-full h-4 md:h-6 mt-4 bg-[#2c2c2c] rounded-full overflow-hidden mb-4">
                <div
                  className="h-full bg-[#1e3a8a]"
                  style={{ width: `${(179 / 594) * 100}%` }}
                />
              </div>

              {/* Legend */}
              <div className="flex flex-col sm:flex-row justify-between gap-4 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-1 bg-[#1e3a8a]" />
                  <div className="flex-col">
                    <span className="text-base md:text-xl">Online &nbsp;</span>
                    <span className="text-white font-semibold text-xl md:text-2xl">179 users</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-1 bg-[#37306B]" />
                  <div className="flex-col">
                    <span className="text-base md:text-xl">Offline &nbsp;</span>
                    <span className="text-white font-semibold text-xl md:text-2xl">394 users</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* user cards */}

        {/* <div className="income-wrapper mar-top">
          {incomeCardData?.map((income, index) => (
            <IncomeCard
              key={index}
              title={income.title}
              value={`${income.noMoneyIcon ? "" : "$"}${income.value}`}
              iconSrc={income.iconSrc}
            />
          ))}
        </div> */}

        <div className="ss-card mar-top">
          <div className="head">
            <h5 className="cardHeading">Total Users</h5>
          </div>

          <div className="dataTable">
            <DataTable
              value={totalUsers}
              paginator
              rows={10}
              rowsPerPageOptions={[5, 10, 25]}
              filterDisplay="row"
              globalFilter={globalFilter}
            >
              <Column
                style={{ width: "10%" }}
                body={serialNumberTemplate}
                header="S.No"
                filter
                sortable
              />
              <Column field="name" header="Username" filter sortable />
              {/* <Column
                field="walletAddress"
                header="Wallet Address"
                body={(rowData) => maskMemberIdFourLatter(rowData?.walletAddress)}
                filter
                sortable
              /> */}
              <Column
                field="totalIncome"
                header="Total Earnings (USDT)"
                body={(rowData) => `${rowData.totalEarnings?.toFixed(2)} USDT`}
                filter
                sortable
              />
              <Column
                field="currentIncome"
                header="Current Earnings (USDT)"
                body={(rowData) => `${rowData.currentEarnings?.toFixed(2)} USDT`}
                filter
                sortable
              />
              <Column
                // field="investment"
                header="Investment (USDT)"
                body={(rowData) => `${rowData.totalInvestment?.toFixed(2)} USDT`}
                filter
                sortable
              />

            </DataTable>
          </div>
        </div>

        {/* third chart  */}

        <div className="ss-card w-full mar-top">
          <div className=" text-white  rounded-xl shadow-md w-full">
            <div className="flex justify-between items-center mb-4">
              <div>
                <p className="text-2xl mb-4">Total revenue</p>
                <h2 className="text-3xl font-semibold">$240.8K <span className="text-green-400 text-sm ml-2">24.6% ↑</span></h2>
              </div>

            </div>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data3}>
                <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                <XAxis dataKey="month" stroke="#aaa" />
                <YAxis stroke="#aaa" />
                <Tooltip
                  contentStyle={{ backgroundColor: "#2d3748", borderRadius: "8px", border: "none" }}
                  labelStyle={{ color: "#fff" }}
                  formatter={(value, name) => [`$${(value / 1000).toFixed(1)}K`, name.charAt(0).toUpperCase() + name.slice(1)]}
                />
                <Line type="monotone" dataKey="revenue" stroke="#a78bfa" strokeWidth={3} dot={{ r: 4 }} />
                <Line type="monotone" dataKey="expenses" stroke="#38bdf8" strokeWidth={3} dot={{ r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>


        {/* fourth chart  */}
        <div className="ss-card mar-top">
          <div className=" text-white  rounded-xl shadow-md w-full">
            <div className="flex justify-between items-center mb-4">
              <div>
                <p className="text-2xl ">📈 Total profit</p>
                <h2 className="text-3xl font-semibold mt-4">$144.6K <span className="text-green-400 text-sm ml-2">28.5% ↑</span></h2>
              </div>
            </div>

            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={data4}>
                <CartesianGrid strokeDasharray="3 3" stroke="#444" vertical={false} />
                <XAxis dataKey="time" stroke="#aaa" />
                <YAxis stroke="#aaa" />
                <Tooltip
                  contentStyle={{ backgroundColor: "#2d3748", borderRadius: "8px", border: "none", width: "15rem", fontSize: "1rem" }}
                  labelStyle={{ color: "#fff" }}
                  formatter={(value) => [`$${value}K`, "Profit"]}
                />
                <Bar dataKey="profitA" fill="#00C2FF" radius={[4, 4, 0, 0]} />
                <Bar dataKey="profitB" fill="#CB3CFF" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>

            <div className="mt-4 text-lg text-gray-400 flex justify-between">
              <span>Last 12 months</span>
            </div>
          </div>
        </div>


        {/* bottom  */}

        <div className="ss-card flex flex-col md:flex-row mar-top">
          {/* Left: Country Data */}
          <div className="w-full md:w-1/2 px-4 md:px-8 mb-6 md:mb-0">
            <div className="text-white rounded-xl w-full mx-auto shadow-lg">
              <div className="flex mb-6">
                <h2 className="text-2xl md:text-3xl font-semibold">Users by country</h2>
              </div>
              <div className="space-y-6">
                {countryData.map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mt-4">
                      <span className="capitalize text-[#AEB9E1] text-lg md:text-2xl">
                        {item.country}
                      </span>
                      <span className="text-base md:text-xl text-gray-300">
                        {item.percentage}%
                      </span>
                    </div>
                    <div className="relative mt-1 h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className={`${item.color} h-full`}
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                    {item.users && (
                      <div className="flex items-center space-x-2 mt-2">
                        <span className="text-lg md:text-2xl font-bold">{item.users}</span>
                        <span className="text-green-500 text-sm md:text-lg bg-green-900 px-2 py-0.5 rounded">
                          {item.change}% ↑
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Image */}
          <div className="w-full md:w-1/2 px-4 md:px-0">
            <img src={bottomimg} alt="country stats" className="w-full h-auto object-cover" />
          </div>
        </div>



      </div>
    </>
  );
};

export default AdminDashboard;
