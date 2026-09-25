import ExerciseActions from '@/components/ExerciseActions';
import { IExerciseType } from '@/types/types';
import Image from 'next/image';
import { notFound } from 'next/navigation';

const ExerciseDetailsPage = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
    const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`);
    if (!res.ok) {
        notFound();
    }
    const exercise: IExerciseType = await res.json();
    const { name, image, muscleGroups, equipment, difficulty, duration, caloriesBurned, rating, description, instructions, sets } = exercise;
    const trStyle: string = 'border-b px-5 py-3 flex justify-between ';
    const tElementStyle: string = "text-[#9CA3AF] font-bold";
    return (
        <section className='container mx-auto my-10'>
            <div className='flex flex-col lg:flex-row gap-10 px-2'>
                <div className='flex-1 flex justify-center items-center'>
                    <div className='relative aspect-square w-full max-w-775 overflow-hidden rounded-2xl'>
                        <Image fill priority className='rounded-2xl object-cover' src={image} alt={name}></Image>
                    </div>
                </div>
                <div className='space-y-4 flex flex-col justify-center flex-1'>
                    <h2 className='text-white font-bold text-5xl'>{name}</h2>
                    <p className='text-lg text-[#9CA3AF]'>{description}</p>
                    <div className="mb-7 flex flex-wrap gap-3">
                        {
                            muscleGroups.map((muscleGroup, idx) => (
                                <span key={idx} className="rounded-full bg-lime-400 px-4 py-2 text-sm font-bold uppercase text-black">
                                    {muscleGroup}
                                </span>
                            ))
                        }
                    </div>
                    <div>
                        <div className='border rounded-2xl py-2'>
                            <div className={trStyle}>
                                <h3 className={tElementStyle}>EQUIPMENT</h3>
                                <h3 className={tElementStyle}>{equipment}</h3>
                            </div>
                            <div className={trStyle}>
                                <h3 className={tElementStyle}>DIFFICULTY</h3>
                                <h3 className={tElementStyle}>{difficulty}</h3>
                            </div>
                            <div className={trStyle}>
                                <h3 className={tElementStyle}>SETS</h3>
                                <h3 className={tElementStyle}>{sets}</h3>
                            </div>
                            <div className={trStyle}>
                                <h3 className={tElementStyle}>DURATION</h3>
                                <h3 className={tElementStyle}>{duration} min</h3>
                            </div>
                            <div className={trStyle}>
                                <h3 className={tElementStyle}>CALORIES</h3>
                                <h3 className={tElementStyle}>{caloriesBurned} kcal</h3>
                            </div>
                            <div className={`${trStyle} border-none`}>
                                <h3 className={tElementStyle}>RATING</h3>
                                <h3 className={tElementStyle}>{rating}</h3>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className='text-white font-bold text-2xl py-4'>INSTRUCTIONS</h3>
                        <ol className='text-[#9CA3AF] leading-8 text-lg'>
                            {
                                instructions.map((eachInst, idx) => <li key={idx}>{`${idx + 1}.  ${eachInst}`}</li>)
                            }
                        </ol>
                    </div>
                    <div className='flex gap-5'>
                        <ExerciseActions exercise={exercise}></ExerciseActions>
                    </div>
                </div>
            </div >
        </section>
    );
};

export default ExerciseDetailsPage;