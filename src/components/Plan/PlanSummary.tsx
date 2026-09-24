

const PlanSummary = ({ data }: { data: { length: number, duration: number, calories: number } }) => {
    return (
        <div className='grid gap-8 grid-cols-3 rounded-2xl py-15 px-10 bg-[#13161D] border border-[#252832] my-8'>
            <div className=''>
                <p className='text-[#9CA3AF]'>Exercises</p>
                <b className='text-lime-400 text-3xl'>{data.length}</b>
            </div>
            <div className='border-x px-6 border-[#8A92A0]'>
                <p className='text-[#9CA3AF]'>Minutes</p>
                <b className='text-white text-3xl'>{data.duration}</b>
            </div>
            <div>
                <p className='text-[#9CA3AF]'>Calories</p>
                <b className='text-white text-3xl'>{data.calories}</b>
            </div>
        </div>
    );
};

export default PlanSummary;