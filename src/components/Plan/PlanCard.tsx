import { IExerciseType } from '@/types/types';
import Image from 'next/image';
import { CiClock2 } from 'react-icons/ci';
import { FaFire } from 'react-icons/fa';
import { IoStarHalf } from 'react-icons/io5';
import PlanCardActionBtn from './PlanCardActionBtn';

const PlanCard = ({ exercise }: { exercise: IExerciseType }) => {
    const { id, name, duration, rating, caloriesBurned, equipment, image } = exercise;
    return (
        <div className="flex flex-col gap-3 rounded-xl border border-[#252832] bg-[#12151b] p-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
            <div className='flex min-w-0 items-center gap-3'>
                <div className="h-25 w-40 shrink-0 rounded-lg">
                    <Image className="h-full w-full rounded-2xl object-cover" src={image} width={122} height={56} alt={name} />
                </div>

                <div className="min-w-0">
                    <h3 className="truncate text-md font-bold uppercase text-white">{name}</h3>
                    <p className="text-sm text-[#858994]">{equipment}</p>
                    <div className="mt-1 flex items-center gap-3 text-[12px] text-[#a1a5b0] ">
                        <span className="flex items-center gap-1"> <CiClock2 className="text-lime-400" /> {duration} min </span>
                        <span className="flex items-center gap-1"><FaFire className="text-lime-400" /> {caloriesBurned} kcal</span>
                        <span className="flex items-center gap-1"><IoStarHalf className='text-lime-400' />{rating}</span>
                    </div>
                </div>
            </div>
            {/* Right side */}
            <div className="flex shrink-0 items-center gap-2">
                <PlanCardActionBtn id={id}></PlanCardActionBtn>
            </div>
        </div>
    );
};

export default PlanCard;