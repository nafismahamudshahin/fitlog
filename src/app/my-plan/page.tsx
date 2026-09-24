"use client";
import EmptyPlan from '@/components/Plan/EmptyPlan';
import PlanCard from '@/components/Plan/PlanCard';
import PlanSummary from '@/components/Plan/PlanSummary';
import { ExerciseContext } from '@/contexts/ExercisePlanStoreContext';
import Link from 'next/link';
import React, { useContext } from 'react';


const MyPlanPage = () => {
    const { planExercise, setPlanExercise, saveExercise, setSaveExercise, btnIsActive, setBtnAcive } = useContext(ExerciseContext);
    const plan = planExercise.reduce((acc, exercise) => ({
        duration: acc.duration + exercise.duration,
        calories: acc.calories + exercise.caloriesBurned,
    }), {
        duration: 0,
        calories: 0,
    });

    const save = saveExercise.reduce((acc, exercise) => ({
        duration: acc.duration + exercise.duration,
        calories: acc.calories + exercise.caloriesBurned,
    }), {
        duration: 0,
        calories: 0,
    });
    const planData = { length: planExercise.length, duration: plan.duration, calories: plan.calories };
    const saveData = { length: saveExercise.length, duration: save.duration, calories: save.calories };
    return (
        <section className='container mx-auto'>
            <div className='my-8'>
                <h2 className='text-white font-bold text-5xl'>MY PLAN</h2>
                <p className='text-lg text-[#9CA3AF]'>Cap of five lifts for today. Finish them, then load more.</p>
            </div>
            {
                btnIsActive ? <PlanSummary data={planData}></PlanSummary> : <PlanSummary data={saveData}></PlanSummary>
            }

            <div>
                <div className='flex justify-between'>
                    <div className='bg-[#13161D] text-[#9CA3AF]   flex gap-3 border border-[#252832] rounded-2xl p-1'>
                        <button onClick={() => setBtnAcive(true)} className={`${btnIsActive ? "border border-[#252832] text-lime-400" : "border border-transparent"} font-bold rounded-2xl px-3 py-2`}>Today{`'`}s Plan</button>
                        <button onClick={() => setBtnAcive(false)} className={`${btnIsActive ? "border border-transparent" : "border border-[#252832] text-lime-400"} font-bold rounded-2xl px-10 py-2`}>Saved</button>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-xl text-[#858994]">Sort By</span>
                        <select
                            className="rounded-lg border border-[#252832] bg-[#12151b] px-3 py-2 text-xl text-[#d1d5db] outline-none  focus:border-[#353944]"
                            defaultValue="duration">
                            <option value="duration">Duration</option>
                            <option value="calories">Calories</option>
                            <option value="difficulty">Difficulty</option>
                            <option value="name">Name</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 gap-4 py-5'>
                {
                    btnIsActive ? planExercise.length === 0 ? <EmptyPlan /> : planExercise.map(exercise => <PlanCard key={exercise.id} exercise={exercise}></PlanCard>) : saveExercise.length === 0 ? <EmptyPlan /> : saveExercise.map(exercise => <PlanCard key={exercise.id} exercise={exercise}></PlanCard>)
                }
            </div>
        </section>
    );
};

export default MyPlanPage;