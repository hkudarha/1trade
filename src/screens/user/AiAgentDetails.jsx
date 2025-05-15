// AiAgentDetails.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { aiAgentsData } from '../../utils/data';
import { GlowButton } from '../../components/ui/Buttons';
import AiAgentCard from '../../components/AiAgentCard';

const AiAgentDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const agent = aiAgentsData.find((agent) => agent.id === parseInt(id));

    if (!agent) {
        return (
            <div className="p-4 md:p-10">
                <h1 className="text-3xl text-white">Agent Not Found</h1>
                <button
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
                    onClick={() => navigate('/ai-agent')}
                >
                    Back to AI Agents
                </button>
            </div>
        );
    }

    return (
        <div className='p-4 md:p-10 max-w-screen-xl mx-auto space-y-10'>
            <GlowButton text="Ai Agent" onClick={() => { }} />

            <div className='border-2 border-[#00d5e6] rounded-3xl p-6 sm:p-8 md:p-10 bg-black/20'>

                <button
                    className="mb-5 px-4 py-2 bg-blue-500 text-white text-xl sm:text-2xl rounded"
                    onClick={() => navigate('/ai-agent')}
                >
                    Back
                </button>

                <h1 className='uppercase text-2xl sm:text-3xl mb-4'>Hire AI Agent</h1>

                {/* Responsive container */}
                <div className='flex flex-col lg:flex-row gap-6'>

                    {/* Left Side */}
                    <div className='w-full lg:w-1/2'>
                        <AiAgentCard agent={agent} />

                        <div className='py-5'>
                            <h1 className='text-xl sm:text-2xl'>AMOUNT USDT</h1>

                            <div className='py-2 flex flex-col sm:flex-row gap-3'>
                                <input
                                    type="text"
                                    placeholder='0.00'
                                    className='w-full px-4 py-2 bg-transparent border-2 border-white text-lg sm:text-xl rounded-lg placeholder:text-gray-300'
                                />
                                <button className='px-6 py-2 bg-[#00cda1] hover:bg-[#64e0e9] transition duration-300 text-white text-xl sm:text-2xl rounded'>
                                    MAX
                                </button>
                            </div>

                            <div className='mt-5 rounded-2xl border border-gray-200 p-4 space-y-4'>
                                <div className='flex flex-col sm:flex-row sm:items-center justify-between text-lg sm:text-xl'>
                                    <h2>Available Balance: 6.46</h2>
                                    <button className='text-[#00cda1]'>Deposit {">"}</button>
                                </div>
                                <div className='flex flex-col sm:flex-row sm:items-center justify-between text-lg sm:text-xl'>
                                    <h2>Level :</h2>
                                    <button>LV1 - LV6</button>
                                </div>
                                <button className='mt-5 w-full px-8 py-2 bg-[#00cda1] hover:bg-[#64e0e9] transition duration-300 text-white text-xl sm:text-2xl rounded'>
                                    Hire AI Agent
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className='w-full lg:w-1/2 space-y-6'>
                        <div>
                            <h2 className='text-xl sm:text-3xl mb-2'>1. Fund Overview</h2>
                            <p className='text-base sm:text-2xl font-normal text-gray-300'>
                                1Trade Fund is an innovative digital asset management plan based on AI Agent liquidity income, aiming to provide platform users with stable income opportunities...
                            </p>
                        </div>

                        <div>
                            <h2 className='text-xl sm:text-3xl mb-2'>2. Fund Rules</h2>
                            <div className='text-lg sm:text-2xl font-normal text-gray-300 space-y-4'>
                                <p>a. Fund Pool Classification and Term...</p>
                                <p>b. Income Calculation Method...</p>
                                <p>c. Principal and Income Withdrawal...</p>
                                <p>d. Minimum Investment Amount is $100.</p>
                                <p>e. Fund Pool Fund Limitation...</p>
                                <p>f. Applicable Users: LV1 - LV6</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AiAgentDetails;
