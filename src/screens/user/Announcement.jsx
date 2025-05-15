import React from 'react'
import { GlowButton } from '../../components/ui/Buttons'
import eid from '../../assets/eid.png'
import { announcementsCardData } from '../../utils/data'

const Announcement = () => {
    return (
        <div className='space-y-10 p-4 md:p-10 max-w-screen-xl mx-auto'>
            <GlowButton text="Announcement" onClick={() => { }} />

            <div className='border-2 border-[#00d5e6] rounded-3xl p-4 sm:p-6 bg-black/20'>
                <h1 className='text-2xl md:text-3xl mb-6 font-semibold'>Customer Support</h1>

                <div className='flex flex-col lg:flex-row gap-8'>
                    {/* Left Side - Announcements */}
                    <div className='w-full lg:w-1/2 space-y-6'>
                        {announcementsCardData.map((item, index) => (
                            <div key={index} className='flex justify-between gap-4 p-4 border-2 border-gray-400 rounded-3xl'>
                                <div className='space-y-3 flex-1'>
                                    <h2 className='text-xl font-semibold'>{item.title}</h2>
                                    <button className='bg-white text-black hover:bg-[#00d5e6] transition-all duration-300 px-4 py-2 rounded-lg text-base font-semibold'>
                                        {item.tag}
                                    </button>
                                    <p className='text-sm'>{item.date}</p>
                                </div>
                                <div className='flex-shrink-0'>
                                    <img src={item.image} alt="notice" className='h-32 w-32 sm:h-40 sm:w-40 object-cover object-top rounded-xl' />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Side - Eid Image and Description */}
                    <div className='w-full lg:w-1/2'>
                        <div>
                            <img src={eid} alt="eid" className='h-80 w-full max-w-md object-cover object-top mx-auto rounded-xl' />
                        </div>
                        <div className='text-center mt-6 space-y-3 px-2'>
                            <h2 className='text-xl md:text-2xl font-semibold'>About 1 Trade notice on new updates</h2>
                            <p className='text-base md:text-lg'>About 1 Trade notice on new updates</p>
                            <p className='text-base md:text-lg'>About 1 Trade notice on new updates</p>
                            <p className='text-base md:text-lg'>About 1 Trade notice on new updates</p>
                            <p className='text-base md:text-lg'>About 1 Trade notice on new updates</p>
                            <p className='text-base md:text-lg'>About 1 Trade notice on new updates</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Announcement
