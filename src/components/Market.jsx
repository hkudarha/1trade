import React from 'react'
import { FaBitcoin, FaEthereum } from 'react-icons/fa';
import { SiRipple, SiBinance, SiSolana  } from 'react-icons/si';
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

const Market = () => {
    return (
        <div>
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
                                        <p className="font-semibold text-lg">{coin.name}</p>
                                        <p className="text-xl text-gray-400">{coin.fullName}</p>
                                    </div>
                                </div>

                                <div className="text-right">
                                    <p className="font-semibold text-lg">{coin.price}</p>
                                    <p
                                        className={`text-xl flex items-center justify-end gap-1 ${coin.up ? 'text-green-400' : 'text-red-400'
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
        </div>
    )
}

export default Market