import React from 'react';
import { GlowButton } from '../../components/ui/Buttons';
import HistoryTable from '../../components/HistoryTable';
import { AiFillMoneyCollect } from "react-icons/ai";
import { BiMoneyWithdraw } from "react-icons/bi";
import { FaBrain } from "react-icons/fa";
import { LuBrainCircuit } from 'react-icons/lu';
import { IoGiftSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const History = () => {
  const historyBottomData = [
    {
      title: "Deposit",
      icon: <AiFillMoneyCollect className="text-2xl sm:text-3xl text-[#06C755]" />,
      navigatePath: "/deposit",

    },
    {
      title: "Withdraw",
      icon: <BiMoneyWithdraw className="text-2xl sm:text-3xl text-[#06C755]" />,
      navigatePath: "/withdrawal"
    },
    {
      title: "AI Agent",
      icon: <LuBrainCircuit className="text-2xl sm:text-3xl text-[#06C755]" />,
      navigatePath: "/ai-agent"
    },
    {
      title: "Rewards",
      icon: <IoGiftSharp  className="text-2xl sm:text-3xl text-[#06C755]" />,
      navigatePath: "/rewards"
    },
  ];

  const navigate = useNavigate();

  return (
    <div className='space-y-10 p-4 md:p-10 max-w-screen-xl mx-auto'>
      <GlowButton text="Asset History" onClick={() => { }} />

      <div className='border-2 border-[#00d5e6] rounded-3xl p-4 sm:p-6 bg-black/20'>
        {/* Table */}
        <HistoryTable />

        {/* Bottom Action Section */}
        <div className='mt-10 flex flex-wrap gap-5 justify-center sm:justify-start'>
          {historyBottomData.map((item, index) => (
            <div
              key={index}
              className='flex flex-col sm:flex-row items-center sm:items-start gap-3 min-w-[120px]'
            >
              <div className='border-2 border-[#06C755] p-2 rounded-full'>
                {item.icon}
              </div>
              <GlowButton text={item.title} onClick={() => navigate(`${item.navigatePath}`)} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default History;
