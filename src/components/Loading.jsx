import React from 'react';

const Loading = () => {
    return (
        <div className='bg-lime-100'>
            <div className="w-full h-22 bg-lime-100 flex justify-center items-center">
                <span className="loading loading-spinner text-[#002d40] loading-xl"></span>
            </div>
        </div>
    );
};

export default Loading;