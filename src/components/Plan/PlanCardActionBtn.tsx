import { ExerciseContext } from '@/contexts/ExercisePlanStoreContext';
import Link from 'next/link';
import { useContext } from 'react';
import { IoIosCheckmark } from 'react-icons/io';
import { LuX } from 'react-icons/lu';
import { toast } from 'react-toastify';

const PlanCardActionBtn = ({ id }: { id: number }) => {
    const { btnIsActive, planExercise, setPlanExercise, saveExercise, setSaveExercise } = useContext(ExerciseContext);
    const handleDeletePlanCard = (id: number, doneTask: boolean): void => {
        if (btnIsActive) {
            setPlanExercise([...planExercise.filter(p => p.id !== id)]);
            if (doneTask) {
                toast.success("Congraluction Your are complete your task.");
            } else {
                toast.info("Removed from Today's plan");
            }
        } else {
            setSaveExercise([...saveExercise.filter(s => s.id !== id)]);
            toast.info("Removed from Saved list.");
        }
    }

    return (
        <>
            <Link href={`/exercise/${id}`}>
                <button className="rounded-full border border-[#343945] px-4 py-2 text-md text-white transition hover:bg-[#1b1e26]">
                    View Details
                </button>
            </Link>
            {
                btnIsActive ?
                    <button onClick={() => handleDeletePlanCard(id, true)} className="rounded-full bg-lime-400 px-4 py-2 text-md font-semibold text-black transition hover:bg-lime-300 flex items-center">
                        <IoIosCheckmark size={30} />
                        <span>
                            Mark as Done
                        </span>
                    </button> : ""
            }
            <button onClick={() => handleDeletePlanCard(id, false)} className="ml-1 p-2 text-[#858994] transition hover:text-white">
                <LuX size={20} />
            </button>
        </>
    );
};

export default PlanCardActionBtn;