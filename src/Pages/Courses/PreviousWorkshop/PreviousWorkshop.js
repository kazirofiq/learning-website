import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import { server } from '../../../variables/server';
import WorkshopCard from './WorkshopCard';
const PreviousWorkshop = () => {

    const { user } = useContext(AuthContext);
    const [workshops, setWorkshops] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0)
        fetch(`${server}/users/uid?uid=${user?.uid}`)
            .then(res => res.json())
            .then(data => {
                setWorkshops(data?.enrolledWorkshops)
            })
            .catch(err => {
                console.error(err);
            });
    }, [user])
    return (
        <div>
            <div className='mx-[35px] lg:mx-[145px] md:mx-[20px]'>
                <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-4 mt-[24px] md:mt-[34px] lg:mt-[48px] mb-[48px] md:mb-[70px] lg:mb-[96px]'>
                    {
                        workshops.map(w =>
                            <WorkshopCard key={w} workshopId={w}></WorkshopCard>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default PreviousWorkshop;