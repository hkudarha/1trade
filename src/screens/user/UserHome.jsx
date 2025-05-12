import Swal from "sweetalert2"; // Ensure SweetAlert2 is imported
import "../../styles/user/UserHome.css";
import SSDataTable from "../../components/SSDataTable";
import { Button5 } from "../../components/ui/Buttons";
import { useState, useEffect } from "react";
import cardImg from "../../assets/cardImg.png";
import { useNavigate } from "react-router-dom";
import { AuthenticatedRoutes } from "../../constants/Routes";
import { useSelector } from "react-redux";
import { formatDate } from "../../utils/dateFunctions";
import { FaRegCopy } from "react-icons/fa6";
import { backendConfig } from "../../constants/content/MainContent";
import { claimRoi } from "../../api/user-api";
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import { FaChevronDown } from "react-icons/fa";

const data = [
  { name: "Mon", value: 41000 },
  { name: "Tue", value: 34500 },
  { name: "Wed", value: 50000 },
  { name: "Thu", value: 62500 },
  { name: "Thu", value: 47500 },
  { name: "Thu", value: 32500 },
  { name: "Fri", value: 61800 },
  { name: "Sat", value: 43000 },
  { name: "Sun", value: 62458 },
];

const UserHome = () => {
  const navigate = useNavigate();
  const userInfo = useSelector((state) => state.userInfo.userInfo);
  const [copiedText1, setCopiedText1] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isClaimedToday, setIsClaimedToday] = useState(false); // State to track if ROI has been claimed today
  const [currentDate, setCurrentDate] = useState(
    new Date().toLocaleDateString()
  ); // Store current date

  const location = window.location.origin;
  const referCode = `${location}/register?referral=${userInfo?.data?.referralCode}`;
  const user = userInfo?.data;

  // Handle ROI claim click
  const clickHandler = async () => {
    if (loading || isClaimedToday) return; // Prevent clicking if already claimed or loading

    setLoading(true);
    try {
      const res = await claimRoi();
      Swal.fire({
        icon: "success",
        title: "Success",
        text: res.data?.message || "ROI claimed successfully!",
      });
      setIsClaimedToday(true); // Mark ROI as claimed for today
    } catch (error) {
      Swal.fire({
        icon: "info",
        // title: 'Already Claimed',
        text: error.response?.data?.message || "Something went wrong!",
      });
    } finally {
      setLoading(false);
    }
  };

  // Re-enable the button at midnight
  useEffect(() => {
    if (!isClaimedToday) return;

    const currentTime = new Date();
    const nextMidnight = new Date(currentTime);
    nextMidnight.setHours(24, 0, 0, 0); // Set to midnight of the next day

    // Calculate the time difference between now and midnight
    const timeUntilMidnight = nextMidnight - currentTime;

    // Set a timeout to re-enable the button after midnight
    setTimeout(() => {
      setIsClaimedToday(false); // Re-enable the button after midnight
    }, timeUntilMidnight);
  }, [isClaimedToday]); // Dependency to re-run whenever ROI is claimed today

  const userData = {
    username: user?.username,
    date_of_joining: formatDate(user?.createdAt) || "NA",
    date_of_activation: user?.activeDate ? formatDate(user?.activeDate) : "NA",
    renewal_status: user?.status ? "Active" : "Inactive",
  };

  const handleCopy = (text, setCopiedState) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopiedState(true);
        setTimeout(() => setCopiedState(false), 2000);
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

  const IncomeCard = ({ title, value, img }) => (
    <div className="income-card ss-card ">
      <div className="left">
        <h5>{title}</h5>
        <p>{value}</p>
      </div>
      <div className="right">
        <img src={img} alt={title} />
      </div>
    </div>
  );

  return (
    <div className="UserHome">
      {/* <div className="top-wrapper martop">
        <div className="ss-card welcome-card">
          <div className="top">
            <h5 className="heading">
              Welcome <span className="text-capitalize">{user?.username || "User"}</span>!
            </h5>
          </div>
          <p className="para1">We're happy to have you on board.</p>
          <div className="content">
            <div className="c-left">
              <span className="para1 bold">Ready to get started?</span>
              <p className="para1">Check out your dashboard to begin!</p>
              <div className="btn-box flex item-center justify-end">
                <Button5 onClick={() => navigate(AuthenticatedRoutes.OUR_PLANS)} name={"Invest Now"} />
                
                <Button5
                  className="ml-5"
                  onClick={clickHandler}
                  name={"Claim Today ROI"}
                  disabled={isClaimedToday || loading}  // Disable if claimed or loading
                />
              </div>
            </div>
            <div className="c-right">
              <img src={cardImg} alt="gift icon" className="gift-icon" />
            </div>
          </div>
        </div>
      </div> */}

      <div className="w-full h-full flex justify-between items-center">
        <div className="income-wrapper mar-top !w-1/2 ">
          <IncomeCard
            title="Total Balance"
            value={user?.totalEarnings?.toFixed(2) || "0"}
            img="https://img.icons8.com/3d-fluency/94/money.png"
          />
          <IncomeCard
            title="Total Depost"
            value={user?.currentEarnings?.toFixed(2) || "0"}
            img="https://img.icons8.com/3d-fluency/94/coin-wallet.png"
          />
          <IncomeCard
            title="Total Withdraw"
            value={user?.totalInvestment?.toFixed(2) || "0"}
            img="https://img.icons8.com/3d-fluency/94/growing-money.png"
          />
          <IncomeCard
            title="Returnal Earning"
            value={user?.directReferalAmount?.toFixed(2) || "0"}
            img="https://img.icons8.com/3d-fluency/94/expensive-price.png"
          />
          <IncomeCard
            title="Total Invest"
            value={user?.totalRoi?.toFixed(2) || "0"}
            img="https://img.icons8.com/3d-fluency/94/business-management.png"
          />
          <IncomeCard
            title="Total Running Invest"
            value={user?.levelIncome?.toFixed(2) || "0"}
            img="https://img.icons8.com/isometric/50/no-connection.png"
          />
          <IncomeCard
            title="Total Invest Completed"
            value={user?.referedUsers?.length || "0"}
            img="https://img.icons8.com/isometric/50/user.png"
          />
          <IncomeCard
            title="Total Profit + Capital"
            value={user?.currentRank || "Beginner"}
            img="https://img.icons8.com/3d-fluency/94/prize.png"
          />
          
        </div>

        {/* bar chart  */}
        <div className="w-1/2 h-full  p-4 ">
          <div className="bg-[#1E1E1E] mx-auto mb-10 rounded-2xl pt-10  w-[400px] md:w-[500px]">
            
            <div className="flex  justify-between items-center mb-4">
              <div className="flex items-center gap-5">
                
                <p className="text-white font-semibold text-lg ml-10">
                Exchange rate dynamics
                </p>
              </div>
              {/* <div className="custom-gradient-button flex justify-between items-center">
                This Week <FaChevronDown className="ml-2 text-sm" />
              </div> */}
            </div>

            {/* Chart */}
            <div className="h-[37rem] w-[50rem] mx-auto overflow-hidden relative ml-20">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#429461" stopOpacity={0.6} />
                      <stop
                        offset="90%"
                        stopColor="#439063"
                        stopOpacity={0.05}
                      />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="name" hide />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#00FF5F"
                    fillOpacity={1}
                    fill="url(#colorValue)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="detail-wrapper">
        <div className="left ss-card">
          <div className="head">
            <h5 className="cardHeading">About Me</h5>
            <div className="detail-table">
              <table>
                <tbody>
                  {Object.entries(userData).map(([key, value]) => (
                    <tr key={`detail-${key}`}>
                      <td>{key.replaceAll("_", " ")}</td>
                      <td>{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="ss-card copy-code-wrapper martop">
            <p>Your Refer Code</p>
            <div className="code">
              <span className="codebox">{referCode}</span>
              <button onClick={() => handleCopy(referCode, setCopiedText1)}>
                {copiedText1 ? "Copied!" : <FaRegCopy />}
              </button>
            </div>
          </div>
        </div>
      </div> */}

      <div className="ss-card mar-top">
        <div className="head">
          <h5 className="cardHeading">Direct Referral History</h5>
        </div>
        <SSDataTable data={user?.referedUsers} />
      </div>
    </div>
  );
};

export default UserHome;
