import React from 'react';


export default function MetricsLineChart({ visits, sessions, clicks }) {
    const daysInMonth = 31;

    function getAverages(metric) {
        const totalValues = metric.reduce((sum, metric) => sum + metric.value, 0);
        const dayAverage = (totalValues / daysInMonth).toFixed(2);
        const hourAverage = (totalValues / (daysInMonth * 24)).toFixed(2);
        const minuteAverage = (totalValues / (daysInMonth * 24 * 60)).toFixed(2);
        return [minuteAverage, hourAverage, dayAverage]
    }

    return (
        <>
            <div className='mb-2 pl-20 grid grid-cols-4'>
                <div className='flex items-center text-gray-400 text-xs font-light'>METRIC</div>
                <div className='flex items-center text-gray-400 text-xs font-light'>PER MINUTE</div>
                <div className='flex items-center text-gray-400 text-xs font-light'>PER HOUR</div>
                <div className='flex items-center text-gray-400 text-xs font-light'>PER DAY</div>
            </div>

            <div className='grid grid-rows-3 border border-gray-300 rounded'>
                <div className='py-1 grid grid-cols-4 pl-20 border-b border-gray-300'>
                    <div className='flex items-center space-x-2'>
                        <span className={`w-3 h-3 flex rounded-full
                            bg-[#FFB2C1] border-2 border-[#FF6484]`}
                        ></span>
                        <span>Visits</span>
                    </div>
                    {getAverages(visits).map(((average, index) =>
                        <div key={index}>{average}</div>
                    ))}
                </div>
                <div className='py-1 grid grid-cols-4 pl-20 border-b border-gray-300'>
                    <div className='flex items-center space-x-2'>
                        <span className={`w-3 h-3 flex rounded-full
                            bg-[#FFE6AE] border-2 border-[#FFCD56]`}
                        ></span>
                        <span>Sessions</span>
                    </div>
                    {getAverages(sessions).map(((average, index) =>
                        <div key={index}>{average}</div>
                    ))}
                </div>
                <div className='py-1 grid grid-cols-4 pl-20'>
                    <div className='flex items-center space-x-2'>
                        <span className={`w-3 h-3 flex rounded-full
                            bg-[#A0D0F5] border-2 border-[#36A2EB]`}
                        ></span>
                        <span>Clicks</span>
                    </div>
                    {getAverages(clicks).map(((average, index) =>
                        <div key={index}>{average}</div>
                    ))}
                </div>
            </div>
        </>
    );
};
