import { IWorkoutProps } from '@/types/types';
import Image from 'next/image';
import React from 'react';
import { FaFireAlt, FaStarHalfAlt } from 'react-icons/fa';
import { GoClock } from 'react-icons/go';

const WorkoutCard = ({ workout }: IWorkoutProps) => {
    const { name, image, muscleGroups, equipment, duration, caloriesBurned, rating } = workout;
    return (
        <div className="w-full overflow-hidden rounded-2xl border border-[#292d35] bg-[#15171c]">
            <div className="relative h-90 w-full overflow-hidden">
                <Image className="h-full w-full object-cover" width={500} height={300} src={image} alt={name} />
            </div>
            <div className="p-5">
                <div className="mb-4 flex flex-wrap gap-2">
                    {
                        muscleGroups.map(muscleGroup => (
                            <>
                                <span className="rounded-full bg-lime-400 px-3 py-1 text-xs font-bold uppercase text-black">
                                    {muscleGroup}
                                </span>
                            </>
                        ))
                    }
                </div>
                <div className="mb-4">
                    <h2 className="text-lg font-bold uppercase tracking-wide text-white">{name} </h2>
                    <p className="mt-1 text-sm text-[#9CA3AF]">{equipment}</p>
                </div>
                <div className="mb-4 border-t border-[#292d35]" />
                <div className="flex items-center gap-5 text-sm text-[#9CA3AF]">
                    <span className="flex items-center gap-1.5">
                        <GoClock />
                        {duration} min
                    </span>
                    <span className="flex items-center gap-1.5">
                        <FaFireAlt />
                        {caloriesBurned} kcal
                    </span>
                    <span className="flex items-center gap-1.5">
                        <FaStarHalfAlt />
                        {rating}
                    </span>
                </div>

            </div>
        </div>
    );
};

export default WorkoutCard;