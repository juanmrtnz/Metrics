import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { 
    Chart, LineElement, CategoryScale, LinearScale, 
    PointElement, Title, Tooltip, Legend 
} from 'chart.js';

Chart.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

// Generate an array of days based on the number of days in the month
function generateDaysOfMonth(daysInMonth) {
    return Array.from({ length: daysInMonth }, (_, i) => (i + 1).toString());
}

// Associate each value to its corresponding day of the month
function alignDataByDayOfMonth(metrics, daysInMonth) {
    const dataArray = new Array(daysInMonth).fill(0);
    
    metrics.forEach(metric => {
        // Get day of the month
        const day = new Date(metric.date).getDate();
        // Assign value at correct index
        dataArray[day - 1] = metric.value;
    });
    
    return dataArray;
}

export default function MetricsLineChart({ visits, sessions, clicks }) {
    const [labels, setLabels] = useState([]);
    
    // Get the selected month from localStorage each time it changes
    useEffect(() => {
        const selectedMonth = Number(localStorage.getItem('selectedMonth'));
        const daysInCurrentMonth = new Date(2024, selectedMonth, 0).getDate();
        setLabels(generateDaysOfMonth(daysInCurrentMonth));
    }, [localStorage.getItem('selectedMonth')]);

    const daysInMonth = labels.length;

    // Chart data
    const data = {
        // X-axis labels
        labels: labels,
        // Datasets to construct lines and legend
        datasets: [
            {
                label: 'Visits',
                data: alignDataByDayOfMonth(visits, daysInMonth),
                borderColor: '#FF6484',
                backgroundColor: '#FFB2C1',
                borderWidth: 2,
            },
            {
                label: 'Sessions',
                data: alignDataByDayOfMonth(sessions, daysInMonth),
                borderColor: '#FFCD56',
                backgroundColor: '#FFE6AE',
                borderWidth: 2,
            },
            {
                label: 'Clicks',
                data: alignDataByDayOfMonth(clicks, daysInMonth),
                borderColor: '#36A2EB',
                backgroundColor: '#A0D0F5',
                borderWidth: 2,
            },
        ],
    };

    // Chart options
    const options = {
        responsive: true,
        plugins: {
            legend: { position: 'top' },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Day of month',
                    color: '#666',
                    font: { size: 14 },
                    padding: { top: 5 },
                },
            },
            y: { beginAtZero: true },
        },
    };

    return (
        <div className='mb-2 -mt-3'>
            <Line data={data} options={options} />
        </div>
    );
}
