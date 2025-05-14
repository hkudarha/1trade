import React from 'react';

const LevelCard = ({ level, round, credits, maxCredits, progress, badgeImage, bgColor, progressColor }) => {
    return (
        <div className={`flex justify-between items-center rounded-xl p-4 mb-4`} style={{ background: bgColor }}>
            <div className="w-full text-white pr-5">
                <div className="flex items-center gap-2 text-[2rem] font-semibold">
                    <span>🔒</span>
                    <span>Level {level}</span>
                </div>
                <p className="bg-transparent text-white border-2 rounded-full px-3 py-1 w-fit text-lg font-medium mt-4">Round {round}</p>
                <p className="text-lg mt-4">Ai credits: {credits}/{maxCredits}</p>
                <div className="w-full h-2 bg-gray-300 rounded-full">
                    <div
                        className="h-2 w-full rounded-full"
                        style={{ width: `${progress}%`, background: progressColor }}
                    />
                </div>
                <p className="text-lg">{progress}%</p>
            </div>
            <div className='w-[30%]'>
                <img src={badgeImage} alt={`Level ${level} badge`} className="h-52 w-52 object-cover" />
            </div>
        </div>
    );
};

export default LevelCard;
