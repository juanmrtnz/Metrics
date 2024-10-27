import React from 'react';


export default function MetricsTable({ metrics }) {
    // Display message if there's no data for the selected month
    if (!metrics || metrics.length === 0) {
        return <div className='pl-2 text-sm text-gray-500'>No data</div>;
    }

    function formatDate(timestamp) {
        const date = new Date(timestamp);
        const formattedDate = date.toLocaleString('en-UK', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        });
        return formattedDate;
    }

    function getDotColor(metricType) {
        if (metricType === 'Visit') {
            return 'bg-[#FFB2C1] border-2 border-[#FF6484]'
        } else if (metricType === 'Session') {
            return 'bg-[#FFE6AE] border-2 border-[#FFCD56]'
        } else if (metricType === 'Click') {
            return 'bg-[#A0D0F5] border-2 border-[#36A2EB]'
        }
    }

    return (
        <div>
            <div className='pl-20 grid grid-cols-3'>
                <div className='flex items-center text-gray-400 text-xs font-light'>TYPE</div>
                <div className='flex items-center text-gray-400 text-xs font-light'>VALUE</div>
                <div className='flex items-center text-gray-400 text-xs font-light'>DATE</div>
            </div>
            <div className='max-h-96 overflow-y-auto'>
                {metrics.map((metric =>
                    <div key={`${metric.type}-${metric.id}`}className={`mt-2 pl-20 py-1
                        grid grid-cols-3 border border-gray-200 rounded shadow`}
                    >
                        <div className='flex items-center space-x-2'>
                            <span 
                                className={`w-3 h-3 flex rounded-full ${getDotColor(metric.type)}`}
                            ></span>
                            <span>{metric.type}</span>
                        </div>
                        <div className='flex items-center'>{metric.value}</div>
                        <div className='flex items-center text-xs'>
                            {formatDate(metric.date)}
                        </div>
                    </div>
                ))}
            </div>
        </div>       
    );
};
