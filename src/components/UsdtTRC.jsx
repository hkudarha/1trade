import React from 'react'
import img from "../assets/Animation.png"
import img2 from "../assets/Crypto Coins.png"

const UsdtTRC = () => {
  return (
    <div className='w-full flex h-full relative'>
          {/* left  */}
          <div className='sm:flex-1 w-full h-full relative'>
            <div className='flex items-center '>
              <img src={img2} alt="" className='w-[5rem] h-[5rem]' />
              <h5 className='text-2xl ml-4'>USDT (TRC-20)</h5>
            </div>
            <img src={img} alt="" className='w-[20rem] right-0 bottom-0 absolute' />
          </div>
          {/* right  */}
          <div className='sm:w-[47rem] p-[5rem] w-full h-full relative'>
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
                <h5 className='text-bold text-[1.2rem] text-center'>
                  After changing the address, the withdrawal service will be
                  Disabled for 96 Hours to protect your account.
                </h5>
              </div>
            </div>
          </div>
        </div>
  )
}

export default UsdtTRC