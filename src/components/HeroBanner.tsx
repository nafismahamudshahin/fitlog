import React from 'react';
import Banner from "@/assets/banner.png";
import Image from 'next/image';
const HeroBanner = () => {
    return (
        <section className='container mx-auto bg-[#15171D] rounded-2xl my-12'>
            <div className='flex flex-col text-center md:text-start md:flex-row gap-10 justify-between items-center px-4 py-10 md:p-14'>
                <div className='flex-1 space-y-4'>
                    <p className='text-lime-400'>WORKOUT LIBRARY</p>
                    <h1 className='text-white font-extrabold text-2xl md:text-5xl'>TRAIN WITH INTENT. LOG EVERY SET.</h1>
                    <p className="text-[#9CA3AF]">FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
                        into today{`'`}s plan, and watch the week{`'`}s work add up.</p>
                    <button className='bg-lime-400 btn border-none'>BROWSE WORKOUTS</button>
                </div>
                <div className='flex-1 flex justify-end items-center'>
                    <Image width={334} height={334} src={Banner} alt='Hero banner'></Image>
                </div>
            </div>
        </section>
    );
};

export default HeroBanner;