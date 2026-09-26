
const ExerciseDetailsSkeleton = () => {
    return (
        <div className="container mx-auto py-10">
            <div className="flex flex-col lg:flex-row gap-6">

                {/* Left Image Skeleton */}
                <div className="w-full lg:w-1/2">
                    <div className="skeleton h-87.5 sm:h-112.5 lg:h-138.5 w-full rounded-2xl"></div>
                </div>

                {/* Right Content Skeleton */}
                <div className="w-full lg:w-1/2 flex flex-col gap-5">

                    {/* Title */}
                    <div className="skeleton h-10 w-3/4 rounded-lg"></div>

                    {/* Description */}
                    <div className="flex flex-col gap-2">
                        <div className="skeleton h-4 w-full rounded"></div>
                        <div className="skeleton h-4 w-11/12 rounded"></div>
                        <div className="skeleton h-4 w-2/3 rounded"></div>
                    </div>

                    {/* Tags */}
                    <div className="flex gap-3">
                        <div className="skeleton h-7 w-16 rounded-full"></div>
                        <div className="skeleton h-7 w-16 rounded-full"></div>
                    </div>

                    {/* Details Box */}
                    <div className="border border-[#252832] rounded-2xl overflow-hidden">

                        <div className="flex justify-between p-4 border-b border-[#252832]">
                            <div className="skeleton h-4 w-24 rounded"></div>
                            <div className="skeleton h-4 w-28 rounded"></div>
                        </div>

                        <div className="flex justify-between p-4 border-b border-[#252832]">
                            <div className="skeleton h-4 w-24 rounded"></div>
                            <div className="skeleton h-4 w-28 rounded"></div>
                        </div>

                        <div className="flex justify-between p-4 border-b border-[#252832]">
                            <div className="skeleton h-4 w-16 rounded"></div>
                            <div className="skeleton h-4 w-8 rounded"></div>
                        </div>

                        <div className="flex justify-between p-4 border-b border-[#252832]">
                            <div className="skeleton h-4 w-20 rounded"></div>
                            <div className="skeleton h-4 w-20 rounded"></div>
                        </div>

                        <div className="flex justify-between p-4 border-b border-[#252832]">
                            <div className="skeleton h-4 w-24 rounded"></div>
                            <div className="skeleton h-4 w-20 rounded"></div>
                        </div>

                        <div className="flex justify-between p-4">
                            <div className="skeleton h-4 w-16 rounded"></div>
                            <div className="skeleton h-4 w-12 rounded"></div>
                        </div>

                    </div>

                    {/* Instructions */}
                    <div className="flex flex-col gap-3">

                        <div className="skeleton h-6 w-36 rounded"></div>

                        <div className="flex flex-col gap-2">
                            <div className="skeleton h-4 w-full rounded"></div>
                            <div className="skeleton h-4 w-full rounded"></div>
                            <div className="skeleton h-4 w-11/12 rounded"></div>
                            <div className="skeleton h-4 w-10/12 rounded"></div>
                        </div>

                    </div>

                    {/* Buttons */}
                    <div className="flex gap-3">
                        <div className="skeleton h-9 w-36 rounded-lg"></div>
                        <div className="skeleton h-9 w-36 rounded-lg"></div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ExerciseDetailsSkeleton;