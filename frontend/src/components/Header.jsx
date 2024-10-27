import React from 'react';


export default function Header({ title }) {  
    return (
        <div className='mb-3 pl-2 text-xl'>
            {title}
        </div>
    );
};
