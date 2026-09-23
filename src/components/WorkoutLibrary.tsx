import { IExerciseType } from '@/types/types';
import React from 'react';
import WorkoutCard from './WorkoutCard';

const WorkoutLibrary = async () => {
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
    const exercises: IExerciseType[] = await res.json();
    return (
        <section className='container mx-auto mt-15 mb-20'>
            <div className='space-y-2 mb-8'>
                <h1 className='text-white text-4xl font-bold'>THE LIBRARY</h1>
                <p className='text-[#9CA3AF] text-md'>Twelve lifts covering every major muscle group.</p>
            </div>
            <div className="grid w-full grid-cols-1 gap-6 md:gap-10 lg:gap-12 md:grid-cols-2 lg:grid-cols-3">
                {
                    exercises.map(exercise => <WorkoutCard key={exercise.id} exercise={exercise}></WorkoutCard>)
                }
            </div>
        </section>
    );
};

export default WorkoutLibrary;