import { IWorkOut } from '@/types/types';
import React from 'react';

const WorkoutLibrary = async () => {
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
    const workouts: IWorkOut[] = await res.json();
    return (
        <section className='container mx-auto my-8'>
            <div className='space-y-2'>
                <h1 className='text-white text-4xl font-bold'>THE LIBRARY</h1>
                <p className='text-[#9CA3AF] text-md'>Twelve lifts covering every major muscle group.</p>
            </div>
            {

            }
        </section>
    );
};

export default WorkoutLibrary;