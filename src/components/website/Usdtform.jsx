import React from 'react'
import { useState } from 'react';


const Usdtform = () => {

    const [formData, setFormData] = useState({
        walletAddress: '',
        loginPassword: '',
        emailCode: '',
        googleVerification: '',
    });
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
    };

    return (
        <div>


            <div className="card2  mx-auto my-auto p-8">
                      <h2 className='text-white font-poppins text-[1.7875rem] font-semibold not-italic leading-none mb-4'>Change Address</h2>
                      
                      <div className="card2 w-full">
                       <form onSubmit={handleSubmit} className="space-y-4 w-full">
                <div>
                    <label className="text-white text-lg font-medium block mb-1">Wallet address</label>
                    <input
                        type="text"
                        name="walletAddress"
                        value={formData.walletAddress}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-md bg-transparent border border-gray-600 text-white focus:outline-none focus:border-green-400"
                    />
                </div>

                <div>
                    <label className="text-white text-lg font-medium block mb-1">Login password</label>
                    <input
                        type="password"
                        name="loginPassword"
                        value={formData.loginPassword}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-md bg-transparent border border-gray-600 text-white focus:outline-none focus:border-green-400"
                    />
                </div>

                <div>
                    <label className="text-white text-lg font-medium block mb-1">Email code</label>
                    <div className="flex space-x-2">
                        <input
                            type="text"
                            name="emailCode"
                            value={formData.emailCode}
                            onChange={handleChange}
                            className="flex-1 px-4 py-2 rounded-md bg-transparent border border-gray-600 text-white focus:outline-none focus:border-green-400"
                        />
                        <button
                            type="button"
                            className="regadiant-btn"
                            onClick={() => console.log("GET OTP clicked")}
                        >
                            GET OTP
                        </button>
                    </div>
                </div>

                <div>
                    <label className="text-white text-lg font-medium block mb-1">Google verification</label>
                    <input
                        type="text"
                        name="googleVerification"
                        value={formData.googleVerification}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-md bg-transparent border border-gray-600 text-white focus:outline-none focus:border-green-400"
                    />
                </div>

                <button
                    type="submit"
                    className="regadiant-btn w-full"
                >
                    CONNECT
                </button>
            </form>
                      </div>
            
                      <div className="card2 mt-4">
                        <h5 className='text-bold text-[1.2rem] text-center'>
                          After changing the address, the withdrawal service will be
                          Disabled for 96 Hours to protect your account.
                        </h5>
                      </div>
                    </div>


            
        </div>
    )
}

export default Usdtform