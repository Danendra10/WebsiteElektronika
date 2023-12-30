import React from 'react';

export const Header = () => {
    return (
        <div className='text-white'>
            <div className='fixed top-0 w-full z-10'>
                <div className="grid grid-cols-2 p-5">
                    <div>
                        <img src="/favicon.png" alt="" className='w-20' />
                    </div>
                    <div className="flex justify-end items-center gap-x-10 text-xl px-5 my-auto">
                        <p>Home</p>
                        <p>Our Activities</p>
                        <p>Our Teams</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
