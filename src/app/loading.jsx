import React from 'react';

const loading = () => {
    return (
        <div>
            <div className="w-full h-22 bg-lime-100 flex justify-center items-center">
                <span className="loading loading-spinner text-[#002d40] loading-xl"></span>
            </div>
        </div>
    );
};

export default loading;