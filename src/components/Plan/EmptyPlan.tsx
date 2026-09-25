import Link from 'next/link';

const EmptyPlan = () => {
    return (
        <div className='space-y-3 text-center border border-dashed border-[#252832] rounded-2xl py-20 my-10'>
            <h3 className=' text-2xl md:text-3xl font-bold text-white'>NOTHING HERE YET</h3>
            <p className='text-xl text-[#9CA3AF]'>Browse the library and add a lift to get today moving.</p>
            <Link href="/">
                <button className='hover:text-lime-400 hover:bg-transparent hover:border-lime-400  cursor-pointer border border-transparent bg-lime-400 py-2 rounded-2xl px-5 font-bold'>Go to workouts</button>
            </Link>
        </div>
    );
};

export default EmptyPlan;