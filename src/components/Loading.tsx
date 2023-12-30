import React from 'react'

export const Loading: React.FC = () => {
    return (
        <div className='w-screen h-screen justify-center'>
            <img src="/favicon.png" alt="" className='w-20 h-20 animate-pulse' />
            <p className='animate-pulse text-xl'>Loading...</p>
        </div>
    )
}
