import React from 'react';

const WorkoutSkeleton = () => {
    return (
        <section className='container mx-auto'>
            <div className="grid grid-cols-1 gap-9 md:grid-cols-2 lg:grid-cols-3 pt-20">
                {[...Array(6)].map((_, index) => (
                    <div
                        key={index}
                        className="overflow-hidden rounded-xl border border-[#252832] bg-[#12151B]"
                    >
                        <div className="skeleton h-64 w-full rounded-none" />

                        <div className="space-y-4 p-4">
                            <div className="flex gap-2">
                                <div className="skeleton h-5 w-14 rounded-full" />
                                <div className="skeleton h-5 w-16 rounded-full" />
                            </div>

                            <div className="skeleton h-5 w-40" />

                            <div className="skeleton h-4 w-24" />

                            <div className="h-px w-full bg-[#252832]" />

                            <div className="flex gap-4">
                                <div className="skeleton h-4 w-14" />
                                <div className="skeleton h-4 w-16" />
                                <div className="skeleton h-4 w-12" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WorkoutSkeleton;