"use client";
import { ExerciseContext } from '@/contexts/ExercisePlanStoreContext';
import { IExerciseType } from '@/types/types';
import { useContext } from 'react';
import { LuCalendarPlus2 } from 'react-icons/lu';

interface IExerciseActionProps {
    exercise: IExerciseType
}

const ExerciseActions = ({ exercise }: IExerciseActionProps) => {
    const { planExercise, setPlanExercise, saveExercise, setSaveExercise } = useContext(ExerciseContext);
    const handleAddToPlan = (): void => {
        setPlanExercise([...planExercise, exercise]);
    }
    const handleAddToSave = (): void => {
        setSaveExercise([...saveExercise, exercise]);
    }
    return (
        <>
            <button onClick={() => handleAddToPlan()} className='btn bg-lime-400 border-none rounded-xl font-bold items-center'><LuCalendarPlus2 className='text-2xl font-bold' /> Add to today{`'`}s plan</button>
            <button onClick={() => handleAddToSave()} className='btn bg-black hover:bg-lime-400 hover:text-black rounded-xl border border-lime-400 text-lime-400'>Save for later</button>
        </>
    );
};

export default ExerciseActions;