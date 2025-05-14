import React from 'react'
import { GlowButton } from '../../components/ui/Buttons'
import { aiAgentsData } from '../../utils/data'
import AiAgentCard from '../../components/AiAgentCard'
import { useNavigate } from 'react-router-dom'

const AiAgent = () => {

    return (
        <div className='space-y-10 p-4 md:p-10'>
            <GlowButton text="Ai Agent" onClick={() => { }} />
            <div className='border-2 border-[#00d5e6] rounded-3xl p-6 bg-[#0f172a]'>
                <h1 className='uppercase text-3xl mb-4'>Hire AI Agent</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
                    {aiAgentsData.map((agent) => (
                        <AiAgentCard key={agent.id} agent={agent} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AiAgent
