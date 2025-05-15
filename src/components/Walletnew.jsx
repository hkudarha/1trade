import React from 'react'
import { FaArrowRightArrowLeft, FaUser, FaRobot, FaArrowDown } from "react-icons/fa6";
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';
import { FaClock, FaArrowCircleUp, FaArrowCircleDown, FaUsers, FaHandshake, FaShareAlt, FaDownload } from "react-icons/fa";

import Timg from "../assets/Group 1321317431.png"
import bcard1 from "../assets/aaa.png"
import bcard2 from "../assets/iconn.png"
import bcard3 from "../assets/iconnn.png"
import sideimg from "../assets/website/Rectangle 40450.png"
import { FaBitcoin, FaEthereum } from 'react-icons/fa';
import { SiRipple, SiBinance, SiSolana } from 'react-icons/si';
import { FiTrendingDown, FiTrendingUp } from 'react-icons/fi';

const cryptoData = [
    {
        name: 'BTC',
        fullName: 'Bitcoin',
        icon: <FaBitcoin className="text-orange-400" />,
        price: '₹74,41,583',
        change: '0.27%',
        up: true,
    },
    {
        name: 'ETH',
        fullName: 'Ethereum',
        icon: <FaEthereum className="text-blue-400" />,
        price: '₹1,38,651',
        change: '0.37%',
        up: false,
    },
    {
        name: 'XRP',
        fullName: 'Rippel',
        icon: <SiRipple className="text-blue-300" />,
        price: '₹179.52',
        change: '0.71%',
        up: false,
    },
    {
        name: 'BNB',
        fullName: 'Binance Coin',
        icon: <SiBinance className="text-yellow-400" />,
        price: '₹50,829.33',
        change: '0.01%',
        up: true,
    },
    {
        name: 'SOL',
        fullName: 'Solana',
        icon: <SiSolana className="text-green-400" />,
        price: '₹74,41,583',
        change: '3.24%',
        up: true,
    },
    {
        name: 'TRX',
        fullName: 'Tron',
        icon: <FaEthereum className="text-red-400" />,
        price: '₹74,41,583',
        change: '0.84%',
        up: true,
    },
];


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
                                    <div className="flex  flex-col items-center text-sm">
                                        <div className='border rounded-full p-4 '>
                                            <FaArrowRightArrowLeft className="text-xl mb-1" />
                                        </div>
                                        <p className='text-lg'> Swap</p>
                                    </div>
                                    <div className="flex flex-col items-center text-sm">
                                        <div className='border rounded-full p-4 '>
                                            <FaUser className="text-xl mb-1" />
                                        </div>
                                        <p className='text-lg'> Transfer</p>

                                    </div>
                                    <div className="flex flex-col items-center text-sm">
                                        <div className='border rounded-full p-4 '>
                                            <FaRobot className="text-xl mb-1" />
                                        </div>
                                        <p className='text-lg'>  AIAgent</p>


                                    </div>
                                    <div className="flex flex-col items-center text-sm">
                                        <div className='border rounded-full p-4 '>
                                            <FaArrowDown className="text-xl mb-1" />
                                        </div>
                                        <p className='text-lg'>   Withdraw</p>


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

                <div className='sm:w-1/5 w-full card'>
                    <div className='card-inner'>


                        <h2 className="text-2xl font-semibold mb-4 mx-8">OTHER ASSEST</h2>
                        <div className="dashed-card ">
                            <div className=''>
                                <h6 className='text-lg font-bold'>Ai Trade Profit</h6>
                                <div className='flex mt-4 items-center'>
                                    <img src={Timg} alt="" srcset="" className='timg mr-4' />
                                    <p className='text-2xl'>70.5</p>
                                </div>
                            </div>

                            <div className=''>
                                <h6 className='text-lg font-bold mt-4'>Ai Trade Profit</h6>
                                <div className='flex mt-4 items-center'>

                                    <img src={Timg} alt="" srcset="" className='timg mr-4' />
                                    <p className='text-2xl'>70.5</p>
                                </div>
                            </div>

                            <div className=''>
                                <h6 className='text-lg font-bold mt-4'>Ai Trade Profit</h6>
                                <div className='flex mt-4 items-center'>
                                    <img src={Timg} alt="" srcset="" className='timg mr-4' />
                                    <p className='text-2xl'>70.5</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>


                <div className='sm:w-1/3 w-full  card w-'>
                    <div className='card-inner'>


                        {/* Deposit/Withdraw Buttons */}
                        <h2 className="text-2xl font-semibold mb-4 mx-8">WALLET OVERVIEW</h2>
                        <div>
                            <div style={{
                                background: 'linear-gradient(to bottom right, #001f1f, #333300)',
                                padding: '1rem',
                                borderRadius: '1rem'
                            }}>
                                <ResponsiveContainer width="100%" height={230}>
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
                <div className='left sm:flex-1 w-full'>
                    {/* left top  */}
                    <div className=' w-full  mb-8 card'>
                        <div className='card-inner p-8'>
                            <h2 className="text-2xl font-semibold mb-4 mx-8">Crypto</h2>


                            {/* List */}
                            <div className="space-y-2">
                                {cryptoData.map((coin, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center justify-between bg-[#1d1e23] p-3 rounded-md"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="text-2xl">{coin.icon}</div>
                                            <div>
                                                <p className="font-semibold text-sm">{coin.name}</p>
                                                <p className="text-xs text-gray-400">{coin.fullName}</p>
                                            </div>
                                        </div>

                                        <div className="text-right">
                                            <p className="font-semibold text-sm">{coin.price}</p>
                                            <p
                                                className={`text-xs flex items-center justify-end gap-1 ${coin.up ? 'text-green-400' : 'text-red-400'
                                                    }`}
                                            >
                                                {coin.up ? <FiTrendingUp /> : <FiTrendingDown />}
                                                {coin.change}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>


                        </div>
                    </div>

                    <div className='w-full flex gap-4'>
                        <div className="sm:w-[35rem] w-full card ">
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


                        <div className='flex-1 card'>
                            <div className='card-inner pb-4'>
                                <h2 className="text-2xl font-semibold mb-[3rem] mx-8">CONNECT TO WALLET</h2>
                                <div className='dashed-card flex-col items-center '>
                                    <div className='flex items-center justify-center'>
                                        <img src={bcard2} alt="" className='w-[7rem] h-[7rem]' />
                                        <img src={bcard1} alt="" className='w-[10rem] h-[10rem]' />
                                        <img src={bcard3} alt="" className='w-[8rem] h-[8rem]' />
                                    </div>
                                    <button className='px-8 mx-auto mt-[4rem] py-2 font-bold text-2xl rounded-[1.08006rem] bg-[linear-gradient(90deg,_#00FBA3_0%,_#00CFA2_36.24%,_#00B6A1_74.38%,_#00A2A1_100%)]'>
                                        CONNECT
                                    </button>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

                <div className='w-full sm:w-[36rem] sm:pl-4'>
                    <div className='card mb-4'>
                        <div className="card-inner p-8 ">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-2xl font-semibold mb-4">Team Notification</h2>
                                <span className="text-xl">↗</span>
                            </div>

                            <div className="grid grid-cols-3 divide-x divide-gray-500 text-center mb-4">
                                <div>
                                    <p className="text-3xl font-bold">40</p>
                                    <p className="text-sm text-gray-300">Active A</p>
                                </div>
                                <div>
                                    <p className="text-3xl font-bold">160</p>
                                    <p className="text-sm text-gray-300">Active B/C</p>
                                </div>
                                <div>
                                    <p className="text-3xl font-bold">200</p>
                                    <p className="text-sm text-gray-300">Total Active</p>
                                </div>
                            </div>

                            <hr className="border-gray-500 mb-4" />

                            <div className="grid grid-cols-4 text-center gap-2">
                                <div className="flex flex-col items-center">
                                    <FaUsers className="text-5xl mb-1" />
                                    <span className="text-lg">Team</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <FaHandshake className="text-5xl mb-1" />
                                    <span className="text-lg">Commision</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <FaShareAlt className="text-5xl mb-1" />
                                    <span className="text-lg">Invite</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <FaDownload className="text-5xl mb-1" />
                                    <span className="text-lg text-center">Download App</span>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="card">
                        <div className="card-inner p-4">
                            <h2 className="text-2xl font-semibold mb-4 ">WALLET OVERVIEW</h2>

                            <img src={sideimg} alt="" className='h-[38rem] bg-cover' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Walletnew