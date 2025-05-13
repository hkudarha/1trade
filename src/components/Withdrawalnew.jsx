import React from 'react'

const Withdrawalnew = () => {
  return (
    <div className='w-full h-full flex flex-col sm:flex-row relative'>
              {/* left  */}
              <div className='flex-1  h-full sm:mr-[5rem]'>
                  <div className="card2">
                    <div className='w-full  flex items-center justify-between'>
                      <h4 className='text-xl text-bold'>Available Balance</h4>
                      <button className="regadiant-btn w-[20rem] text-2xl">6.46</button>
                    </div>
                    <div className='w-full  flex items-center justify-between mt-4'>
                      <h4 className='text-xl text-bold'>Minimum Withdrawal</h4>
                      <button className="regadiant-btn w-[20rem] text-2xl">30 USDT</button>
                    </div>
                    <div className='w-full  flex items-center justify-between mt-4'>
                      <h4 className='text-xl text-bold'>Service fee (Receive 5%)</h4>
                      <button className="regadiant-btn w-[20rem] text-2xl">0 USDT</button>
                    </div>
                  </div>
              </div>
              {/* right  */}
              <div className='sm:w-[35rem]  w-full h-full relative'>
                <div className="card2  mx-auto my-auto p-8">
                  <h2 className='text-white font-poppins text-[1.7875rem] font-semibold not-italic leading-none mb-4'>Change Address</h2>
                  <div className="card2 w-full">
                    <form className="space-y-4 w-full">
                      <div>
                        <label className="text-white text-lg font-medium block mb-1">Wallet address</label>
                        <input
                          type="text"
                          className="w-full px-4 py-2 rounded-md bg-transparent border border-gray-600 text-white focus:outline-none focus:border-green-400"
                        />
                      </div>
        
                      <div>
                        <label className="text-white text-lg font-medium block mb-1">Login password</label>
                        <input
                          type="password"
                          className="w-full px-4 py-2 rounded-md bg-transparent border border-gray-600 text-white focus:outline-none focus:border-green-400"
                        />
                      </div>
        
                      <div>
                        <label className="text-white text-lg font-medium block mb-1">Email code</label>
                        <div className="flex space-x-2">
                          <input
                            type="text"
                            className="flex-1 px-4 py-2 rounded-md bg-transparent border border-gray-600 text-white focus:outline-none focus:border-green-400"
                          />
                          <button
                            type="button"
                            className="regadiant-btn"
                          >
                            GET OTP
                          </button>
                        </div>
                      </div>
        
                      <div>
                        <label className="text-white text-lg font-medium block mb-1">Google verification</label>
                        <input
                          type="text"
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
                    <h5 className='text-bold text-[1.2rem]'>
                    <span className="inline-block mr-2 w-2 h-2 bg-[#01EBE0] rounded-full"></span> The second withdrawal can only be initiated after the firs withdrawal has been credited.
                    </h5>
                    <h5 className='text-bold text-[1.2rem] '>
                     <span className="inline-block w-2 mr-2 h-2 bg-[#01EBE0] rounded-full"></span> Funds will be credited within 96 hours of withdrawal.
                    </h5>
                  </div>
                </div>
              </div>
            </div>
  )
}

export default Withdrawalnew