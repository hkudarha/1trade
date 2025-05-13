import React from 'react'
import img1 from "../assets/website/11111.png"
import img2 from "../assets/website/22222.png"
import img3 from "../assets/website/333 1.png"
import img4 from "../assets/website/4444.png"
import img5 from "../assets/website/Group 1321317493.png"
import img6 from "../assets/website/Group 1321317522.png"
import bcard1 from "../assets/aaa.png"
import bcard2 from "../assets/iconn.png"
import bcard3 from "../assets/iconnn.png"
import bcard4 from "../assets/66.png"
import bcard5 from "../assets/555.png"


const data = [
    {
        title: "CURRENTHOLDING",
        amount: "5500",
        icon: img1,
    },
    {
        title: "TOTAL EARNING",
        amount: "8000",
        icon: img2,
    },
    {
        title: "WITHDRAWN",
        amount: "2500",
        icon: img3,
    },
    {
        title: "UNDRAWN",
        amount: "8000",
        icon: img4,
    },
];


const DappWallet = () => {
    return (
        <div className='h-full w-full '>
            <div className='w-full'>
                <div className=" p-8">
                    <button className="bg-white/10 text-xl text-white  px-4 py-1 rounded mb-6">
                        Main Wallet Balance
                    </button>

                    <div className="flex flex-wrap gap-[6rem]">
                        {data.map((item, index) => (
                            <div className="card2 w-[15rem] h-[15rem] items-center justify-center">
                                <img src={item.icon} alt={item.title} className="w-[6rem] h-[6rem] mx-auto mb-2" />
                                <p className="text-lg font-semibold text-white/80 mb-1">{item.title}</p>
                                <p className="text-2xl font-bold">${item.amount}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className=" p-8">
                    <button className="bg-white/10 text-xl text-white  px-4 py-1 rounded mb-6">

                        Additional Balance
                    </button>

                    <div className="flex flex-wrap gap-[6rem]">
                        {data.map((item, index) => (
                            <div className="card2 w-[15rem] h-[15rem] items-center justify-center">
                                <img src={item.icon} alt={item.title} className="w-[6rem] h-[6rem] mx-auto mb-2" />
                                <p className="text-lg font-semibold text-white/80 mb-1">{item.title}</p>
                                <p className="text-2xl font-bold">${item.amount}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='w-full  flex flex-col  sm:flex-row relative'>
                <div className='sm:w-1/2  p-[10rem] mb-8 w-full h-[40rem] items-center justify-center  relative'>
                    
                        <div className=''>
                        <div className='flex gap-4 items-center'>
                            <img src={img5} alt="" className='w-[5rem] h-[5rem]' />
                            <h5 className='text-bold text-3xl'>USDT (TRC-20)</h5>
                        </div>
                        <button className='w-full rounded-[0.625rem] border px-8 py-4 text-bod text-2xl mt-4'>Chain Setting</button>
                    </div>
                    <hr className='w-[30rem] h-[2px] bg-slate-300 my-8' />
                    <div className=''>
                        <div className='flex gap-4 items-center'>
                            <img src={img6} alt="" className='w-[5rem] h-[5rem]' />
                            <h5 className='text-bold text-3xl'>USDT (BEP-20)</h5>
                        </div>
                        <button className='w-full rounded-[0.625rem] border px-8 py-4 text-bod text-2xl mt-4'>Chain Setting</button>
                    </div>
                    
                </div>
                <div className='sm:w-1/2 w-full p-[10rem]'>
                        <div>
                            <h3 className='font-bold text-3xl my-4'>DAPP WALLET CONNECT</h3>
                            <div className=' !flex items-center justify-center rounded-3xl border border-[#155F5C]'>
                                <img src={bcard1} alt="" className='w-[5rem] h-[5rem]'/>
                                <img src={bcard2} alt="" className='w-[5rem] h-[5rem]'/>
                                <img src={bcard3} alt="" className='w-[6rem] h-[6rem]'/>
                                <img src={bcard4} alt="" className='w-[5rem] h-[5rem]'/>
                                <img src={bcard5} alt="" className='w-[5rem] h-[5rem]'/>
                            </div>
                            <button className='regadiant-btn !text-3xl w-full mt-8 text-black !text-bold'>CONNECT</button>
                        </div>

                </div>
            </div>
        </div>
    )
}

export default DappWallet