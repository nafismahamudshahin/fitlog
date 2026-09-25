"use client";
import EmptyPlan from '@/components/Plan/EmptyPlan';
import PlanCard from '@/components/Plan/PlanCard';
import PlanSummary from '@/components/Plan/PlanSummary';
import { ExerciseContext } from '@/contexts/ExercisePlanStoreContext';
import { IExerciseType } from '@/types/types';
import React, { useContext, useState } from 'react';


const MyPlanPage = () => {
    const { planExercise, saveExercise, btnIsActive, setBtnAcive } = useContext(ExerciseContext);
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

    // sort features:
    const [filterOption, setFilterOption] = useState<string>("duration")
    const getSort = (exercises: IExerciseType[]): IExerciseType[] => {
        const copyOfExercises = [...exercises];
        console.log(filterOption)
        if (filterOption === "calories") {
            return copyOfExercises.sort((a, b) => b.caloriesBurned - a.caloriesBurned);
        } else if (filterOption === "rating") {
            return copyOfExercises.sort((a, b) => b.rating - a.rating);
        }
        return copyOfExercises.sort((a, b) => b.duration - a.duration);
    }
    const filteredPlan: IExerciseType[] = getSort(planExercise);
    const filteredSave: IExerciseType[] = getSort(saveExercise);
    return (
        <section className='container mx-auto'>
            <div className='my-8'>
                <h2 className='text-white font-bold text-3xl xl:text-4xl lg:text-5xl'>MY PLAN</h2>
                <p className='text-lg text-[#9CA3AF]'>Cap of five lifts for today. Finish them, then load more.</p>
            </div>
            {
                btnIsActive ? <PlanSummary data={planData}></PlanSummary> : <PlanSummary data={saveData}></PlanSummary>
            }

            <div>
                <div className="flex flex-col-reverse gap-4 lg:flex-row lg:items-center lg:justify-between">

                    {/* Today / Saved */}
                    <div className="bg-[#13161D] text-[#9CA3AF] w-full lg:w-[25%] flex justify-between gap-3 border border-[#252832] rounded-2xl p-1">

                        <button
                            onClick={() => setBtnAcive(true)}
                            className={`${btnIsActive
                                ? "border border-[#252832] text-lime-400"
                                : "border border-transparent"
                                } font-bold rounded-2xl w-full py-2`}>
                            Today{`'`}s Plan
                        </button>

                        <button
                            onClick={() => setBtnAcive(false)}
                            className={`${btnIsActive
                                ? "border border-transparent"
                                : "border border-[#252832] text-lime-400"
                                } font-bold rounded-2xl w-full py-2`}>
                            Saved
                        </button>
                    </div>

                    {/* Sort */}
                    <div className="flex flex-col gap-2 w-full md:flex-row md:items-center lg:w-[45%]">

                        <h4 className="text-xl text-[#858994] md:w-[20%] lg:w-[20%]">
                            Sort By
                        </h4>

                        <select onChange={(e) => setFilterOption(e.target.value)} className="rounded-lg border border-[#252832] w-full md:w-[80%] bg-[#12151b] px-3 py-2 text-xl text-[#d1d5db] outline-none focus:border-[#353944]" defaultValue="duration">
                            <option value="duration">Duration</option>
                            <option value="calories">Calories</option>
                            <option value="rating">Rating</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 gap-4 py-5'>
                {
                    btnIsActive ? filteredPlan.length === 0 ? <EmptyPlan /> : filteredPlan.map(exercise => <PlanCard key={exercise.id} exercise={exercise}></PlanCard>) : filteredSave.length === 0 ? <EmptyPlan /> : filteredSave.map(exercise => <PlanCard key={exercise.id} exercise={exercise}></PlanCard>)
                }
            </div>
        </section>
    );
};

export default MyPlanPage;