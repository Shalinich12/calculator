import React from 'react'

function Notification({ notification }) {
    const bg_color= (type)=>
        type === 'info' ? 'bg-purple-300':
        type === 'success' ? 'bg-green-500' :
        type === 'error' ? 'bg-red-300' :
        type === 'warning' ? 'bg-yellow-400' :
        'bg-blue-100';

    
    return (
        <div className='Container'>
            {
                notification.map((item,index) => (
                    <div className={`p-4 rounded shadow-sm mb-3 ${bg_color(item.type, item.isRead)}`} key={index}>
                        <p className='text-sm text-gray-600'>{item.type}</p>
                        <p className="font-semibold">{item.message}</p>
                        <p className="text-gray-500">{item.timestamp}</p>                        
                    </div>
                ))            
        }
        </div>
    );
}

export default Notification