import React, { useState } from 'react';

const Withdrawalnew = () => {
  const [formData, setFormData] = useState({
    walletAddress: '',
    loginPassword: '',
    amountusdt: '',
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

    // Reset the form fields
    setFormData({
      walletAddress: '',
      loginPassword: '',
      amountusdt: '',
      emailCode: '',
      googleVerification: '',
    });
  };




  const handleAllWithdrawal = () => {
    setFormData({ ...formData, amountusdt: '6.46' });
  };

  return (
    <div className='w-full h-full flex flex-col sm:flex-row relative'>
      {/* left  */}
      <div className='flex-1 h-full sm:mr-[5rem]'>
        <div className="card2">
          <div className='w-full flex items-center justify-between'>
            <h4 className='text-xl font-bold'>Available Balance</h4>
            <button className="regadiant-btn w-[20rem] text-2xl">6.46</button>
          </div>
          <div className='w-full flex items-center justify-between mt-4'>
            <h4 className='text-xl font-bold'>Minimum Withdrawal</h4>
            <button className="regadiant-btn w-[20rem] text-2xl">30 USDT</button>
          </div>
          <div className='w-full flex items-center justify-between mt-4'>
            <h4 className='text-xl font-bold'>Service fee (Receive 5%)</h4>
            <button className="regadiant-btn w-[20rem] text-2xl">0 USDT</button>
          </div>
        </div>
      </div>

      {/* right  */}
      <div className='sm:w-[35rem] w-full mt-8 sm:mt-0 h-full relative'>
        <div className="card2 mx-auto my-auto p-8">
          <h2 className='text-white font-poppins text-[1.7875rem] font-semibold not-italic leading-none mb-4'>
            Change Address
          </h2>

          <div className="card2 w-full">
            <form onSubmit={handleSubmit} className="space-y-4 w-full">
              {/* Wallet Address */}
              <div>
                <label className="text-white text-lg font-medium block mb-1">Wallet address</label>
                <input
                  type="text"
                  required
                  name="walletAddress"
                  value={formData.walletAddress}
                  onChange={handleChange}
                  className="w-full text-lg px-4 py-2 rounded-md bg-transparent border border-gray-600 text-white focus:outline-none focus:border-green-400"
                />
              </div>

              {/* Amount USDT */}
              <div>
                <label className="text-white text-lg font-medium block mb-1">Amount USDT</label>
                <div className='flex gap-4'>
                  <input
                    type="number"
                    name="amountusdt"
                    value={formData.amountusdt}
                    onChange={handleChange}
                    min={1}
                    className="w-1/2 text-lg px-4 py-2 rounded-md bg-transparent border border-gray-600 text-white focus:outline-none focus:border-green-400"
                  />
                  <button
                    type="button"
                    className="regadiant-btn w-1/2"
                    onClick={handleAllWithdrawal}
                  >
                    All Withdrawal
                  </button>
                </div>
              </div>

              {/* Login Password */}
              <div>
                <label className="text-white text-lg font-medium block mb-1">Login Password</label>
                <input
                  type="password"
                  name="loginPassword"
                  value={formData.loginPassword}
                  onChange={handleChange}
                  required
                  className="w-full text-lg px-4 py-2 rounded-md bg-transparent border border-gray-600 text-white focus:outline-none focus:border-green-400"
                />
              </div>

              {/* Email Code */}
              <div>
                <label className="text-white text-lg font-medium block mb-1">Email code</label>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    name="emailCode"
                    value={formData.emailCode}
                    onChange={handleChange}
                    className="flex-1 text-lg px-4 py-2 rounded-md bg-transparent border border-gray-600 text-white focus:outline-none focus:border-green-400"
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

              {/* Google Verification */}
              <div>
                <label className="text-white text-lg font-medium block mb-1">Google verification</label>
                <input
                  type="text"
                  name="googleVerification"
                  value={formData.googleVerification}
                  onChange={handleChange}
                   maxLength={6}
                   required
                  className="w-full px-4 text-lg py-2 rounded-md bg-transparent border border-gray-600 text-white focus:outline-none focus:border-green-400"
                />
              </div>

              {/* Buttons */}
              <div className='flex gap-4'>
                <button
                  type="button"
                  className="border rounded-md border-[#01EBE0] text-[#01EBE0] text-lg w-1/2"
                  onClick={() => console.log("Cancel clicked")}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="regadiant-btn text-lg w-1/2"
                >
                  Withdrawal
                </button>
              </div>
            </form>
          </div>

          {/* Notes Section */}
          <div className="card2 mt-4">
            <h5 className='font-bold text-[1.2rem]'>
              <span className="inline-block mr-2 w-2 h-2 bg-[#01EBE0] rounded-full"></span>
              The second withdrawal can only be initiated after the first withdrawal has been credited.
            </h5>
            <h5 className='font-bold text-[1.2rem]'>
              <span className="inline-block w-2 mr-2 h-2 bg-[#01EBE0] rounded-full"></span>
              Funds will be credited within 96 hours of withdrawal.
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Withdrawalnew;
