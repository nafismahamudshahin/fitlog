

const PlanSummary = ({ data }: { data: { length: number, duration: number, calories: number } }) => {
    return (
        <div className='grid gap-8 grid-cols-1 md:grid-cols-3 rounded-2xl py-10 md:py-15 bg-[#13161D] border border-[#252832] my-8'>
            <div className='px-10 text-center'>
                <p className='text-[#9CA3AF]'>Exercises</p>
                <b className='text-lime-400 text-3xl'>{data.length}</b>
            </div>
            <div className='px-10 text-center border-y md:border-y-0 py-5 md:border-x md:px-6 border-[#8A92A0]'>
                <p className='text-[#9CA3AF]'>Minutes</p>
                <b className='text-white text-3xl'>{data.duration}</b>
            </div>
            <div className="px-10 text-center">
                <p className='text-[#9CA3AF]'>Calories</p>
                <b className='text-white text-3xl'>{data.calories}</b>
            </div>
        </div>
    );
};

export default PlanSummary;