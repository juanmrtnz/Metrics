import React, { useState } from 'react';
import axios from 'axios';


export default function CreateMetricForm() {
    const [type, setType] = useState('');
    const [value, setValue] = useState('');
    const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  
    // Post data to backend when form is submitted
    function handleSubmit() {
        axios.post('http://localhost:8000/', { type, value, date })
    };
  
    return (
        <form onSubmit={handleSubmit}
            className='mb-10 p-5 grid grid-rows-2 gap-5 border border-gray-200 rounded shadow'
        >
            <div className='grid grid-cols-2 justify-items-center'>
                <select type='select' value={type} placeholder='Name' required
                    onChange={e => setType(e.target.value)}
                    className='w-2/3 px-2 border border-gray-400 rounded'
                >
                    <option value='' disabled>Select a type</option>
                    <option value='Visit'>Visit</option>
                    <option value='Session'>Session</option>
                    <option value='Click'>Click</option>
                </select>
                <input type='date' value={date} required onChange={e => setDate(e.target.value)}
                    className='w-2/3  px-2 border border-gray-400 rounded'
                />
            </div>

            <div className='grid grid-cols-2 justify-items-center'>
                <input type='number' value={value} placeholder='Value' required
                    onChange={e => setValue(e.target.value)}
                    className='w-2/3 px-2 border border-gray-400 rounded'
                />
                <button type='submit'
                    className='px-3 py-1 bg-blue-600 border border-blue-900 text-white rounded'
                >Add metric</button>
            </div>
        </form>
    );
  };
