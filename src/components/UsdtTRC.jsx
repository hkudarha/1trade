import React from 'react'
import img from "../assets/Animation.png"
import img2 from "../assets/Crypto Coins.png"
import Usdtform from './website/Usdtform'

const UsdtTRC = () => {
  return (
    <div className='w-full h-full flex flex-col sm:flex-row relative'>
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
        <Usdtform/>
      </div>
    </div>
  )
}

export default UsdtTRC