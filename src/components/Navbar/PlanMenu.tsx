"use client";
import { ExerciseContext } from '@/contexts/ExercisePlanStoreContext';
import Link from 'next/link';
import { useContext } from 'react';

const PlanMenu = () => {
    const { planExercise, saveExercise } = useContext(ExerciseContext);
    return (
        <>
            <Link href="/my-plan" className="">
                <div className="flex gap-2">
                    <span>
                        Plan
                    </span>
                    <b className="bg-lime-400 text-black w-6 flex justify-center h-full rounded-full">{planExercise.length}</b>
                </div>
            </Link>
            <Link href="/my-plan" className="">
                <div className="flex gap-2">
                    <span>
                        Saved
                    </span>
                    <b className="border text-white w-6 flex justify-center h-full rounded-full">{saveExercise.length}</b>
                </div>
            </Link>
        </>
    );
};

export default PlanMenu;