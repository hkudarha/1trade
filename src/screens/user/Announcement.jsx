import React from 'react'
import { GlowButton } from '../../components/ui/Buttons'
import eid from '../../assets/eid.png'
import { announcementsCardData } from '../../utils/data'

const Announcement = () => {
    return (
        <div className='space-y-10 p-4 md:p-10 max-w-screen-xl mx-auto'>
            <GlowButton text="Announcement" onClick={() => { }} />

            <div className='border-2 border-[#00d5e6] rounded-3xl p-4 sm:p-6 bg-black/20'>
                <h1 className='text-[1.5rem] mb-6 font-semibold'>Customer Support</h1>
                <div className='flex gap-5'>
                    <div className='w-1/2 space-y-4'>
                        {
                            announcementsCardData.map((item, index) => (
                            <div key={index} className='flex justify-between gap-5 p-4 border-2 border-gray-400 rounded-3xl'>
                                <div className='space-y-4'>
                                    <h2 className='text-[1.5rem] font-semibold'>{item.title}</h2>
                                    <button className='bg-white text-black hover:bg-[#00d5e6] transition-all duration-300 px-4 py-2 rounded-lg text-[1.2rem] font-semibold'>
                                        {item.tag}
                                    </button>   
                                    <p className='text-[1rem]'>{item.date}</p>
                                </div>
                                <div>
                                    <img src={item.image} alt="notice-image" className='h-40 w-40 object-cover object-top' />
                                </div>
                            </div>
                            ))
                        }
                    </div>
                    <div className='w-1/2'>
                        <div>
                            <img src={eid} alt="eid-image" className='h-96 w-[60%] object-cover object-top mx-auto' />
                        </div>
                        <div className='text-center mt-5 space-y-4'>
                            <h2 className='text-[2rem] font-semibold'>About 1 Trade notice on new updates</h2>
                            <p className='text-[1.2rem]'>About 1 Trade notice on new updates</p>
                            <p className='text-[1.2rem]'>About 1 Trade notice on new updates</p>
                            <p className='text-[1.2rem]'>About 1 Trade notice on new updates</p>
                            <p className='text-[1.2rem]'>About 1 Trade notice on new updates</p>
                            <p className='text-[1.2rem]'>About 1 Trade notice on new updates</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Announcement
