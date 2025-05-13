import React from 'react'
const data = [
    {
        title: "CURRENT HOLDING",
        amount: "5500",
        icon: "/icons/holding.png",
    },
    {
        title: "TOTAL EARNING",
        amount: "8000",
        icon: "/icons/earning.png",
    },
    {
        title: "WITHDRAWN",
        amount: "2500",
        icon: "/icons/withdrawn.png",
    },
    {
        title: "UNDRAWN",
        amount: "8000",
        icon: "/icons/undrawn.png",
    },
];


const DappWallet = () => {
    return (
        <div className='h-full w-full '>
            <div className='w-full'>
                <div className="min-h-screen bg-gradient-to-r from-[#0B1F1A] to-[#0F2C21] p-8">
                    <button className="bg-white/10 text-white text-sm px-4 py-1 rounded mb-6">
                        Main Wallet Balance
                    </button>

                    <div className="flex flex-wrap gap-6">
                        {data.map((item, index) => (
                            <div className="w-48 bg-[#0B1F1A] border border-white/30 rounded-lg p-4 text-center text-white shadow-md">
                                <img src={item.icon} alt={item.title} className="w-12 h-12 mx-auto mb-2" />
                                <p className="text-xs font-semibold text-white/80 mb-1">{item.title}</p>
                                <p className="text-xl font-bold">${item.amount}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='w-full'>

            </div>
        </div>
    )
}

export default DappWallet