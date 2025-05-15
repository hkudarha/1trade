import React, { useState } from 'react';
import { MdKeyboardDoubleArrowRight, MdOutlineQrCodeScanner } from "react-icons/md";
import { CardSection } from './income-pages/CardSection';
import dollar from "../../assets/Dashboard/dollar.png";

// Main Activity component
const Activity = () => {
  const [filter, setFilter] = useState('ALL');

  // Mock data (replace with API calls)
  const communityStats = {
    totalMembers: 250,
    totalA: 50,
    totalB: 100,
    totalC: 100,
    validMembers: 200,
    validA: 40,
    validB: 70,
    validC: 90,
  };

  const rebatesData = {
    total: 500,
    rebatesA: 300,
    rebatesB: 120,
    rebatesC: 80,
  };

  const teamData = [
    { name: 'Rajat Pradhan', amount: 100000 },
    { name: 'Rajat Pradhan', amount: 100000 },
    { name: 'Rajat Pradhan', amount: 100000 },
    { name: 'Rajat Pradhan', amount: 100000 },
  ];

  // All Debts 

  const rebateCards = [
    { title: "All Rebates", amount: 500, icon: "💵" },
    { title: "Total Rebates", amount: 500, icon: "💵" },
    { title: "Rebates A", amount: 300, icon: "💵" },
    { title: "Rebates B", amount: 120, icon: "💵" },
    { title: "Rebates C", amount: 80, icon: "💵" },
  ];

  const handleClick = (filterValue) => {
    setFilter(filterValue); // Update the filter state with the selected filter
  };

  return (
    <>
      <div className="p-6 min-h-screen inset-0 text-white bg-black/30 rounded-2xl">
        <button className="bg-[#40d3cc] rounded-md mb-[10px] text-[1.5rem] px-4 py-3">
          Team Activity
        </button>

        <div className="flex flex-col lg:flex-row gap-5 mt-4">
          {/* Left */}
          <div className="w-full lg:w-[60%] flex flex-col">
            <div className="w-full flex flex-col md:flex-row md:items-center md:justify-between">
              <h1 className="text-[2rem]">My Community</h1>
              <div className="flex flex-wrap gap-3 text-[#01EBE0] text-[1rem] mt-4 md:mt-0">
                {["ALL", "TODAY", "YESTERDAY", "WEEK", "MONTH"].map((item, index) => (
                  <h2
                    key={index}
                    onClick={() => handleClick(item)}
                    className={`uppercase px-4 py-2 border-2 border-[#01EBE0] hover:bg-[#01EBE0] hover:text-white transition-all duration-300 rounded-lg cursor-pointer ${
                      filter === item ? "bg-[#01EBE0] text-white" : ""
                    }`}
                  >
                    {item}
                  </h2>
                ))}
              </div>
            </div>
            <div className="border-2 border-[#01EBE0] rounded-lg p-4 my-4">
              <CardSection filter={filter} />
            </div>
          </div>

          {/* Right */}
          <div className="w-full lg:w-[40%] border-2 border-[#01EBE0] rounded-lg p-4 h-fit">
            <h1 className="text-[2rem]">Invite your friends</h1>
            <p className="text-lg">
              Add your friends email addresses and send them invitations to join!
            </p>
            <div className="py-3 flex flex-col sm:flex-row gap-2">
              <input
                type="text"
                className="w-full bg-transparent rounded-lg px-4 py-2 text-xl placeholder:text-gray-300 border-2 border-[#01EBE0]"
                placeholder="Enter Email Id"
              />
              <div className="bg-[#01EBE0] p-2 flex items-center justify-center rounded-lg sm:rounded-l-none sm:rounded-r-lg">
                <MdKeyboardDoubleArrowRight className="text-[3rem] text-black" />
              </div>
            </div>
            <div className="h-1 w-full bg-[#01EBE0] my-10"></div>
            <h1 className="text-[2rem]">Share the referral link</h1>
            <p className="text-lg">
              You can also share your referral link by copying and sending it to your friends or sharing it on social media.
            </p>
            <div className="py-3 flex flex-col sm:flex-row gap-2">
              <input
                type="text"
                className="w-full bg-transparent rounded-lg px-4 py-2 text-xl placeholder:text-gray-300 border-2 border-[#01EBE0]"
                placeholder="1trade.ai/?ref+1T8564Dfg6"
              />
              <div className="bg-[#01EBE0] p-2 flex items-center justify-center rounded-lg sm:rounded-l-none sm:rounded-r-lg">
                <MdOutlineQrCodeScanner className="text-[3rem] text-black" />
              </div>
            </div>
          </div>
        </div>

        {/* All Debt Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6 w-full p-4">
          {rebateCards.map((card, i) => (
            <div
              key={i}
              role="group"
              aria-label={`Rebate card: ${card.title} - $${card.amount}`}
              className="bg-black text-white border border-[#01EBE0] rounded-xl px-6 py-6 flex items-center shadow-[inset_0px_-10px_10px_-10px_rgba(1,235,224,0.5)] w-full max-w-sm mx-auto hover:shadow-[inset_0px_-10px_20px_-5px_rgba(1,235,224,0.8)] transition-shadow duration-300"
            >
              {/* Icon */}
              <div className="w-16 h-16 mr-4 flex items-center justify-center bg-white rounded-full">
                <img src={dollar} alt="" className="w-14 h-14 object-contain" />
              </div>
              {/* Content */}
              <div className="text-left">
                <p className="text-xl text-[#01EBE0] mb-1 uppercase tracking-wide">{card.title}</p>
                <h1 className="text-3xl font-bold">${card.amount}</h1>
              </div>
            </div>
          ))}
        </div>

        {/* Team Rebates Section */}
        <section className="mt-10 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((card) => (
              <div
                key={card}
                className="relative border-2 border-[#01EBE0] rounded-lg p-4 text-white bg-black"
              >
                {/* Button at top-left, sticking to the border */}
                <button className="absolute top-0 left-0 bg-[#01EBE0] text-black px-4 py-2 rounded-tl-lg rounded-br-lg font-semibold text-xl">
                  Team A
                </button>

                {/* Card content with increased text size */}
                <h2 className="text-2xl font-semibold mt-12 mb-2 text-center">TEAM A | REBATES</h2>
                <div className="mb-1 border-b border-[#01EBE0] pb-1 flex justify-between text-xl">
                  <span>Amit Sharma</span>
                  <span>$75000</span>
                </div>
                <div className="mb-1 border-b border-[#01EBE0] pb-1 flex justify-between text-xl">
                  <span>Neha Gupta</span>
                  <span>$85000</span>
                </div>
                <div className="mb-1 border-b border-[#01EBE0] pb-1 flex justify-between text-xl">
                  <span>Vikram Singh</span>
                  <span>$60000</span>
                </div>
                <div className="mb-3 border-b border-[#01EBE0] pb-1 flex justify-between text-xl">
                  <span>Priya Patel</span>
                  <span>$90000</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Activity;
