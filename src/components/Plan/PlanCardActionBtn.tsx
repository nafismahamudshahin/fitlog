import { ExerciseContext } from '@/contexts/ExercisePlanStoreContext';
import Link from 'next/link';
import { useContext } from 'react';
import { LuX } from 'react-icons/lu';

const PlanCardActionBtn = ({ id }: { id: number }) => {
    const { btnIsActive, planExercise, setPlanExercise, saveExercise, setSaveExercise } = useContext(ExerciseContext);
    const handleDeletePlanCard = (id: number): void => {
        if (btnIsActive) {
            setPlanExercise([...planExercise.filter(p => p.id !== id)]);
        } else {
            setSaveExercise([...saveExercise.filter(s => s.id !== id)]);
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
                    <button className="rounded-full bg-lime-400 px-4 py-2 text-md font-semibold text-black transition hover:bg-lime-300">
                        Mark as Done
                    </button> : ""
            }
            <button onClick={() => handleDeletePlanCard(id)} className="ml-1 p-2 text-[#858994] transition hover:text-white">
                <LuX size={20} />
            </button>
        </>
    );
};

export default PlanCardActionBtn;