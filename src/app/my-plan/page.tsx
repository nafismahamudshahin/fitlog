import Link from 'next/link';
import React from 'react';

const MyPlanPage = () => {
    return (
        <section className='container mx-auto'>
            <div className='my-8'>
                <h2 className='text-white font-bold text-5xl'>MY PLAN</h2>
                <p className='text-lg text-[#9CA3AF]'>Cap of five lifts for today. Finish them, then load more.</p>
            </div>
            <div className='grid gap-8 grid-cols-3 rounded-2xl py-15 px-10 bg-[#13161D] border border-[#252832] my-8'>
                <div className=''>
                    <p className='text-[#9CA3AF]'>Exercises</p>
                    <b className='text-lime-400 text-3xl'>2</b>
                </div>
                <div className='border-x px-6 border-[#8A92A0]'>
                    <p className='text-[#9CA3AF]'>Exercises</p>
                    <b className='text-white text-3xl'>2</b>
                </div>
                <div>
                    <p className='text-[#9CA3AF]'>Exercises</p>
                    <b className='text-white text-3xl'>2</b>
                </div>
            </div>
            <div>
                <div className='flex justify-between'>
                    <div className='bg-[#13161D] text-[#9CA3AF]   flex gap-3 border border-[#252832] rounded-2xl p-1'>
                        <button className='border border-[#252832] rounded-2xl px-3 py-2'>Today{`'`}s Plan</button>
                        <button className='border border-[#252832] rounded-2xl px-10 py-2'>Saved</button>
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
                <div>

                </div>
            </div>
            <div className='space-y-3 text-center border border-dashed border-[#252832] rounded-2xl py-20 my-10'>
                <h3 className='text-3xl font-bold text-white'>NOTHING HERE YET</h3>
                <p className='text-xl text-[#9CA3AF]'>Browse the library and add a lift to get today moving.</p>
                <Link href="/">
                    <button className='hover:text-lime-400 hover:bg-transparent hover:border-lime-400  cursor-pointer border border-transparent bg-lime-400 py-2 rounded-2xl px-5 font-bold'>Go to workouts</button>
                </Link>
            </div>
        </section>
    );
};

export default MyPlanPage;