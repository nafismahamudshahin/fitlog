"use client";
import { ExerciseContext } from '@/contexts/ExercisePlanStoreContext';
import { IExerciseType } from '@/types/types';
import { useContext } from 'react';
import { FaRegBookmark } from 'react-icons/fa';
import { LuCalendarPlus2 } from 'react-icons/lu';
import { toast } from 'react-toastify';

interface IExerciseActionProps {
    exercise: IExerciseType
}

const ExerciseActions = ({ exercise }: IExerciseActionProps) => {
    const { planExercise, setPlanExercise, saveExercise, setSaveExercise } = useContext(ExerciseContext);
    const handleAddToPlan = (): void => {
        const exist = planExercise.some(plan => plan.id === exercise.id);
        if (!exist) {
            setPlanExercise([...planExercise, exercise]);
            toast.success("Added To today's plan.")
        } else {
            toast.error("Already in your plan.")
        }
    }
    const handleAddToSave = (): void => {
        const exist = saveExercise.some(plan => plan.id === exercise.id);
        if (!exist) {
            setSaveExercise([...saveExercise, exercise]);
            toast.success("Added to save list.")
        } else {
            toast.error("Already in your save list.")
        }
    }
    return (
        <>
            <div className='grid grid-cols-2 gap-2'>
                <button onClick={() => handleAddToPlan()} className='btn bg-lime-400 border-none rounded-xl font-bold text-sm items-center'><LuCalendarPlus2 className='text-xl md:text-2xl font-bold' /> Add to today{`'`}s plan</button>
                <button onClick={() => handleAddToSave()} className='btn bg-black hover:bg-lime-400 hover:text-black rounded-xl border border-lime-400 text-lime-400'><FaRegBookmark className='text-sm md:text-xl' />  Save for later</button>
            </div>
        </>
    );
};

export default ExerciseActions;