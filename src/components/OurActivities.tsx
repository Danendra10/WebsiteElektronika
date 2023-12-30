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
        <div className='w-full h-full p-20'>
            {isLoading ? (
                <Loading />
            ) : (
                ourActivities.map((content, index) => {
                    return (
                        <div key={index}>
                            {content.title}
                        </div>
                    )
                })
            )}
        </div>
    )
}
