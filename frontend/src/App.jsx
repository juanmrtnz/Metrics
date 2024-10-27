import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './index.css'
import Navbar from './components/Navbar';
import CreateMetricForm from './components/CreateMetricForm';
import MetricsTable from './components/MetricsTable';
import MetricsLineChart from './components/MetricsLineChart';
import MetricsAveragesTable from './components/MetricsAveragesTable';
import Header from './components/Header';


export default function App() {
    const [metrics, setMetrics] = useState([]);
    const [visits, setVisits] = useState([]);
    const [sessions, setSessions] = useState([]);
    const [clicks, setClicks] = useState([]);

    // Set default month to either stored month or current month
    const defaultMonth = localStorage.getItem('selectedMonth') 
        ? Number(localStorage.getItem('selectedMonth'))
        : new Date().getMonth() + 1;

    const [selectedMonth, setSelectedMonth] = useState(defaultMonth);

    // Fetch metrics data from backend, optionally filtered by the selected month
    const fetchMetrics = (month = null) => {
        let url = 'http://localhost:8000/';

        // If a month is selected, append it as a query parameter
        if (month) {
            url += `?month=${month}`;
        }

        axios.get(url)
            .then(res => {
                const metrics = res.data;
                setMetrics(metrics);
                setVisits(metrics.filter(metric => metric.type === 'Visit'));
                setSessions(metrics.filter(metric => metric.type === 'Session'));
                setClicks(metrics.filter(metric => metric.type === 'Click'));
            });
    };

    // Fetch metrics on component mount and whenever selectedMonth changes
    useEffect(() => {
        fetchMetrics(selectedMonth);
    }, [selectedMonth]);

    // Update selected month when it is changed by the user
    function handleMonthChange(event) {
        const month = Number(event.target.value);
        setSelectedMonth(month);
        localStorage.setItem('selectedMonth', month);
    }

    return (
        <>
            <Navbar />

            <div className='ml-10 flex items-center space-x-2 text-gray-500 italic'>
                <div>Displaying data from</div>
                <select
                    value={selectedMonth}
                    onChange={handleMonthChange}
                    className='text-lg p-0.5 border border-gray-200 rounded shadow'
                >
                    {Array.from({ length: 12 }, (_, i) => (
                        <option key={i} value={i + 1}>
                            {new Date(0, i).toLocaleString('en', { month: 'long' })}
                        </option>
                    ))}
                </select>
            </div>

            <hr className='mt-3 mb-6 mx-10' />

            <div className='flex'>
                <div className='w-5/12 px-10'>
                    <Header title='Create new metrics' />
                    <CreateMetricForm />
                    <Header title='All metrics' />
                    <MetricsTable metrics={metrics} />
                </div>

                <div className='w-7/12 px-10'>
                    <Header title='User interaction' />
                    <MetricsLineChart visits={visits} sessions={sessions} clicks={clicks} />
                    <Header title='Averages' />
                    <MetricsAveragesTable visits={visits} sessions={sessions} clicks={clicks} />
                </div>
            </div>
        </>
    );
}
