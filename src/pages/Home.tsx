import React, { useState, useEffect } from 'react';

const MissionStatements: string[] = [
    "Microelectronics and Embeded System Laboratory Vision is to Establish a dynamic and professional laboratory organization.",
    "Our Missions:",
    "Developing competent assistants.",
    "Conducting activities for the development of hard skills and soft skills.",
    "Carrying out community service activities."
];

export const Home: React.FC = () => {
    const [currentMissionIndex, setCurrentMissionIndex] = useState(0);
    const [key, setKey] = useState(0); // Key to trigger component remount

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentMissionIndex((prevIndex) => (prevIndex + 1) % MissionStatements.length);
            setKey((prevKey) => prevKey + 1); // Change key to trigger re-render
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div key={key} className='relative w-screen h-screen'>
            {/* Black background */}
            <div className="absolute inset-0 bg-black opacity-75" />

            {/* Image */}
            <img
                src="/aslab-elka.png"
                alt=""
                className='absolute inset-0 object-cover w-full h-full opacity-100'
                style={{ mixBlendMode: 'multiply' }}
            />

            {/* Text centered */}
            <div id="content" className="absolute inset-0 flex justify-center items-center">
                <p className="text-white font-bold text-xl text-center max-w-xl p-4 sliding-text animate-slide-left">
                    {MissionStatements[currentMissionIndex]}
                </p>
            </div>
        </div>
    );
};
