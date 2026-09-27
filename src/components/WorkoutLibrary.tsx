"use client";
import { IExerciseType } from '@/types/types';
import WorkoutCard from './WorkoutCard';
import SearchWorkout from './SearchWorkout';
import { useEffect, useState } from 'react';
import WorkoutSkeleton from './WorkoutSkeleton';

const WorkoutLibrary = () => {
    const [search, setSearch] = useState<string>("");
    const [exercises, setExercises] = useState<IExerciseType[]>([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch("https://api.abcz.workers.dev/api/fitlog")
            .then((res) => res.json())
            .then((data) => {
                setExercises(data);
            })
            .catch((error) => {
                console.error(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <WorkoutSkeleton></WorkoutSkeleton>
    }
    let searchExerices = exercises;
    if (search !== "") {
        searchExerices = exercises.filter(e => (e.name).toLowerCase().includes(search.toLowerCase()));
    }

    return (
        <section id='library' className='container mx-auto mt-15 mb-20'>
            <div>
                <div className='space-y-2 mb-8'>
                    <h1 className='text-white text-3xl md:text-4xl font-bold'>THE LIBRARY</h1>
                    <p className='text-[#9CA3AF] text-md'>Twelve lifts covering every major muscle group.</p>
                </div>
                <div>
                    <SearchWorkout setSearch={setSearch}></SearchWorkout>
                </div>
            </div>
            <div className="grid w-full grid-cols-1 gap-6 md:gap-10 lg:gap-12 md:grid-cols-2 lg:grid-cols-3">
                {
                    searchExerices.map(exercise => <WorkoutCard key={exercise.id} exercise={exercise}></WorkoutCard>)
                }
            </div>
        </section>
    );
};

export default WorkoutLibrary;