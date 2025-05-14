import React from 'react'
import { GlowButton } from '../../components/ui/Buttons'
import { levelCardData, teamRebateData } from '../../utils/data'
import LevelCard from '../../components/LevelCard'
import level0 from '../../assets/level0.png'
import level1 from '../../assets/level1.png'
import profile from '../../assets/profile.png'
import { MdContentCopy, MdOutlineErrorOutline } from 'react-icons/md'

const LevelAchievement = () => {
  return (
    <div className='space-y-5 p-4 md:p-10 max-w-screen-xl mx-auto'>
      <GlowButton text="Level Achievement" onClick={() => { }} />
      <div className='flex flex-col lg:flex-row gap-5'>
        <div className='w-full lg:w-1/2'>
          <div>
            {levelCardData.map((data, index) => (
              <LevelCard key={index} {...data} />
            ))}
          </div>
        </div>

        {/* right section */}
        <div className='w-full lg:w-1/2 space-y-5'>

          {/* Valid A Members Section 1 */}
          <div className='flex flex-col md:flex-row justify-between rounded-xl p-4'
            style={{ background: 'linear-gradient(to right, #434343, #bcbcbc)' }}>
            <div className="w-full text-white md:pr-5">
              <h2 className='text-2xl md:text-3xl font-semibold'>Valid A Members</h2>
              <div className='flex items-center gap-3 py-4'>
                <div className="w-full h-10 bg-gray-400 rounded-full">
                  <div className="h-10 w-full rounded-full" style={{ width: `50%`, background: '#ffffff' }} />
                </div>
                <p className="text-xl md:text-2xl">50%</p>
              </div>
              <p className='text-base md:text-xl'>
                Join atleast 3 members with $100 or join 6 members with $50 or you need to deposit $30 minimum to start earning.
              </p>
            </div>
            <div className='mt-4 md:mt-0 md:w-[30%] flex justify-center items-center'>
              <img src={level0} alt="level 0 badge" className="h-40 md:h-52 w-40 md:w-52 object-cover" />
            </div>
          </div>

          {/* Valid A/B/C Members Section 2 */}
          <div className='flex flex-col md:flex-row justify-between rounded-xl p-4'
            style={{ background: 'linear-gradient(to right, #FFD700, #bcbcbc)' }}>
            <div className="w-full text-white md:pr-5">
              <h2 className='text-2xl md:text-3xl font-semibold'>Valid A Members</h2>
              <div className='flex items-center gap-3 py-4'>
                <div className="w-full h-10 bg-gray-400 rounded-full">
                  <div className="h-10 w-full rounded-full" style={{ width: `50%`, background: '#fe7e13' }} />
                </div>
                <p className="text-xl md:text-2xl">50%</p>
              </div>

              <h2 className='text-2xl md:text-3xl font-semibold'>Valid B/C Members</h2>
              <div className='flex items-center gap-3 py-4'>
                <div className="w-full h-10 bg-gray-400 rounded-full">
                  <div className="h-10 w-full rounded-full" style={{ width: `70%`, background: '#fe7e13' }} />
                </div>
                <p className="text-xl md:text-2xl">70%</p>
              </div>
            </div>
            <div className='mt-4 md:mt-0 md:w-[30%] flex justify-center items-center'>
              <img src={level1} alt="level 1 badge" className="h-40 md:h-52 w-40 md:w-52 object-cover" />
            </div>
          </div>

          {/* Level 2 card */}
          <div className='bg-[#25272D] rounded-3xl p-4'>
            <table className="w-full">
              <thead>
                <tr>
                  <th className='w-1/2 text-left text-white'>Level 2</th>
                  <th className='w-1/2 text-right text-white'>Required</th>
                </tr>
              </thead>
              <tbody>
                {teamRebateData.map((item, index) => (
                  <tr key={index}>
                    <td className='w-1/2 text-left text-white'>{item.level}</td>
                    <td className='w-1/2 text-right text-white'>{item.required}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Profile card */}
          <div className='bg-[#25272D] rounded-3xl p-4 flex flex-col md:flex-row items-center justify-center gap-4'>
            <div className='w-full md:w-1/2 flex items-center justify-center'>
              <div className='w-fit rounded-full bg-gray-700 p-4'>
                <img src={profile} alt="profile-image" className='w-40 md:w-52 h-40 md:h-52 object-cover' />
              </div>
            </div>
            <div className='w-full md:w-1/2 space-y-2'>
              <h1 className='text-2xl md:text-[2.5rem] '>Aniket Sharma</h1>
              <div className='flex items-center  gap-2 text-lg'>
                <p>UUID: 123456</p>
                <MdContentCopy />
              </div>
              <div className='flex items-center gap-2'>
                <GlowButton text="Active" onClick={() => { }} />
                <MdOutlineErrorOutline className='text-[2rem] md:text-[3rem]' />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

  )
}

export default LevelAchievement
