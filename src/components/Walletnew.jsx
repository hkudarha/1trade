import React from 'react'
import { FaArrowRightArrowLeft, FaUser, FaRobot, FaArrowDown } from "react-icons/fa6";
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';
import { FaClock, FaArrowCircleUp, FaArrowCircleDown } from "react-icons/fa";
import { SiTether } from "react-icons/si";
import Timg from "../assets/Group 1321317431.png"

const data = [
    { name: '1', green: 10, red: 15 },
    { name: '2', green: 30, red: 25 },
    { name: '3', green: 20, red: 30 },
    { name: '4', green: 40, red: 20 },
    { name: '5', green: 35, red: 45 },
    { name: '6', green: 20, red: 35 },
    { name: '7', green: 50, red: 25 },
];

const transactions = [
    {
        id: 1,
        type: "Processing",
        icon: <FaClock className="text-orange-400" />,
        detail: "From: T13A....vy6z",
        amount: 100,
        date: "20/Feb/2025",
        color: "border-orange-400",
    },
    {
        id: 2,
        type: "Send",
        icon: <FaArrowCircleUp className="text-red-500" />,
        detail: "To: 0x101....2ca0",
        amount: 50,
        date: "15/Jan/2025",
        color: "border-red-500",
    },
    {
        id: 3,
        type: "Receiving",
        icon: <FaArrowCircleDown className="text-green-500" />,
        detail: "From: T13A....vy6z",
        amount: 50,
        date: "01/Jan/2025",
        color: "border-green-500",
    },
];

const Walletnew = () => {
    return (
        <div className='w-full h-full '>

            {/* first part  */}
            <div className=' flex flex-col md:flex-row flex-wrap gap-4'>
                <div className="flex-1 overflow-hidden  card">
                    <div className="card-inner">

                    <h2 className="text-2xl font-semibold mb-4 mx-8">WALLET OVERVIEW</h2>

                    {/* Main wallet section */}
                    <div className="dashed-card ">
                        <div className="flex justify-between mb-4">
                            <div>
                                <p className="text-xl mb-4">Main Wallet Balance</p>
                                <p className="text-4xl flex items-center  ">
                                    <img src={Timg} alt="" srcset="" className='timg mr-4' />
                                     5500</p>
                            </div>
                            <div>
                                <p className="text-xl mb-4">Today Overall</p>
                                <p className="text-4xl flex items-center "> 
                                    <img src={Timg} alt="" srcset="" className='timg mr-4' />
                                    354.8</p>
                            </div>
                        </div>
                        <hr className="border-gray-600 mb-4 h-1" />
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="text-xl mb-4">Additional Balance</p>
                                <p className="text-2xl font-bold text-green-300">₮ 500</p>
                            </div>

                            {/* Action icons */}
                            <div className="flex gap-4">
                                <div className="flex flex-col items-center text-sm">
                                    <FaArrowRightArrowLeft className="text-xl mb-1" />
                                    Swap
                                </div>
                                <div className="flex flex-col items-center text-sm">
                                    <FaUser className="text-xl mb-1" />
                                    Transfer
                                </div>
                                <div className="flex flex-col items-center text-sm">
                                    <FaRobot className="text-xl mb-1" />
                                    AI Agent
                                </div>
                                <div className="flex flex-col items-center text-sm">
                                    <FaArrowDown className="text-xl mb-1" />
                                    Withdraw
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Deposit/Withdraw Buttons */}
                    <div className="flex">
                        <button className="w-1/2 btn">
                            DEPOSIT
                        </button>
                        <button className="w-1/2 text-2xl py-4 bg-gray-600 text-white font-bold rounded-br-lg">
                            WITHDRAW
                        </button>
                    </div>
                    </div>
                </div>

                <div className='w-1/5 card'>
                    <div className='card-inner'>

                   
                    <h2 className="text-2xl font-semibold mb-4 mx-8">OTHER ASSEST</h2>
                    <div className="dashed-card ">
                        <div className=''>
                            <h6 className='text-lg font-bold'>Ai Trade Profit</h6>
                            <div className='flex mt-4 items-center'>
                                <img src={Timg} alt="" srcset="" className='timg mr-4' />
                                <p className='text-3xl'>70.5</p>
                            </div>
                        </div>

                        <div className=''>
                            <h6 className='text-lg font-bold'>Ai Trade Profit</h6>
                            <div className='flex mt-4 items-center'>

                                <img src={Timg} alt="" srcset="" className='timg mr-4' />
                                <p className='text-3xl'>70.5</p>
                            </div>
                        </div>

                        <div className=''>
                            <h6 className='text-lg font-bold'>Ai Trade Profit</h6>
                            <div className='flex mt-4 items-center'>
                                <img src={Timg} alt="" srcset="" className='timg mr-4' />
                                <p className='text-3xl'>70.5</p>
                            </div>
                        </div>

                    </div>
                     </div>
                </div>


                <div className='w-1/3 card w-'>
                <div className='card-inner'>

                
                    {/* Deposit/Withdraw Buttons */}
                    <h2 className="text-2xl font-semibold mb-4 mx-8">WALLET OVERVIEW</h2>
                    <div>
                        <div style={{
                            background: 'linear-gradient(to bottom right, #001f1f, #333300)',
                            padding: '1rem',
                            borderRadius: '1rem'
                        }}>
                            <ResponsiveContainer width="100%" height={210}>
                                <LineChart data={data}>
                                    <XAxis dataKey="name" hide />
                                    <YAxis hide />
                                    <Tooltip />
                                    <Line type="monotone" dataKey="green" stroke="#00FF00" strokeWidth={2} dot={false} />
                                    <Line type="monotone" dataKey="red" stroke="#FF0000" strokeWidth={2} dot={false} />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                    <div className="flex">
                        <button className="w-1/2 text-xl py-3 btn">
                            AI TRADE
                        </button>
                        <button className="w-1/2 text-xl py-3 bg-gray-600 text-white font-bold rounded-br-lg">
                            BOOK PROFIT
                        </button>
                    </div>
                </div>
                </div>
            </div>

            <div className=' mar-top flex flex-col md:flex-row '>
                {/* left  */}
                <div className='w-full  sm:w-2/3'>
                    <div className="w-2/3 card ">
                    <div className='card-inner'>

                    
                        <div className="text-2xl font-semibold ml-8 mb-4">TRANSACTIONS</div>
                        <div className=" dashed-card">
                            {transactions.map((tx) => (
                                <div
                                    key={tx.id}
                                    className="flex items-center justify-between py-4 border-b border-gray-700 last:border-b-0"
                                >
                                    <div className="flex items-start gap-3">
                                        <div
                                            className={`w-10 h-10 flex items-center justify-center rounded-full border-2 ${tx.color}`}
                                        >
                                            {tx.icon}
                                        </div>
                                        <div>
                                            <div className="font-semibold text-lg">{tx.type}</div>
                                            <div className="text-lg text-gray-400 ">{tx.detail}</div>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="flex items-center gap-1 justify-end">
                                            {/* <SiTether className="text-green-400" /> */}
                                            <span className="text-lg font-bold">{tx.amount}</span>
                                        </div>
                                        <div className=" text-lg text-gray-400">{tx.date}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    </div>


                    <div className='w-1/2'>

                    </div>
                </div>
                <div className='w-full sm:w-1/3  bg-pink-500'>

                </div>
            </div>
        </div>
    )
}

export default Walletnew