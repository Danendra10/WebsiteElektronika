import React, { useEffect, useState } from 'react'
import { OurActivities as OurActivitiesProps } from '../types/OurActivities'
import activities from "../contents/OurActivities.json"
import { Loading } from './Loading';

export const OurActivities: React.FC = () => {
    const [ourActivities, setOurActivities] = useState<OurActivitiesProps[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        setOurActivities(activities);
    }, [])

    useEffect(() => {
        if (ourActivities.length > 1)
            setIsLoading(false)
    }, [ourActivities])

    return (
        <div className='w-full h-full p-20 bg-primary text-white'>
            {isLoading ? (
                <Loading />
            ) : (
                <>
                    <div className='flex justify-center uppercase font-bold text-xl'>
                        Our Activities
                    </div>
                    <div className='mt-10 grid grid-cols-3'>
                        {ourActivities.map((content, index) => {
                            return (
                                <div key={index} className='mx-auto'>
                                    {content.title}
                                </div>
                            )
                        })}
                    </div>
                </>
            )}
        </div>
    )
}
