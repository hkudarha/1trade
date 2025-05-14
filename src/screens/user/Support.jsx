import React from 'react'
import { GlowButton } from '../../components/ui/Buttons'
import supportAi from '../../assets/support-ai.png'
import { BsEmojiSmileFill } from 'react-icons/bs'
import { AiFillPicture } from 'react-icons/ai'
import { GrAttachment } from 'react-icons/gr'

const Support = () => {
    const [message, setMessage] = useState("");

    const handleSendMessage = () => {
        if (message.trim() === "") return;
        console.log(message)
        // Clear all fields
        setMessage("");

    };

    return (
        <div className='space-y-10 p-4 md:p-10'>
            <GlowButton text="Support" onClick={() => { }} />

            {/* Responsive Flex Layout */}
            <div className='flex flex-col-reverse lg:flex-row gap-5'>
                {/* Image Section */}
                <div className='w-full lg:w-1/2 flex justify-center'>
                    <img src={supportAi} alt="ai-image" className='h-auto w-[70%] max-w-sm md:max-w-md lg:max-w-full' />
                </div>

                {/* Support Form Section */}
                <div className='w-full lg:w-1/2 h-fit border-2 border-[#00d5e6] rounded-3xl p-5 bg-[#101727]'>
                    <h1 className='text-[1.5rem] mb-5 text-white'>Customer Support</h1>

                    <div className='space-y-8'>
                        <div>
                            <input
                                type="text"
                                className='border-2 border-gray-400 rounded-lg py-3 px-4 bg-[#101727] text-[1.25rem] w-full sm:w-[70%] text-white'
                            />
                        </div>
                        <div className='flex justify-end'>
                            <input
                                type="text"
                                className='border-2 border-gray-400 rounded-lg py-3 px-4 bg-[#101727] text-[1.25rem] w-full sm:w-[70%] text-white'
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                className='border-2 border-gray-400 rounded-lg py-3 px-4 bg-[#101727] text-[1.25rem] w-full sm:w-[70%] text-white'
                            />
                        </div>
                        <div className='flex justify-end'>
                            <input
                                type="text"
                                className='border-2 border-gray-400 rounded-lg py-3 px-4 bg-[#101727] text-[1.25rem] w-full sm:w-[70%] text-white'
                            />
                        </div>
                    </div>

                    <div className='mt-10'>
                        <input
                            onChange={(e) => setMessage(e.target.value)}
                            value={message}
                            name='message'
                            type="text"
                            placeholder='Type Message'
                            className='border-2 border-white rounded-lg py-4 px-4 bg-[#101727] w-full text-[1.25rem] placeholder:text-white text-white'
                        />
                    </div>

                    <div className='mt-10 flex flex-wrap items-center gap-4'>
                        <GlowButton text="Send Message" onClick={handleSendMessage} />
                        <BsEmojiSmileFill className='text-[2rem] text-white' />
                        <AiFillPicture className='text-[2rem] text-white' />
                        <GrAttachment className='text-[2rem] text-white' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Support
